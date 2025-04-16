import { GameLevel } from "@/types";

export const gameLevels:GameLevel[] = [
    { name: "Débutant", pairs: 6, grid: { rows: 3, cols: 4 } },
    { name: "Intermédiaire", pairs: 10, grid: { rows: 4, cols: 5 } },
    { name: "Avancé", pairs: 15, grid: { rows: 5, cols: 6 } },
    { name: "Expert", pairs: 20, grid: { rows: 5, cols: 8 } },
];