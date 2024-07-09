class UIController {
    constructor(game) {
        this.game = game;
        this.bindElements();
        this.bindEvents();
    }

    bindElements() {
        this.splashScreen = document.getElementById('splash-screen');
        this.gameScreen = document.getElementById('game-screen');
        this.endScreen = document.getElementById('end-screen');
        this.startButton = document.getElementById('start-button');
        this.restartButton = document.getElementById('restart-button');
        this.scoreDisplay = document.getElementById('score');
        this.roundDisplay = document.getElementById('round');
        this.jokeOptions = document.getElementById('joke-options');
        this.responseOverlay = document.getElementById('response-overlay');
        this.responseText = document.getElementById('response-text');
        this.finalScore = document.getElementById('final-score');
    }

    bindEvents() {
        this.startButton.addEventListener('click', () => this.startGame());
        this.restartButton.addEventListener('click', () => this.startGame());
    }

    startGame() {
        this.showScreen(this.gameScreen);
        this.game.startGame();
    }

    showScreen(screen) {
        [this.splashScreen, this.gameScreen, this.endScreen].forEach(s => s.classList.add('hidden'));
        screen.classList.remove('hidden');
    }

    updateJokes(jokes) {
        this.jokeOptions.innerHTML = '';
        jokes.forEach((joke, index) => {
            const jokeElement = document.createElement('div');
            jokeElement.classList.add('joke-option');
            jokeElement.textContent = `${index + 1}. ${joke.text}`;
            jokeElement.addEventListener('click', () => this.game.selectJoke(index));
            this.jokeOptions.appendChild(jokeElement);
        });
    }

    updateScore(score) {
        this.scoreDisplay.textContent = score;
    }

    updateRound(round) {
        this.roundDisplay.textContent = round;
    }

    showResponse(response) {
        this.responseText.textContent = response;
        this.responseOverlay.classList.remove('hidden');
        setTimeout(() => this.responseOverlay.classList.add('hidden'), 2000);
    }

    endGame(finalScore) {
        this.finalScore.textContent = finalScore;
        this.showScreen(this.endScreen);
    }
}

// Usage
const uiController = new UIController(game);
game.ui = uiController;  // Add UI controller to the game