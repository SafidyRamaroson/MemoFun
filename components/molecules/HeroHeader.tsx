"use client";

import { HeroSubTitle, HeroTitle } from "../atoms";



type Props = {
    title: string;
    subtitle: string;
}

export function HeroHeader({
    title,
    subtitle
}: Props) {
    return (
        <div >
            <HeroTitle title={title} />
            <HeroSubTitle subtitle={subtitle} />
        </div>
    )
}