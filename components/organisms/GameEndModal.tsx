"use client";

import { ArrowRight, Settings2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
    timeString: string;
    onRestartGame:() => void;
}

export const GameEndModal = ({
    timeString,
    onRestartGame
}:Props) => {
    const router = useRouter();
    return (
        <div className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center p-4">
            <div className="absolute min-w-fit min-h-fit bg-white rounded-2xl shadow-2xl py-4 px-4">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-center mb-2 font-bold text-3xl">Temps écoulé</h2>
                    <p className="text-center mb-4">{timeString}</p>
                    <div
                        className="flex flex-row items-center justify-center max-sm:flex-col  gap-4 w-full"
                    >
                        <Button
                            onClick={onRestartGame}
                            size="lg"
                            className="border border-primary font-semibold rounded-2xl bg-gradient-to-r from-blue-800 to-violet-800 max-sm:w-full"
                        >
                            Recommencer le Jeu
                            <ArrowRight />
                        </Button>
                        <Link href="/game/config" className="max-sm:w-full">
                            <Button
                                size="lg"
                                variant="outline"
                                className="max-sm:mb-2 font-semibold rounded-2xl max-sm:w-full"
                            >
                                <Settings2 />
                                Choisir un niveau
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
