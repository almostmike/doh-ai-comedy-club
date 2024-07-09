class SoundManager {
  constructor() {
    this.sounds = {};
  }

  loadSound(name, url) {
    this.sounds[name] = new Audio(url);
    return new Promise((resolve, reject) => {
      this.sounds[name].addEventListener('canplaythrough', resolve);
      this.sounds[name].addEventListener('error', reject);
    });
  }

  async loadAllSounds() {
    const soundFiles = {
      drumroll: 'sounds/drumroll.mp3',
      cheer: 'sounds/cheer.mp3',
      meh: 'sounds/meh.mp3',
      boo: 'sounds/boo.mp3'
    };

    const loadPromises = Object.entries(soundFiles).map(([name, url]) => this.loadSound(name, url));
    await Promise.all(loadPromises);
  }

  play(name) {
    if (this.sounds[name]) {
      this.sounds[name].currentTime = 0;
      this.sounds[name].play();
    }
  }
}

// Usage
const soundManager = new SoundManager();