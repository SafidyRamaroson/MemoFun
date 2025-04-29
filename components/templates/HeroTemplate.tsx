"use client";

import { Hero } from "../organisms";
import { motion } from "motion/react";

export function HeroTemplate() {
    return (
        <Hero
            title={<p><span className="text-blue-600">Découvre, Retiens , Eclate-toi ! </span></p>}
            subtitle="Un jeu de mémoire coloré pour défier tes neurones et tes amis !"
        />
    )
}