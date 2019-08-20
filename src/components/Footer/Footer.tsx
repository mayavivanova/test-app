import React from 'react'

const footerData = {
    copyRight: `2003 - 2011 \u00a9 Copyright 10Bet.com Ltd. All rights reserved.`,
    links: [
        {text: 'Home', url: '/'},
        {text: 'Terms of use', url: '/terms'}, 
        {text: 'Responsible gaming', url: '/responsible-gaming'},
        {text: 'Contact us', url: '/contact'}]
}

const footer = () => {

    const links = footerData.links.map((link: {text: string}): JSX.Element => (
        <span key={link.text}>{link.text}</span>
    ))

    return (
        <footer className="footer">
            <div className="copyRight">
                {footerData.copyRight}
            </div>
            <div className="links">
                {links}
            </div>
        </footer>
    )
}

export default footer