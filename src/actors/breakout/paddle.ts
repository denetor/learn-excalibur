import { Actor, CollisionType, Color, Engine } from "excalibur";

export class BreakoutPaddle extends Actor {
    constructor(game: Engine) {
        super({
            x: game.drawWidth / 2,
            y: game.drawHeight - 20,
            width: 200,
            height: 20,
            color: Color.Chartreuse,
        });
        this.body.collisionType = CollisionType.Fixed;
        game.input.pointers.primary.on('move', (evt) => {
            this.pos.x = evt.worldPos.x;
        });
    }
}