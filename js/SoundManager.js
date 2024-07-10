class SoundManager {
  constructor() {
    this.sounds = {};
    this.isMuted = false; // Add a mute option
  }

  loadSound(name, url) {
    return new Promise((resolve, reject) => {
      try {
        this.sounds[name] = new Audio(url);
        this.sounds[name].addEventListener('canplaythrough', () => {
          console.log(`Sound loaded: ${name}`);
          resolve();
        });
        this.sounds[name].addEventListener('error', (error) => {
          console.error(`Error loading sound ${name}:`, error);
          reject(error);
        });
      } catch (error) {
        console.error(`Error creating Audio object for ${name}:`, error);
        reject(error);
      }
    });
  }

  async loadAllSounds() {
    const soundFiles = {
      drumroll: 'sounds/drumroll.mp3',
      cheer: 'sounds/cheer.mp3',
      meh: 'sounds/meh.mp3',
      boo: 'sounds/boo.mp3',
      theme: 'sounds/theme.mp3' // Ensure theme is also loaded
    };

    const loadPromises = Object.entries(soundFiles).map(([name, url]) => 
      this.loadSound(name, url).catch(error => {
        console.error(`Failed to load sound ${name}:`, error);
        return Promise.resolve(); // Continue loading other sounds even if one fails
      })
    );

    try {
      await Promise.all(loadPromises);
      console.log("All sounds loaded successfully");
    } catch (error) {
      console.error("Error loading sounds:", error);
    }
  }

  play(name) {
    if (this.isMuted) {
      console.log(`Sound ${name} not played (muted)`);
      return;
    }

    if (this.sounds[name]) {
      try {
        this.sounds[name].currentTime = 0;
        if (name === 'theme') {
          this.sounds[name].volume = 0.5; // Set volume for theme music
        } else {
          this.sounds[name].volume = 1; // Full volume for other sounds
        }
        this.sounds[name].play().catch(error => {
          console.error(`Error playing sound ${name}:`, error);
        });
      } catch (error) {
        console.error(`Error playing sound ${name}:`, error);
      }
    } else {
      console.warn(`Sound not found: ${name}`);
    }
  }

  mute() {
    this.isMuted = true;
    console.log("Sound muted");
  }

  unmute() {
    this.isMuted = false;
    console.log("Sound unmuted");
  }
}

// Do not create an instance here, it will be created in main.js
// const soundManager = new SoundManager();
