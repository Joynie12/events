class Scoreboard {
  constructor() {
    this.scoreElement = document.getElementById('score');
    this.missedElement = document.getElementById('missed');
  }

  updateScore(score) {
    this.scoreElement.textContent = `Score: ${score}`;
  }

  updateMissed(missed) {
    this.missedElement.textContent = `Missed: ${missed}`;
  }
}
