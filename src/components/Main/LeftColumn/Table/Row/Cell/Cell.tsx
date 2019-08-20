import React from 'react'

type Props = {
    keys: any;
    data: any
}

const cell = (props: Props): JSX.Element => (
    props.keys.map((key: string, index: number): JSX.Element => {
        if(key === 'Avatar' && props.data[key]) {
            return (
                <td key={index}>
                    <img src={props.data[key]} alt={key}/>
                </td>
            )
        } else {
            return <td key={index}>{props.data[key]}</td>
        }
    })
)

export default cell