import React from 'react'

type Props = {
    onClickPage: (event: React.MouseEvent<HTMLElement>) => void;
    pageNum: number
}
const pagination = (props: Props): any => {
    return (
        <span onClick={props.onClickPage}>{props.pageNum}</span>
    )
}

export default pagination