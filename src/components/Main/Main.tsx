import React, { PureComponent } from 'react';

export class Main extends PureComponent<{}, {}> {
    render () {
        return (
            <main className="main">
                {this.props.children}
            </main>
        )
    }   
}