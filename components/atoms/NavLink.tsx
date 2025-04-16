"use client";

import Link from "next/link";

type Props = {
    href: string;
    label: string;
    className?: string;
}

export function NavLink({ href, className = "", label }: Props) {
    return (
        <Link href={href} className="text-gray-200 font-semibold">
            {label}
        </Link>
    )
}