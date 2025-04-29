import { GameLevel } from "@/types";
import { SelectGameLevel } from "../molecules";
import { gameLevels } from "@/data";
import { motion } from "motion/react";
import { containerVariants } from "@/utils/motion";

type Props = {
    onChangeLevel: (level: GameLevel) => void;
};

export function GameConfigTemplate({ onChangeLevel }: Props) {
    return (
        <>
            <h1 className="text-primary text-wrap text-3xl font-bold max-sm:text-5xl mt-8 text-center">
                Choisissez votre défi mémoire
            </h1>
            <h3 className="text-black font-medium text-xl mt-4 text-center">
                Sélectionnez un niveau pour commencer à jouer avec MemoFun
            </h3>
            {/* Select level game */}
            <motion.div 
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="grid grid-cols-2 gap-4 mt-12"
            >
                {gameLevels?.map((gameLevel, idx) => (
                    <SelectGameLevel
                        gameLevel={gameLevel}
                        onGameLevel={() => onChangeLevel(gameLevel)}
                        key={idx}
                    />
                ))}
            </motion.div>
        </>
    );
}
