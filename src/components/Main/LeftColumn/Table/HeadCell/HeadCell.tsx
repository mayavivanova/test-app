import React from 'react'

type HeadCellProps = {
    sortByColumn: (event: React.MouseEvent<HTMLElement>) => JSX.Element;
    keyData: string
}

const headCell = (props: HeadCellProps): JSX.Element => (
    <th onClick={props.sortByColumn}>
        {props.keyData}    
        <span title="Sort ASC/DESC">
            <span className="arrow up"></span>
            <span className="arrow down"></span>
        </span>     
        
    </th>
)

export default headCell