import React, { Component } from 'react'
import { Box } from './Box/Box'
import { boxesData } from '../../../../data/boxesData'


type BoxesState = {open?: boolean; currentIndex?: number; currentOpen?: boolean}

export class Boxes extends Component<BoxesState> {
    
    state: BoxesState = {
        open: false,
        currentIndex: -1,
        currentOpen: false
    }

    handleChange = async (index: number): Promise<any> => {
        if (this.state.currentIndex === index) {
            await this.setState({
                open: !this.state.open
            })
        } else {
            await this.setState({
                open: true,
                currentIndex: index
            })
        }        
    }


    render () {
        const { open, currentIndex } = this.state;
        const boxes = boxesData.map((box: {content: string, id: number}, i: number): JSX.Element => {
            return (
                <Box 
                    key={box.id} 
                    content={box.content} 
                    index={i}
                    open={open}
                    currentIndex={currentIndex}
                    handleChange={this.handleChange}/>   
            )})
        
        return (
            <div className="content">
                {boxes}                
            </div>
        )
    }
}