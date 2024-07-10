class DohAIComedyClub {
    constructor(jokeGroups, soundManager) {
        this.jokeGroups = jokeGroups;
        this.jokeSelector = new JokeSelector(jokeGroups.length);
        this.scoreKeeper = new ScoreKeeper();
        this.currentRound = 0;
        this.maxRounds = 10;
        this.currentJokes = null;
        this.ui = null;
        this.soundManager = soundManager;
    }

    setUI(ui) {
        this.ui = ui;
    }

    startGame() {
        console.log("Starting game");
        this.jokeSelector.resetUsedGroups();
        this.scoreKeeper.resetScore();
        this.currentRound = 0;
        this.nextRound();
    }

    nextRound() {
        console.log("Next round called, current round:", this.currentRound);
        if (this.currentRound >= this.maxRounds) {
            console.log("Max rounds reached, ending game");
            this.endGame();
            return;
        }
        this.currentRound++;
        const groupId = this.jokeSelector.selectJokeGroup();
        console.log("Selected group ID:", groupId);
        if (groupId === null || groupId === undefined) {
            console.log("No more joke groups available, ending game");
            this.endGame();
            return;
        }
        if (this.jokeGroups[groupId - 1]) {
            this.currentJokes = this.jokeGroups[groupId - 1].jokes;
            console.log("Current jokes:", this.currentJokes);
            if (this.ui) {
                this.ui.updateRound(this.currentRound);
                this.ui.updateJokes(this.currentJokes);
            } else {
                console.error("UI not set. Cannot update round and jokes.");
            }
        } else {
            console.error("Invalid group ID:", groupId);
            this.endGame();
        }
    }

    async selectJoke(jokeIndex) {
        console.log(`DohAIComedyClub: Joke selected: ${jokeIndex}`);
        if (!this.currentJokes) return;
        const selectedJoke = this.currentJokes[jokeIndex];
        await this.playDrumroll();
        this.revealJokeResponse(selectedJoke);
        this.scoreKeeper.updateScore(selectedJoke.rating);
        if (this.ui) {
            this.ui.updateScore(this.scoreKeeper.getScore());
        }
        const delay = selectedJoke.response === 'Boo' ? 8000 : 3000;
        setTimeout(() => this.nextRound(), delay);
    }

    async playDrumroll() {
        return new Promise(resolve => {
            if (this.soundManager) {
                this.soundManager.play('drumroll');
            } else {
                console.error("Sound manager not available");
            }
            setTimeout(resolve, 2000);
        });
    }

    revealJokeResponse(joke) {
        if (this.ui) {
            this.ui.showResponse(joke.response);
        } else {
            console.error("UI not set. Cannot show response.");
        }
        this.playResponseSound(joke.rating);
    }

    playResponseSound(rating) {
        if (!this.soundManager) {
            console.error("Sound manager not available");
            return;
        }
        switch(rating) {
            case 3:
                this.soundManager.play('cheer');
                break;
            case 2:
                this.soundManager.play('meh');
                break;
            case 1:
                this.soundManager.play('boo');
                break;
            default:
                console.error("Invalid rating for sound:", rating);
        }
    }

    endGame() {
        console.log("Game ended");
        if (this.ui) {
            this.ui.endGame(this.scoreKeeper.getScore());
        } else {
            console.error("UI not set. Cannot end game.");
        }
    }
}