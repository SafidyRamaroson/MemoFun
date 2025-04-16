"use client";

import { GameLevel } from "@/types";
import { cn } from "@/utils/tailwind";
import { useState, useEffect } from "react";

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
        const stored = localStorage.getItem("level");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setCurrentLevel(parsed);
            } catch (error) {
                console.error("Erreur parsing level:", error);
                localStorage.removeItem("level");
            }
        }
    }, []);
    
    return <div
        className={cn("border border-slate-400 p-4 rounded-md hover:bg-slate-400 hover:transition-colors hover:ease-in-out hover:duration-300 cursor-pointer",gameLevel === currentLevel && "bg-slate-400")}
        onClick={() => onGameLevel(gameLevel)}
    >
        <h4 className="font-extrabold">{gameLevel.name}</h4>
        <p>{gameLevel?.pairs} paires de carte</p>
    </div>;
}