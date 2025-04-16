"use client";

import Image from "next/image";
import { cn } from "@/utils/tailwind";

type Props = {
  path: string;
  isFlipped: boolean;
  onClick: () => void;
};

export function CardItem({ path, isFlipped, onClick }: Props) {
  return (
    <div className="w-full h-full perspective" onClick={onClick}>
      <div className={cn("flip-card-inner", { flipped: isFlipped })}>
        <div className="flip-card-back text-2xl">❓</div>
        <div className="flip-card-front">
          <Image src={path} alt="Game" width={70} height={70} />
        </div>
      </div>
    </div>
  );
}
