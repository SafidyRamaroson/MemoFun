"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function BegunGameButton() {
    return (
        <Link href="/game/config">
            <Button
                size="lg"
                className="max-sm:mb-4"
            >
                Commencer le Jeu
            </Button>
        </Link>
    )
}