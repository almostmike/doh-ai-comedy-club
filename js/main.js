document.addEventListener('DOMContentLoaded', async () => {
  const soundManager = new SoundManager();
  await soundManager.loadAllSounds();

  const game = new DohAIComedyClub(jokeGroups, soundManager);
  const uiController = new UIController(game);
  game.setUI(uiController);

  // Show splash screen
  uiController.showScreen(uiController.splashScreen);
});

// Joke groups data
const jokeGroups = [
  // Add your joke groups here
  // Example:
  // {
  //   id: 1,
  //   jokes: [
  //     { text: "Cheer joke text here", rating: 3, response: "Cheer" },
  //     { text: "Meh joke text here", rating: 2, response: "Meh" },
  //     { text: "Boo joke text here", rating: 1, response: "Boo" }
  //   ]
  // },
];