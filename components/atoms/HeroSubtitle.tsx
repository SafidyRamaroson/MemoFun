"use client";

import { fadeInUpVariants } from "@/utils/motion";
import { motion } from "motion/react";

type Props = {
    subtitle: string
}

export function HeroSubTitle({
    subtitle
}: Props) {
    return (
        <motion.h3
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1.3
                }
            }}
            className="text-accent-foreground font-medium text-xl mb-4 mt-4">
            {subtitle}
        </motion.h3>
    )
}