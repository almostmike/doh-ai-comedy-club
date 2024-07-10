class ScoreKeeper {
  constructor() {
    this.score = 0;
  }

  updateScore(jokeRating) {
    switch(jokeRating) {
      case 3: // Cheer
        this.score += 1000;
        break;
      case 2: // Meh
        // Score doesn't change
        break;
      case 1: // Boo
        this.score -= 500;
        break;
      default:
        console.error("Invalid joke rating");
    }
  }

  getScore() {
    return this.score;
  }

  resetScore() {
    this.score = 0;
  }
}
