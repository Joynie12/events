export default class Cursor {
  constructor() {
    this.cursorElement = document.createElement('div');
    this.cursorElement.classList.add('cursor');
    document.body.appendChild(this.cursorElement);
    this.updatePosition();
    this.registerClickListener();
  }

  attachToGame(game) {
    this.game = game;
  }

  updatePosition(event) {
    const { clientX, clientY } = event || {};
    this.cursorElement.style.left = `${clientX}px`;
    this.cursorElement.style.top = `${clientY}px`;
  }

  registerClickListener() {
    document.addEventListener('click', this.handleClick);
  }

  unregisterClickListener() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = () => {
    if (this.game) {
      this.game.handleGoblinHit();
    }
  }
}
