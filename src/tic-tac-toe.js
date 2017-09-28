class TicTacToe {
    constructor() {
        this.field = [[], [], []];
        this.player = 'x';
        this.turn = 0;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === undefined && !this.isFinished()) {
            this.turn++;
            this.field[rowIndex][columnIndex] = this.player;
            this.switchSymbol();
            this.chkWinner();
        }
    }

    switchSymbol() {
        this.player === 'x' ? this.player = 'o' : this.player = 'x';
    }

    isFinished() {
        return this.winner !== null || this.isDraw();
    }

    chkWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.field[i][0] === this.field[i][1] && this.field[i][1] === this.field[i][2] && this.field[i][1] !== undefined)
                this.winner = this.field[i][0];
            if (this.field[0][i] === this.field[1][i] && this.field[1][i] === this.field[2][i] && this.field[1][i] !== undefined)
                this.winner = this.field[0][i];
        }
        if (this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2] && this.field[1][1] !== undefined)
            this.winner = this.field[1][1];
        if (this.field[0][2] === this.field[1][1] && this.field[1][1] === this.field[2][0] && this.field[1][1] !== undefined)
            this.winner = this.field[1][1];
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.turn === 9;
    }

    isDraw() {
        return this.turn === 9 && this.winner === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex] === undefined ? null : this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
