import React from 'react';
import LeftColumn from './LeftColumn/LeftColumn'
import RightColumn from './RightColumn/RightColumn'

const main = (): JSX.Element => (
    <main className="main">
        <LeftColumn />
        <RightColumn />
    </main>
)

export default main