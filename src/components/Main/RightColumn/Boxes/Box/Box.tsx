import React from 'react'

type Props = {
    handleChange: (index: any) => Promise<any>;
    index?: number;
    currentIndex?: number | undefined;
    open?: boolean | undefined;
    content?: string;
    title?: string

}
const box = (props: Props): JSX.Element => {

    const condition = (props.index === props.currentIndex) && props.open;
    const heading = condition ? 'Click to close' : 'Click to open';
    const arrow = condition ? 
                        <span className="arrow"></span> 
                        : <span className="arrow right"></span>;
    const boxClassNames = condition ? 'box active' : 'box';
    const boxContent = condition ? 
                        <div className="boxContent">{props.content}</div> 
                        : null

    return (
        <div className={boxClassNames}>
            <div 
                className="boxHeading"
                onClick={() => props.handleChange(props.index)}>
                    {heading}
                    {arrow}
            </div>
            {boxContent}
        </div>
    ) 
}

export default box