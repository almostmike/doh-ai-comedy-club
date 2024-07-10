class UIController {
    constructor(game) {
        this.game = game;
        this.elements = {};
        this.themeMusic = document.getElementById('theme-music');
        this.bindElements();
        this.bindEvents();
    }

    bindElements() {
        const elementIds = [
            'splash-screen', 'game-screen', 'end-screen', 'start-button', 'restart-button',
            'score', 'round', 'joke-options', 'response-overlay', 'response-text', 'final-score'
        ];

        elementIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                this.elements[id] = element;
            } else {
                console.warn(`Element with id '${id}' not found.`);
            }
        });

        console.log("UI elements binding completed");
    }

    bindEvents() {
        this.bindButtonEvent('start-button', this.startGame.bind(this));
        this.bindButtonEvent('restart-button', this.startGame.bind(this));
        document.addEventListener('click', this.tryPlayMusic.bind(this), { once: true });
        console.log("Event listeners binding completed");
    }

    bindButtonEvent(buttonId, handler) {
        if (this.elements[buttonId]) {
            this.elements[buttonId].addEventListener('click', handler);
        } else {
            console.warn(`${buttonId} not found, can't bind click event.`);
        }
    }

    startGame() {
        console.log("UI Controller: Starting game");
        this.stopThemeMusic();
        this.showScreen('game-screen');
        this.game.startGame();
    }

    showScreen(screenId) {
        ['splash-screen', 'game-screen', 'end-screen'].forEach(id => {
            if (this.elements[id]) {
                this.elements[id].classList.add('hidden');
            }
        });

        if (this.elements[screenId]) {
            this.elements[screenId].classList.remove('hidden');
            console.log(`Showing screen: ${screenId}`);
            if (screenId === 'splash-screen') {
                this.tryPlayMusic();
            } else if (screenId === 'game-screen') {
                this.stopThemeMusic();
            }
        } else {
            console.warn(`Screen '${screenId}' not found.`);
        }
    }

    updateJokes(jokes) {
        console.log("UI Controller: Updating jokes", jokes);
        const jokeOptionsElement = this.elements['joke-options'];
        if (!jokeOptionsElement) {
            console.error("Joke options container not found. Element with id 'joke-options' is missing in the HTML.");
            return;
        }
        jokeOptionsElement.innerHTML = '';

        // Shuffle the jokes and keep track of original indices
        const shuffledJokes = jokes.map((joke, index) => ({ joke, index })).sort(() => Math.random() - 0.5);

        shuffledJokes.forEach(({ joke, index }) => {
            const jokeElement = this.createJokeElement(joke, index);
            jokeOptionsElement.appendChild(jokeElement);
            console.log(`Added joke option: ${joke.text}`);
        });
        console.log("Joke options updated:", jokeOptionsElement.children.length);
        this.checkJokeOptions();
    }

    createJokeElement(joke, index) {
        const jokeElement = document.createElement('div');
        jokeElement.classList.add('joke-option');
        jokeElement.textContent = joke.text;
        jokeElement.addEventListener('click', (event) => {
            console.log(`Joke option clicked`, event);
            event.stopPropagation();
            this.game.selectJoke(index); // Pass the original index to the game logic
        });
        return jokeElement;
    }

    checkJokeOptions() {
        setTimeout(() => {
            const jokeOptions = document.querySelectorAll('.joke-option');
            jokeOptions.forEach((option, index) => {
                console.log(`Joke option ${index + 1}:`, option);
                console.log(`Joke option ${index + 1} clickable:`, getComputedStyle(option).pointerEvents !== 'none');
                option.addEventListener('mouseenter', () => console.log(`Mouse entered joke option ${index + 1}`));
                option.addEventListener('mouseleave', () => console.log(`Mouse left joke option ${index + 1}`));
            });
        }, 1000);
    }

    updateScore(score) {
        this.updateElement('score', score);
    }

    updateRound(round) {
        this.updateElement('round', round);
    }

    updateElement(elementId, value) {
        if (this.elements[elementId]) {
            this.elements[elementId].textContent = value;
        } else {
            console.warn(`Element '${elementId}' not found. Cannot update.`);
        }
    }

    showResponse(response) {
        this.updateElement('response-text', response);
        if (this.elements['response-overlay']) {
            this.elements['response-overlay'].classList.add('visible');
            setTimeout(() => this.elements['response-overlay'].classList.remove('visible'), 2000);
        }
    }

    tryPlayMusic() {
        if (this.themeMusic) {
            console.log("Trying to play theme music");
            this.themeMusic.volume = 0.5; // Set volume for theme music
            this.themeMusic.play().catch(error => {
                console.log("Auto-play prevented. Music will play on user interaction.");
                // Add click event listener to play music on first interaction
                document.addEventListener('click', () => this.themeMusic.play(), { once: true });
            });
        }
    }

    stopThemeMusic() {
        if (this.themeMusic) {
            console.log("Stopping theme music");
            this.themeMusic.pause();
            this.themeMusic.currentTime = 0;
        }
    }

    endGame(finalScore) {
        this.updateElement('final-score', finalScore);
        this.showScreen('end-screen');
        this.tryPlayMusic(); // Play music on game over screen
    }
}

