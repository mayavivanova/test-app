import React from 'react'

export const SubNavItem = (props: {subNav: string[]}): JSX.Element => {

    let subItem = props.subNav.map((item: string): JSX.Element => 
                        <span key={item} className="subNavItem">{item}</span>
                    )

    return (
        <div className="subNav">
            {subItem}
        </div> 
    )
}