"use client";

import Image from "next/image";
import { cn } from "@/utils/tailwind";
import { motion } from "motion/react";
import { childVariants } from "@/utils/motion";

type Props = {
  path: string;
  isFlipped: boolean;
  onClick: () => void;
};

export function CardItem({ path, isFlipped, onClick }: Props) {
  return (
    <motion.div 
      variants={childVariants}
      layout
      className="w-full h-full perspective cursor-pointer" onClick={onClick}>
      <div className={cn("flip-card-inner border border-primary rounded-md", { flipped: isFlipped })}>
        <div className="flip-card-back text-2xl">❓</div>
        <div className="flip-card-front">
          <Image src={path} alt="Game" width={70} height={70} />
        </div>
      </div>
    </motion.div>
  );
}
