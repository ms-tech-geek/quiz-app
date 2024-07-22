import guessTheMovie from './data/guessTheMovie.json';
import guessTheSong from './data/guessTheSong.json';
import guessTheDialogue from './data/guessTheDialogue.json';

export const movieQuestions = guessTheMovie.map((question) => ({
  ...question,
  category: 'guess the movie',
}));

export const songQuestions = guessTheSong.map((question) => ({
  ...question,
  category: 'guess the song',
}));

export const dialogueQuestions = guessTheDialogue.map((question) => ({
  ...question,
  category: 'guess the dialogue',
}));

export default movieQuestions
