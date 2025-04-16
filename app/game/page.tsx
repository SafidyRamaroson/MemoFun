"use client";

import { LayoutTemplate } from "@/components/templates/LayoutTemplate";
import { GameHeader } from "@/components/organisms/GameHeader";
import { GameBoard } from "@/components/organisms/GameBoard";
import { GameLevel } from "@/types";
import { useEffect, useState } from "react";
import { getItem } from "@/utils/localStorage";

type FoundPair = {
    cardId: number,
    path: string
}
export default function GamePage() {
    const [currentLevel, setCurrentLevel] = useState<GameLevel | null>(null);
    const [foundPairs, setFoundPairs] = useState<FoundPair[]>([]);
    useEffect(() => {
        const level = getItem("level");
        setCurrentLevel(level as GameLevel);
    }, []);

    return (
        <LayoutTemplate>
            <div className="flex flex-col h-[calc(100vh-85px)]">
                <GameHeader foundPairCount={Math.ceil(foundPairs.length/2)} level={currentLevel} />
                {currentLevel && <GameBoard foundPairs={foundPairs} level={currentLevel} setFoundPairs={setFoundPairs} />}
            </div>
        </LayoutTemplate>
    );
}
