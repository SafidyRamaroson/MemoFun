import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GameLevel } from "@/types";
import { CardItem } from "../atoms";
import { motion } from "motion/react";
import { containerVariants } from "@/utils/motion";

type Props = {
    level: GameLevel;
    foundPairs: FoundPair[];
    isActiveTimer: boolean;
    cards: string[];
    onStartTimer: () => void;
    setFoundPairs: Dispatch<SetStateAction<FoundPair[]>>;
};

type FoundPair = {
    cardId: number;
    path: string;
}

export function GameBoard({ level, foundPairs,cards,isActiveTimer, setFoundPairs, onStartTimer }: Props) {
    const [selectedPair, setSelectedPair] = useState<{ first: FoundPair | null; second: FoundPair | null }>({
        first: null,
        second: null,
    });
    

    const handleCardClick = (cardId: number, path: string) => {
        if(!isActiveTimer){
            onStartTimer();
        }
        //On ne fait rien si la carte sélectionnée est déja dans foundPairs
        if (foundPairs.some(pair => pair.cardId === cardId && pair.path === path)) return;
        // Pour empecher que selectedPair.first repète deux fois (double click sur le mm photo)
        if (selectedPair.first?.cardId === cardId && selectedPair.first?.path === path) return;

        if (!selectedPair.first) {
            setSelectedPair({ first: {cardId, path}, second: null });
        } else if (!selectedPair.second) {
            setSelectedPair((prev) => ({ ...prev, second: {cardId, path} }));
        }
    };


    useEffect(() => {
        const { first, second } = selectedPair;
        if (first && second) {
            if (first.path === second.path) {
                setTimeout(() => {
                    setFoundPairs((prev) => [...prev, first, second]);
                    setSelectedPair({ first: null, second: null });
                }, 400);
            } else {
                setTimeout(() => {
                    setSelectedPair({ first: null, second: null });
                }, 400);
            }
        }
    }, [selectedPair, setFoundPairs]);

    return (
        <div className="flex justify-center items-center p-2 h-96">
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="grid w-full h-full max-w-screen-md gap-1 rounded-md"
                style={{
                    height: "min(100%, 100vh - 150px)",
                    gridTemplateColumns: `repeat(${level.grid.cols}, 1fr)`,
                    gridTemplateRows: `repeat(${level.grid.rows}, 1fr)`,
                }}
            >
                {cards.map((path, idx) => (
                    <CardItem
                        key={idx}
                        path={path}
                        onClick={() => handleCardClick(idx, path)}
                        isFlipped={
                            foundPairs.some(pair => pair.cardId === idx && pair.path === path) ||
                            selectedPair.first?.path === path && selectedPair?.first?.cardId === idx ||
                            selectedPair.second?.path === path && selectedPair?.second?.cardId === idx
                        }
                    />
                ))}
            </motion.div>
        </div>
    );
}


