import React from 'react'

const subNavItem = (props: {subNav: string[]}): JSX.Element => {

    let subNavItem = props.subNav.map((item: string): JSX.Element => 
                        <span key={item} className="subNavItem">{item}</span>
                    )

    return (
        <div className="subNav">
            {subNavItem}
        </div> 
    )
}

export default subNavItem