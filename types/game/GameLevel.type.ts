import { GameLevelName } from "./GameLevelName.type";

export type GameLevel = {
    name: GameLevelName;
    pairs: number;
    grid: {
        rows: number,
        cols: number
    }
}
