class DohAIComedyClub {
  constructor(jokeGroups) {
    this.jokeGroups = jokeGroups;
    this.jokeSelector = new JokeSelector(jokeGroups.length);
    this.scoreKeeper = new ScoreKeeper();
    this.currentRound = 0;
    this.maxRounds = 10;
    this.currentJokes = null;
    this.ui = null; // Will be set by UIController
    this.sounds = {
      drumroll: new Audio('sounds/drumroll.mp3'),
      cheer: new Audio('sounds/cheer.mp3'),
      meh: new Audio('sounds/meh.mp3'),
      boo: new Audio('sounds/boo.mp3')
    };
  }

  setUI(ui) {
    this.ui = ui;
  }

  startGame() {
    this.jokeSelector.resetUsedGroups();
    this.scoreKeeper.resetScore();
    this.currentRound = 0;
    this.nextRound();
  }

  nextRound() {
    if (this.currentRound >= this.maxRounds) {
      this.endGame();
      return;
    }

    this.currentRound++;
    const groupId = this.jokeSelector.selectJokeGroup();
    if (groupId === null) {
      this.endGame();
      return;
    }

    this.currentJokes = this.jokeGroups[groupId - 1].jokes;
    this.ui.updateRound(this.currentRound);
    this.ui.updateJokes(this.currentJokes);
  }

  async selectJoke(jokeIndex) {
    if (!this.currentJokes) return;

    const selectedJoke = this.currentJokes[jokeIndex];
    await this.playDrumroll();
    this.revealJokeResponse(selectedJoke);
    this.scoreKeeper.updateScore(selectedJoke.rating);
    this.ui.updateScore(this.scoreKeeper.getScore());

    setTimeout(() => this.nextRound(), 3000); // Wait 3 seconds before next round
  }

  async playDrumroll() {
    return new Promise(resolve => {
      this.sounds.drumroll.play();
      this.sounds.drumroll.onended = resolve;
    });
  }

  revealJokeResponse(joke) {
    this.ui.showResponse(joke.response);
    this.playResponseSound(joke.rating);
  }

  playResponseSound(rating) {
    switch(rating) {
      case 3:
        this.sounds.cheer.play();
        break;
      case 2:
        this.sounds.meh.play();
        break;
      case 1:
        this.sounds.boo.play();
        break;
    }
  }

  endGame() {
    this.ui.endGame(this.scoreKeeper.getScore());
  }
}

// Usage
const game = new DohAIComedyClub(jokeGroups);
const uiController = new UIController(game);
game.setUI(uiController);