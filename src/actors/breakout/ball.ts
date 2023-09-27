import { Actor, CollisionType, Color, Engine, vec } from "excalibur";

export class BreakoutBall extends Actor {
    protected game;

    constructor(game: Engine) {
        super({
            x: game.drawWidth / 2,
            y: game.drawHeight / 2,
            radius: 10,
            color: Color.Red,
        });
        this.game = game;
        this.body.collisionType = CollisionType.Passive;

        this.on('postupdate', () => {
            if (this.pos.x < this.width / 2) {
                this.vel.x = 100;
            }
            if (this.pos.x + this.width / 2 > this.game.drawWidth) {
                this.vel.x = -100;
            }
            if (this.pos.y < this.height / 2) {
                this.vel.y = 100;
            }
        });

        setTimeout(() => {
            this.vel = vec(100, 100);
        }, 1000);
    }

}