export default class Goblin {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('goblin');
    this.hitCallback = null; 
    this.missedCallback = null;

    this.element.addEventListener('click', () => {
      this.handleHit();
    });
  }

  spawn() {
    const randomCell = this.getRandomCell();
    randomCell.appendChild(this.element); 
    setTimeout(() => {
      this.despawn();
      if (this.missedCallback) {
        this.missedCallback();
      }
    }, 1000);
  }

  despawn() {
    this.element.remove();
  }

  getRandomCell() {
    const cells = document.querySelectorAll('.cell');
    const randomIndex = Math.floor(Math.random() * cells.length);
    return cells[randomIndex];
  }

  handleHit() {
    if (this.hitCallback) {
      this.hitCallback();
    }
    this.despawn();
  }

  onHit(callback) {
    this.hitCallback = callback;
  }

  onMissed(callback) {
    this.missedCallback = callback;
  }
}
