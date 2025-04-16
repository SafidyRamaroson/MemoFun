"use client";

import { LucideGamepad } from "lucide-react";
import Link from "next/link";

export function Brand() {
    return (
        <Link href="/" className="flex flex-row items-center gap-4">
            <LucideGamepad className="size-12"/>
            <span>Boost Your Memory</span>
        </Link>
    )
}