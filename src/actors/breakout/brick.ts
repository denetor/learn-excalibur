import { Actor, CollisionType, Color, Engine } from "excalibur";

export class BreakoutBrickConstants {
    public padding = 20;
    public xoffset = 65;
    public yoffset = 20;
    public columns = 5;
    public rows = 3;
}

export class BreakoutBrick extends Actor {
    constructor(game: Engine) {
        super();
    }
}