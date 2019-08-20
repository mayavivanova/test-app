import React from 'react'
import SubNavItem from './SubNavItem/SubNavItem'
 
type Props = {
    subNav?: string[];
    value?: string;
    show?: boolean;
    hovered?: number | null;
    item?: {};
    onShowSubNav?: () => void;
    onHideSubNav?: () => void;
}

const navItem = (props: Props): JSX.Element => {
    
    let subNavigation: JSX.Element | null = null;
    let arrow: JSX.Element | null = null;

    if (props.subNav) {
        arrow = <span className="arrow"></span>     
    } 

    if (props.subNav && props.show && props.hovered === props.item) {
        subNavigation = <SubNavItem subNav={props.subNav}/>
    } 
    
    return (
        <span 
            className="navItem" 
            onMouseEnter={props.onShowSubNav}
            onMouseLeave={props.onHideSubNav}>
                {props.value} 
                {arrow}
                {subNavigation}
        </span>
    )
}

export default navItem