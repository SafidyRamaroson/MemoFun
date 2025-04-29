"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
    title: ReactNode;
}

export function HeroTitle({
    title
}: Props) {
    return (
        <motion.h1
            initial= {{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6
                }
            }}
            className="text-wrap text-6xl font-bold max-sm:text-5xl mb-2">
            {title}
        </motion.h1>
    )
}