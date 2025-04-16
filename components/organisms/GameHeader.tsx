import { GameLevel } from "@/types";
import { ArrowLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { CardCounter, LevelIndicator, Timer } from "../atoms";

type Props = {
    level: GameLevel | null;
    foundPairCount: number;
};

export function GameHeader({ level, foundPairCount }: Props) {
    const router = useRouter();
    return (
        <div className="flex max-sm:flex-col max-sm:items-start max-sm:pl-2 px-2 justify-between items-center rounded-md mb-8 gap-8 mt-4">
            <Button className="flex flex-row gap-3 cursor-pointer" onClick={() => router.push("/game/config")}>
                <ArrowLeftCircle />
                <span>Retour à la sélection de niveau</span>
            </Button>
            <div className="flex flex-row gap-8 items-center">
                <Timer />
                <CardCounter
                    foundPairCount={foundPairCount}
                    totalPairs={level?.pairs ?? 0} />
                <LevelIndicator levelName={level?.name ?? "N/A"} />
            </div>
        </div>
    );
}
