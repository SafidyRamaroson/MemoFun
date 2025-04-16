"use client";

import { LucideGamepad } from "lucide-react";
import { BegunGameButton } from "../atoms";
import { HeroHeader } from "../molecules";

type Props = {
    title: string;
    subtitle: string;
}

export function Hero({
    title,
    subtitle
}: Props) {
    return (
        <section id="#accueil" className="h-[88vh] flex flex-row justify-between items-center">
            <div>
                <HeroHeader title={title} subtitle={subtitle} />
                <BegunGameButton />
            </div>
            <LucideGamepad className="size-96 rotate-12" />
        </section>
    )
}