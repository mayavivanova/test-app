import React from 'react'

import { Nav } from './Nav/Nav'
import { Main, Boxes, Content, Table } from './Main'
import { Footer } from './Footer/Footer'


const App = (): JSX.Element => (
    <div className="wrapper">
        <div className="logo"><span>Logo</span></div>
        <header className="header">
            <Nav />
            <div className="flags">
                <div className="flag one active"></div>                
                <div className="flag two"></div>                
                <div className="flag three"></div>
            </div>
        </header>
        <Main>
            <section className="leftColumn">
                <div className="content">
                    <Content />
                    <Table/>
                </div>
            </section>
            <aside className="rightColumn">
                <Boxes />
            </aside>
        </Main>
        <Footer />
    </div>
)

export default App