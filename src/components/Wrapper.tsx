import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const wrapper = (): JSX.Element => (
    <div className="wrapper">
        <div className="logo"><span>Logo</span></div>
        <Header />
        <Main />
        <Footer />
    </div>
)

export default wrapper