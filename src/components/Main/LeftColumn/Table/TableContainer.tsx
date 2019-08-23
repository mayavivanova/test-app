import React, { Component } from 'react'
import { Table } from './Table';

type TableState = {
    loading?: boolean;
    table?: any;
    error?: string | null;
    currentPage?: any;
    prevKey?: string
};
type PropsType = {
    data?: any
}

export class TableContainer extends Component<PropsType, TableState> {
    state: TableState = {
        loading: false,
        table: [],
        error: null,
        currentPage: 1, 
        prevKey: ''
    }
    
    componentDidMount() {
        this.setState({loading: true})
        
        this.props.data.then((data: any) =>{
            this.setState({
              loading: false,
              table: data
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

    updateCurrentPageOnClick = (currentPage: any): any => {
        this.setState({
            currentPage: currentPage
        })
    }

    sortByKey = (key: string): any => {
        let prevKey = this.state.prevKey;
        
        if(key !== prevKey) {     
            this.setState({
                prevKey: key,
                table: this.state.table.sort((a: any, b: any): number | null => {
                    if(isNaN(a[key]) && isNaN(b[key])) {
                        let x = String(a[key]).toLowerCase(); 
                        let y = String(b[key]).toLowerCase(); 
                        if (x > y) 
                            return 1 
                        if (x < y) 
                            return -1 
                        return 0;
                    } else if (a[key] === null) {
                        return -1;
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

    render () {
        const { loading, table, error } = this.state;

        if(error) {
            return <p>{error}</p>
        }
        else if(loading) {
            return <p>Loading...</p>
        }         
        return (
            <Table 
                table={this.state.table} 
                keys={this.getKeys(table)}
                currentPage={this.state.currentPage}
                updateCurrentPageOnClick={this.updateCurrentPageOnClick}
                sortByKey={this.sortByKey}
                />
        )
        
    }
}