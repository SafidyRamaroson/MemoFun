"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight, Settings2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { setItem } from "@/utils/localStorage";
import { gameLevels } from "@/data";


export function CTAButtonsHero() {
    const router  = useRouter();

    const handleRedirectToGamePage = () => {
        setItem("level",gameLevels[0]);
        router.push("/game");
    }
    return (
        <div
        className="flex flex-row items-center justify-center max-sm:flex-col  gap-4 w-full"
        >
                <Button
                    onClick={() => handleRedirectToGamePage()}
                    size="lg"
                    className="border border-primary font-semibold rounded-2xl bg-gradient-to-r from-blue-800 to-violet-800 max-sm:w-full"
                >
                    Commencer le Jeu
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
    )
}