import React, { Component } from 'react'
import NavItem from './NavItem/NavItem'

const navItems: NavItems[]  = [
    {text:'Home', url: '/'},
    {text: 'Sports', url: '/sports'},
    {text: 'Casino', url: '/casino'},
    {text: 'Games', url: '/games', subNav: ['Mega Moolah', 'The curse of the Black Pearl', 'Super slots attack']}
]

type NavItems = { text?: string; url?: string; subNav?: string[]}
type NavState = { show?: boolean; hovered?: number | null}

class Nav extends Component<NavState> {
    state: NavState = {
        show: false,
        hovered: null
    }

    onShowSubNav(i: NavItems): void {
        this.setState({
            show: true,
            hovered: i
        })
    }

    onHideSubNav(i: NavItems): void {
        this.setState({
            show: false,
            hovered: i
        })
    }

    render () {
        const { show, hovered } = this.state;

        let item = navItems.map((item: NavItems): JSX.Element => (
            <NavItem 
                key={item.text} 
                item={item}
                value={item.text} 
                subNav={item.subNav} 
                show={show}
                hovered={hovered}
                onShowSubNav={() => this.onShowSubNav(item)}
                onHideSubNav={() => this.onHideSubNav(item)}/>
        )) 

        return (
            <nav className="nav">
                {item}
            </nav>
        )
    }
}

export default Nav