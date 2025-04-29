"use client";

import { CTAButtonsHero, HeroHeader } from "../molecules";
import Image from "next/image";
import GameMemoImg from "@/public/assets/game-memory.png";
import { ReactNode } from "react";
import { motion } from "motion/react";

type Props = {
    title: ReactNode;
    subtitle: string;
}

export function Hero({
    title,
    subtitle
}: Props) {
    return (
        <section id="#accueil" className="min-h-[90vh] flex flex-col-reverse gap-4 text-white items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <HeroHeader title={title} subtitle={subtitle} />
                <CTAButtonsHero />
            </div>
            <motion.div
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: 1,
                    transition: {
                        duration: 0.6
                    }
                }}
            >
                <Image
                    src={GameMemoImg}
                    alt="Jeu de mémoire"
                    className="rotate-12 w-32"
                    width={200}
                    height={180}
                    priority
                    quality={100}
                    placeholder="blur"
                />
            </motion.div>
        </section>
    )
}