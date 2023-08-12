import Cursor from './js/cursor';
import Game from './js/game';
import Goblin from './js/goblin';
import Scoreboard from './js/scoreboard';
import './styles/style.css';

const game = new Game();
const cursor = new Cursor();
cursor.attachToGame(game);
