const jokeGroups = [
  {
    id: 1,
    jokes: [
      { text: "Why did the AI cross the road? To get to the other dataset!", rating: 3, response: "Cheer" },
      { text: "What's Homer's favorite AI model? D'oh-GPT!", rating: 2, response: "Meh" },
      { text: "Why don't scientists trust atoms? They make up everything, just like AI!", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 2,
    jokes: [
      { text: "Homer's idea of a balanced diet is a donut in each hand.", rating: 3, response: "Cheer" },
      { text: "I asked an AI to solve world hunger. It suggested everyone eat silicon chips.", rating: 2, response: "Meh" },
      { text: "Springfield's nuclear plant is so old, the rods are actually sticks.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 3,
    jokes: [
      { text: "Bart's permanent record is longer than the terms and conditions.", rating: 3, response: "Cheer" },
      { text: "My AI assistant is like a genie: phenomenal cosmic power, itty bitty living space.", rating: 2, response: "Meh" },
      { text: "Lisa's saxophone is the real blues brother.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 4,
    jokes: [
      { text: "Mr. Burns is so old, his social security number is 1.", rating: 3, response: "Cheer" },
      { text: "I trained an AI on dad jokes. Now it's a pun-dit.", rating: 2, response: "Meh" },
      { text: "Groundskeeper Willie's kilt is the original Scottish firewall.", rating: 1, response: "Boo" }
    ]
  },

  {
    id: 5,
    jokes: [
      { text: "Homer's idea of a balanced diet is a donut in each hand.", rating: 3, response: "Cheer" },
      { text: "I tried to teach an AI sarcasm. It said, 'Oh, great idea.'", rating: 2, response: "Meh" },
      { text: "Springfield's nuclear plant is so old, the rods are actually sticks.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 6,
    jokes: [
      { text: "Bart's permanent record is longer than the terms and conditions.", rating: 3, response: "Cheer" },
      { text: "I asked an AI to solve world hunger. It suggested everyone eat silicon chips.", rating: 2, response: "Meh" },
      { text: "Lisa's saxophone is the real blues brother.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 7,
    jokes: [
      { text: "Mr. Burns is so old, his social security number is 1.", rating: 3, response: "Cheer" },
      { text: "AI customer service is great until you need to speak to a human. Then it's just artificial inconvenience.", rating: 2, response: "Meh" },
      { text: "Groundskeeper Willie's kilt is the original Scottish firewall.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 8,
    jokes: [
      { text: "Moe's Tavern: where everybody knows your name, but wishes they didn't.", rating: 3, response: "Cheer" },
      { text: "I asked an AI to tell me a joke. It said, 'I would, but all the good ones argon.'", rating: 2, response: "Meh" },
      { text: "Chief Wiggum's donuts have more layers than his cases.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 9,
    jokes: [
      { text: "Apu's Kwik-E-Mart is so convenient, even time travelers shop there.", rating: 3, response: "Cheer" },
      { text: "My AI assistant is like a genie: phenomenal cosmic power, itty bitty living space.", rating: 2, response: "Meh" },
      { text: "Ralph Wiggum: proving that in Springfield, the apple doesn't fall far from the donut.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 10,
    jokes: [
      { text: "Ned Flanders is so nice, even his browser history is family-friendly.", rating: 3, response: "Cheer" },
      { text: "I told an AI to be more human. Now it procrastinates and blames it on traffic.", rating: 2, response: "Meh" },
      { text: "The only thing faster than Lisa's saxophone solos is Comic Book Guy's judgement.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 11,
    jokes: [
      { text: "Homer's brain is like the first computer: large, mostly empty, and prone to crashes.", rating: 3, response: "Cheer" },
      { text: "AI art is just abstract expressionism with extra steps.", rating: 2, response: "Meh" },
      { text: "Bart's pranks are so legendary, even the school's security system asks for his autograph.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 12,
    jokes: [
      { text: "Springfield's statue of Jebediah Springfield is the original offline server.", rating: 3, response: "Cheer" },
      { text: "I asked an AI to write a love song. It was mostly ones and zeros, but it still made me cry.", rating: 2, response: "Meh" },
      { text: "Maggie's pacifier is actually a tiny mute button for the whole family.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 13,
    jokes: [
      { text: "Krusty the Clown's makeup is thicker than Springfield's plot armor.", rating: 3, response: "Cheer" },
      { text: "My smart home is like Mr. Burns: it controls everything but still can't remember my name.", rating: 2, response: "Meh" },
      { text: "Lisa's dreams are the only thing in Springfield not sponsored by Duff Beer.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 14,
    jokes: [
      { text: "Homer's memory is so bad, he forgets his password while he's typing it.", rating: 3, response: "Cheer" },
      { text: "I asked an AI to solve climate change. It suggested we turn it off and on again.", rating: 2, response: "Meh" },
      { text: "The three-eyed fish near Springfield's power plant isn't a mutation, it's just ahead of its time.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 15,
    jokes: [
      { text: "Milhouse is like Windows Vista: not quite what you wanted, but it's what you got.", rating: 3, response: "Cheer" },
      { text: "AI-generated art is just a fancy way of saying 'computer doodles.'", rating: 2, response: "Meh" },
      { text: "Grandpa Simpson's stories are like blockchain: long, confusing, and nobody knows if they're real.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 16,
    jokes: [
      { text: "Springfield Elementary is so underfunded, their computer lab is just a bunch of Etch A Sketches.", rating: 3, response: "Cheer" },
      { text: "I asked an AI to explain the meaning of life. It blue-screened.", rating: 2, response: "Meh" },
      { text: "Patty and Selma's apartment is the original cloud storage for unwanted items.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 17,
    jokes: [
      { text: "Homer's work safety record is shorter than this joke.", rating: 3, response: "Cheer" },
      { text: "My AI chatbot is like a magic 8-ball, but with more sass and fewer predictions.", rating: 2, response: "Meh" },
      { text: "Moe's love life is like Springfield's monorail: nonexistent and full of broken promises.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 18,
    jokes: [
      { text: "In Springfield, 'clear history' refers to both browsers and Principal Skinner's war stories.", rating: 3, response: "Cheer" },
      { text: "I tried to make an AI learn common sense. Now it just shrugs a lot.", rating: 2, response: "Meh" },
      { text: "Disco Stu's wardrobe is more diverse than Springfield's economy.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 19,
    jokes: [
      { text: "The only thing more predictable than a Simpsons plot is an AI-generated compliment.", rating: 3, response: "Cheer" },
      { text: "Homer's understanding of nuclear physics is about as clear as Mr. Burns' conscience.", rating: 2, response: "Meh" },
      { text: "I asked an AI to write a novel. It was 50 shades of binary.", rating: 1, response: "Boo" }
    ]
  },
  {
    id: 20,
    jokes: [
      { text: "Springfield is so behind the times, their idea of streaming is watching the polluted river flow.", rating: 3, response: "Cheer" },
      { text: "My AI assistant is like Lisa Simpson: always right, but nobody wants to hear it.", rating: 2, response: "Meh" },
      { text: "Bart's permanent record and Homer's liver have a lot in common: they're both full and nobody wants to look at them.", rating: 1, response: "Boo" }
    ]
  },
    
{
    id: 21,
    jokes: [
      { text: "I trained an AI on dad jokes. Now it's a pun-dit.", rating: 3, response: "Cheer" },
      { text: "Marge's hair is so tall, it's got its own area code.", rating: 2, response: "Meh" },
      { text: "I asked an AI to write a Simpsons episode. It was mostly 'D'oh!'-nuts.", rating: 1, response: "Boo" }
    ]
  }

];


document.addEventListener('DOMContentLoaded', async () => {
  // ... rest of your existing code
});

document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOM Content Loaded");
    try {
        const soundManager = new SoundManager();
        await soundManager.loadAllSounds();
        console.log("Sounds loaded successfully");

        const game = new DohAIComedyClub(jokeGroups, soundManager);
        console.log("Game created with joke groups:", jokeGroups);

        const uiController = new UIController(game);
        game.setUI(uiController);
        console.log("UI Controller set up");

        // Show splash screen
        uiController.showScreen('splash-screen');
        console.log("Splash screen displayed");
    } catch (error) {
        console.error("Error initializing game:", error);
    }
});