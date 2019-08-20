import React from 'react'
import Nav from './Nav/Nav'
import Flags from './Flags/Flags'

const header = (): JSX.Element => (
    <header className="header">
        <Nav />
        <Flags />
    </header>
)

export default header