import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from '../square/square.component';  // Import SquareComponent

@Component({
  selector: 'app-board',
  standalone: true,  // Standalone component
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  imports: [CommonModule, SquareComponent]  // Import CommonModule and SquareComponent
})
export class BoardComponent {
  squares: any[] = [];
  xIsNext: boolean = true;
  winner: string | null = null;

  constructor() {
    this.resetGame();
  }

  resetGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        this.highlightWinningSquares(line);  // Call this function to highlight winning squares
        return this.squares[a];
      }
    }
    return null;
  }

  highlightWinningSquares(line: number[]) {
    line.forEach(index => {
      const squareElement = document.querySelectorAll('app-square button')[index];
      squareElement?.classList.add('winner');
    });
  }
}
