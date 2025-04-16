import { GameLevel } from "@/types";
import { SelectGameLevel } from "../molecules";
import { gameLevels } from "@/data";

type Props = {
    onChangeLevel: (level: GameLevel) => void;
}

export function GameConfigTemplate({ onChangeLevel }: Props) {
    return (
        <>
            <h1 className="text-slate-800 text-wrap text-6xl font-bold max-sm:text-5xl mt-8 text-center">
                Petite étape avant le jeu
            </h1>
            <h3 className="text-slate-400 font-medium text-3xl mt-4 text-center">
                Quel est votre niveau de mémorisation ?
            </h3>
            {/* Select level game */}
            <div className="grid grid-cols-2 gap-4 mt-12">
                {gameLevels?.map((gameLevel, idx) =>
                (<SelectGameLevel
                    gameLevel={gameLevel}
                    onGameLevel={() => onChangeLevel(gameLevel)}
                    key={idx}
                />))}
            </div>
        </>)
}