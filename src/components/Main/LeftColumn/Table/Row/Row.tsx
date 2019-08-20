import React from 'react'
import Cell from './Cell/Cell'

type Props = {
    keys: string[];
    data: []
}

const row = (props: Props): JSX.Element => (
    <tr>
        <Cell data={props.data} keys={props.keys}/>
    </tr>
)

export default row