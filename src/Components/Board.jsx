import React, { Component } from 'react';
import Square from './Square.jsx';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill('.')
        }
    }
    render() {
        return (
            <div className="Board">
                <div className="Board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="Board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="Board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
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
        squares[i] = (squares[i] === 'x') ? 'o':'x'
        this.setState({ board: squares })
    }
}

export default Board;