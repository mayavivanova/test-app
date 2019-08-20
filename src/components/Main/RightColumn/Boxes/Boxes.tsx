import React, { Component } from 'react'
import Box from './Box/Box'

const boxesContent = [
    {id: 1, content: '1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus book.  desktop publishing software like Aldus PageMaker including versions of Lorem ageMaker including versions of Lorem Ipsum...'},
    {id: 2, content: '2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus book.  desktop publishing software like Aldus PageMaker including versions of Lorem ageMaker including versions of Lorem Ipsum...'},
    {id: 3, content: '3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus book.  desktop publishing software like Aldus PageMaker including versions of Lorem ageMaker including versions of Lorem Ipsum...'}
]

type BoxesState = {open?: boolean; currentIndex?: number; currentOpen?: boolean}

class Boxes extends Component<BoxesState> {
    
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
        const boxes = boxesContent.map((box: {content: string, id: number}, i: number): JSX.Element => {
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

export default Boxes