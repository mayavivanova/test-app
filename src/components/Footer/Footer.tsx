import React from 'react'
import { footerData } from '../../data/footerData'

export const Footer = (): JSX.Element => {

    const links = footerData.links.map((link: {text: string}): JSX.Element => (
        <span key={link.text}>{link.text}</span>
    ))
    const copyRight = footerData.copyRight;

    return (
        <footer className="footer">
            <div className="copyRight">
                {copyRight}
            </div>
            <div className="links">
                {links}
            </div>
        </footer>
    )
}
