"use client";

type Props = {
    subtitle: string
}

export function HeroSubTitle({
    subtitle
}: Props){
    return(
        <h3 className="text-slate-400 font-medium text-3xl mb-2">
            { subtitle }
        </h3>
    )
}