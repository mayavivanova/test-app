import React from 'react'
import Content from './Content/Content'
import Table from './Table/Table'

const leftColumn = (): JSX.Element => (
    <section className="leftColumn">
        <div className="content">
            <Content />
            <Table/>
        </div>
    </section>
)

export default leftColumn