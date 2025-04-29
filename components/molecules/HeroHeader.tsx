"use client";

import { ReactNode } from "react";
import { HeroSubTitle, HeroTitle } from "../atoms";



type Props = {
    title: ReactNode;
    subtitle: string;
}

export function HeroHeader({
    title,
    subtitle
}: Props) {
    return (
        <div className="w-full text-center">
            <HeroTitle title={title} />
            <HeroSubTitle subtitle={subtitle} />
        </div>
    )
}