"use client";

import { LayoutTemplate } from "@/components/templates/LayoutTemplate";
import { GameHeader } from "@/components/organisms/GameHeader";
import { GameBoard } from "@/components/organisms/GameBoard";
import { GameLevel } from "@/types";
import { useEffect, useRef, useState } from "react";
import { getItem } from "@/utils/localStorage";
import { formatTime } from "@/utils/time";
import { celebrateWin } from "@/utils/canvas-confetti";
import { GameEndModal } from "../organisms/GameEndModal";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { shuffleArray } from "@/utils/ShuffleArray";

type FoundPair = {
    cardId: number,
    path: string
}

export default function GameTemplate() {
    const [cards, setCards] = useState<string[]>([]);
    const [currentLevel, setCurrentLevel] = useState<GameLevel | null>(null);
    const [foundPairs, setFoundPairs] = useState<FoundPair[]>([]);
    const [time, setTime] = useState<number>(0);
    const [isActiveTimer, setIsActiveTimer] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    const router = useRouter();
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    
    useEffect(() => {
        const level = getItem("level") as GameLevel;
        if (level) {
            const randomCards = generateRandomCards(level);
            setCards(randomCards);
        }
        setCurrentLevel(level as GameLevel);
    }, []);

    useEffect(() => {
        if (!isActiveTimer) {
            if (timerRef.current) clearInterval(timerRef.current);
            return
        }
        
        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000)
    }, [isActiveTimer]);
    
    useEffect(() => {
        const allCardsMatched = currentLevel && foundPairs.length == currentLevel?.pairs * 2
        if (allCardsMatched) {
            celebrateWin();
            handlePauseTimer();
        }
    }, [foundPairs]);

    const handlePauseTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            setShowModal(true);
        }
    }
    
    const handleStartTimer = () => {
        setIsActiveTimer(true);
    }
    
    const handleRestartGame = () => {
        setShowModal(false);
        setTime(0);
        setFoundPairs([]);
        setIsActiveTimer(false);

        if (currentLevel) {
            const randomCards = generateRandomCards(currentLevel);
            setCards(() => randomCards);
        }
    }

    const generateRandomCards = (level: GameLevel) => {
        const singlePathImageList = Array(level.pairs)
            .fill(1)
            .map((_, idx) => `/assets/pairy/${level?.name}/${idx + 1}.svg`);
        const pairPathImagesList = [...singlePathImageList, ...singlePathImageList];
        const randomPairPathImages = shuffleArray(pairPathImagesList);

        return randomPairPathImages
    }

    return (
        <LayoutTemplate>
            <div className="flex flex-col h-[calc(100vh-85px)]">
                <GameHeader
                    time={time}
                    foundPairCount={Math.ceil(foundPairs.length / 2)}
                    level={currentLevel} />
                {currentLevel && <GameBoard
                    cards={cards}
                    foundPairs={foundPairs}
                    level={currentLevel}
                    isActiveTimer={isActiveTimer}
                    onStartTimer={handleStartTimer}
                    setFoundPairs={setFoundPairs}
                />}
            </div>
            {showModal && <GameEndModal
                onRestartGame={handleRestartGame}
                timeString={formatTime(time)}
            />}
        </LayoutTemplate>
    );
}
