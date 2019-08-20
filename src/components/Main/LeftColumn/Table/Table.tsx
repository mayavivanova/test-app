import React, { Component } from 'react'
import HeadCell from './HeadCell/HeadCell'
import Row from './Row/Row'
import Pagination from './Pagination/Pagination'

type TableState = {
    loading?: boolean;
    table?: any;
    error?: string | null;
    perPage?: any;
    currentPage?: any;
    alreadySortedKeys?: any
};

class Table extends Component<TableState> {

    state: TableState = {
        loading: false,
        table: [],
        error: null,
        perPage: 100,
        currentPage: 1, 
        alreadySortedKeys: []
    }

    componentDidMount () {
        this.setState({loading: true})
        fetch('http://cdn.sbtech.com/rj/mocks/MOCK_DATA.json')
            .then(res => {
                if(res.ok) return res.json()
                else {
                    throw new Error ('Cannot load data...')
                }
            })
            .then(data => {
                this.setState({
                    loading: false,
                    table: data
                })
            })
            .catch((error) => {
                this.setState({ 
                    error, 
                    isLoading: false
                })
            })
    }


    getKeys = (table: []): string[] => {
        let keyArr: any = [];
        table.map((obj: {key: string}): string[] => {
            return Object.keys(obj).map((key: string): string => {
                key = key.toString()

                if(!keyArr.includes(key)) {
                    keyArr.push(key)    
                }    
                return keyArr
            })                     
        });
        return keyArr
    }

    sortByKey = (key: string): any => {
        let sortingArr = this.state.alreadySortedKeys;
        
        if(sortingArr.indexOf(key) === -1) {            
            sortingArr.push(key);
            this.setState({
                alreadySortedKeys: sortingArr,
                table: this.state.table.sort((a: any, b: any): number => {
                    if(isNaN(a[key]) && isNaN(b[key])) {
                        let x = String(a[key]).toLowerCase(); 
                        let y = String(b[key]).toLowerCase(); 
                        if (x > y) 
                            return 1 
                        if (x < y) 
                            return -1 
			            return 0;
                    } else {
                        return a[key] - b[key];
                    }
                })
            })
        } else {
            this.setState({
                table: this.state.table.reverse()
            })
        }
    }

    getHeader = (keys: string[]): React.ReactNode => (
        keys.map((keyData: string, index: number): JSX.Element => (
            <HeadCell 
                key={index} 
                keyData={keyData} 
                sortByColumn={() => this.sortByKey(keyData)}/>
        ))
    )

    getCurrentPage = (currentPage: number): void => {
        this.setState({
            currentPage: currentPage
        })
    }

    getRowsData = (): JSX.Element => {
        const { table, currentPage } = this.state;
        const keys = this.getKeys(table);

        const { perPage } = this.state;   
        const rows =  
            table.slice((currentPage-1) * perPage, currentPage * perPage)
                .map((row: [], index: number): JSX.Element => {
                    return  <Row 
                                key={index} 
                                data={row} 
                                keys={keys}/>
                });
        return rows;
    }

    renderRowsDataOnClick = (currentPage: number): () => void => {
        this.setState({
            currentPage: currentPage
        })
        return this.getRowsData
    }

    renderPagination = (): React.ReactNode => {
        const { table, perPage } = this.state;

        const arrPages = [...Array(Math.ceil(table.length / perPage))]
                            .map((_, n: number): JSX.Element => (
                                <Pagination 
                                    key={n+1} 
                                    pageNum={n+1} 
                                    onClickPage={() => 
                                        this.renderRowsDataOnClick(n+1)}
                                />
                            ))
        return arrPages;        
    }

    render () {
        
        const { loading, table, error } = this.state;
        const keys = this.getKeys(table);

        if(error) {
            return <p>{error}</p>
        }
        if(loading) {
            return <p>Loading...</p>
        } 
        
        return (
            <div>
                <div className="pagination">
                    {this.renderPagination()} 
                </div>

                <table className="dataTable" >
                <thead>
                    <tr>
                        {this.getHeader(keys)}
                    </tr>
                </thead>
                <tbody>
                    {this.getRowsData()}
                </tbody>
                </table>

                <div className="pagination">
                    {this.renderPagination()} 
                </div> 
                
            </div>
           
            
        )
    }
}

export default Table