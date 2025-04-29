"use client";

import { GameLevel } from "@/types";
import { cn } from "@/utils/tailwind";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { getItem } from "@/utils/localStorage";
import { childVariants } from "@/utils/motion";

type Props = {
    gameLevel: GameLevel;
    onGameLevel: (level: GameLevel) => void;
}

export function SelectGameLevel({
    gameLevel,
    onGameLevel
}: Props) {
    const [currentLevel, setCurrentLevel] = useState<GameLevel | null>(null);
    useEffect(() => {
        const level = getItem("level");
        setCurrentLevel(level as GameLevel);
    }, []);

    return <motion.div
        variants={childVariants}
        layout
        className={cn("border border-blue-400 p-4 rounded-md hover:bg-blue-100 hover:transition-colors hover:ease-in-out hover:duration-300 cursor-pointer", { "bg-blue-100 text-red-400": gameLevel == currentLevel })}
        onClick={() => onGameLevel(gameLevel)}
    >
        <h6 className="font-base">{gameLevel.name}</h6>
        <p className="font-bold">{gameLevel?.pairs} paires de carte</p>
    </motion.div>;
}