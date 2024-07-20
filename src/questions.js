import guessTheMovie from './data/guessTheMovie.json';
import guessTheSong from './data/guessTheSong.json';
import guessTheDialogue from './data/guessTheDialogue.json';

const combinedQuestions = [
  ...guessTheMovie.map((question) => ({
    ...question,
    category: 'guess the movie',
  })),
  ...guessTheSong.map((question) => ({
    ...question,
    category: 'guess the song',
  })),
  ...guessTheDialogue.map((question) => ({
    ...question,
    category: 'guess the dialogue',
  })),
];

export default combinedQuestions;
