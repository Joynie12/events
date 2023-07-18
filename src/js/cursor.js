export default class Cursor {
    constructor() {
      this.cursorElement = document.createElement('div');
      this.cursorElement.classList.add('cursor');
      document.body.appendChild(this.cursorElement);
      this.updatePosition();
      this.registerClickListener();
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
        handleClick = () => {
            const game = new Game();
            game.increaseScore(); 
            game.removeGoblin(); 
            game.spawnNewGoblin(); 

            game.updateGameState();
          
            game.updateUI();
          }
          
    }
  }