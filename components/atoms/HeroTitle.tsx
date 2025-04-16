"use client";

type Props = {
    title: string;
}

export function HeroTitle({
    title
}: Props) {
    return (
        <h1 className="text-slate-800 text-wrap text-8xl font-bold max-sm:text-5xl mb-2">
            {title}
        </h1>
    )
}