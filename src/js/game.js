class Game {
  constructor() {
    this.score = 0;
    this.missedGoblins = 0;
    this.goblinInterval = null;

    this.scoreboardElement = document.getElementById('scoreboard');
    this.missedElement = document.getElementById('missed');
    this.startButton = document.getElementById('start-button');

    this.startButton.addEventListener('click', () => {
      this.startGame();
    });
  }

  startGame() {
    this.score = 0;
    this.missedGoblins = 0;
    this.updateScoreboard();

    this.startGoblinSpawn();

    setTimeout(() => {
      this.endGame();
    }, 5000);
  }

  startGoblinSpawn() {
    this.goblinInterval = setInterval(() => {
      this.spawnGoblin();
    }, 1000);
  }

  spawnGoblin() {
    const goblin = new Goblin();
    goblin.onHit(() => {
      this.handleGoblinHit();
    });
    goblin.onMissed(() => {
      this.handleGoblinMissed();
    });
    goblin.spawn();
  }

  handleGoblinHit() {
    this.score += 1;
    this.updateScoreboard();
  }

  handleGoblinMissed() {
    this.missedGoblins += 1;
    this.updateScoreboard();
  }

  updateScoreboard() {
    this.scoreboardElement.textContent = `Score: ${this.score}`;
    this.missedElement.textContent = `Missed: ${this.missedGoblins}`;
  }

  endGame() {
    clearInterval(this.goblinInterval);    
  }
}
