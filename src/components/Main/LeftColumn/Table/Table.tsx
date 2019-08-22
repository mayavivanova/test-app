import React, { Component } from 'react'
import { any } from 'prop-types';

type TableProps = {
    sortByKey?: any;
    updateCurrentPageOnClick?: any;
    table: [];
    currentPage: number;
    keys: string[]
};

export class Table extends Component<TableProps> {

    renderHeader = (keys: string[]): React.ReactNode => (
        keys.map((keyData: string, index: number): JSX.Element => (
            <th key={index} onClick={() => this.props.sortByKey(keyData)}>
                {keyData}    
                <span title="Sort ASC/DESC">
                    <span className="arrow up"></span>
                    <span className="arrow down"></span>
                </span>     
            </th>
        ))
    )

    renderRows = (table: [], currentPage: number, keys: string[]): {} => {
        const rows =  
            table.slice((currentPage-1) * 100, currentPage * 100)
                .map((row: [], index: number): JSX.Element => {
                    return (
                        <tr key={index}>
                            {this.renderCell(row, keys)}
                        </tr>
                    )
                });
        return rows;
    }

    renderCell = (data: any, keys: any): JSX.Element => (
        keys.map((key: string, index: number): JSX.Element => {
            if(key === 'Avatar' && data[key]) {
                return (
                    <td key={index}>
                        <img src={data[key]} alt={key}/>
                    </td>
                )
            } else {
                return <td key={index}>{data[key]}</td>
            }
        })
    )

    renderPagination = (table: [], currentPage: number, keys: string[]): any => {

        const arrPages = [...Array(Math.ceil(table.length / 100))]
            .map((_, n: number): any => (
                <span key={n+1} onClick={() => this.reRenderOnClick(table, (n+1), keys)}>{n+1}</span>
                
            ))
        return arrPages;        
    }

    reRenderOnClick = (table: any, currentPage: any, keys: string[]): any => {
        const updatedCurrentPage = this.props.updateCurrentPageOnClick;
            if (currentPage !== updatedCurrentPage) {
                updatedCurrentPage(currentPage)
                return (            
                    this.renderRows(table, currentPage, keys)
                )
            }
    }

    render() {      
        const { table, currentPage, keys } = this.props;

        return (
            <div>
                <div className="pagination">
                    {this.renderPagination(table, currentPage, keys)}
                </div>

                <table className="dataTable" >
                <thead>
                    <tr>
                        {this.renderHeader(keys)}
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows(table, currentPage, keys)}
                </tbody>
                </table>

                <div className="pagination">
                    {this.renderPagination(table, currentPage, keys)}
                </div> 
                
            </div>
        )
    }
  }