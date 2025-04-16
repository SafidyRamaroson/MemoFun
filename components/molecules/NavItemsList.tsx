"use client";

import { cn } from "@/lib/utils";
import { MyGithubLink, NavLink } from "../atoms";

type Link = {
    href: string;
    label: string;
}

type Props = {
    links: Link[];
    className?: string;
}

export function NavItemsList({ links, className }: Props) {
    return (
        <ul className={cn("flex flex-row items-center gap-4 ", className)}>
            {links?.map((link) => (<NavLink href={link.href} label={link.label} key={link.href}/>))}
            <MyGithubLink />
        </ul>
    )
}