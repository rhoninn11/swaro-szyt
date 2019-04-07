import React, { Component } from 'react';
import styled from 'styled-components'

import Square from './Square.jsx';

const BoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Row = styled.div`display: flex;`


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill('.')
        }
    }
    render() {
        return (
            <BoardWrapper>
                <Row>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </Row>
                <Row>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </Row>
                <Row>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </Row>
            </BoardWrapper>
        );
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.board[i]}
                onClick={() => this.handleClick(i)}
            />
        )
    }

    handleClick(i) {
        const squares = this.state.board.slice();
        squares[i] = (squares[i] === 'x') ? 'o' : 'x'
        this.setState({ board: squares })
    }
}

export default Board;