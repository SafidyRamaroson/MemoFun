"use client";

import { LayoutTemplate } from "@/components/templates/LayoutTemplate";
import { GameLevel } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GameConfigTemplate } from "@/components/templates/GameConfigTemplate";


export default function GameConfigPage() {
    const [,setSelectedLevel] = useState<GameLevel | null>(null);
    const router =  useRouter();

    const handleChangeLevel = (level: GameLevel) => {
        setSelectedLevel(level);
        localStorage.setItem("level", JSON.stringify(level));
        router.push("/game");
    }

    return (
        <LayoutTemplate>
           <GameConfigTemplate onChangeLevel={handleChangeLevel}/>
        </LayoutTemplate>
    )
}

