export default class Board {
    constructor() {
      this.cells = [];
      this.rows = 4; // Количество рядов
      this.columns = 4; // Количество столбцов
      this.container = document.getElementById('game-board');
      this.createCells();
    }
  
    createCells() {
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < this.columns; col++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.id = `cell-${row}-${col}`;
          this.cells.push(cell);
          this.container.appendChild(cell);
        }
      }
    }
  
    getRandomCell() {
      const randomIndex = Math.floor(Math.random() * this.cells.length);
      return this.cells[randomIndex];
    }
  }
  