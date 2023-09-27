import { Engine, Loader, DisplayMode, CollisionType } from 'excalibur';
import { LevelOne } from './scenes/level-one/level-one';
import { Player } from './actors/player/player';
import { Resources } from './resources';
import {BreakoutPaddle} from "./actors/breakout/paddle";
import {BreakoutBall} from "./actors/breakout/ball";

/**
 * Managed game class
 */
class Game extends Engine {
  private player: Player;
  private levelOne: LevelOne;

  constructor() {
    super({
      // width: 800,
      // height: 600,
      displayMode: DisplayMode.FitScreen,
    });
  }

  public start() {
    // Create new scene with a player
    this.levelOne = new LevelOne();
    this.player = new Player();
    this.levelOne.add(this.player);
    game.add('levelOne', this.levelOne);
    // Automatically load all default resources
    const loader = new Loader(Object.values(Resources));
    return super.start(loader);
  }

  public startBreakout() {
    const paddle = new BreakoutPaddle(game);
    const ball = new BreakoutBall(game);
    super.add(paddle);
    super.add(ball);
    return super.start();
  }
}

const game = new Game();

// demo game
// game.start().then(() => {
//   game.goToScene('levelOne');
// });

game.startBreakout().then(() => {
  game.goToScene('levelOne');
});
