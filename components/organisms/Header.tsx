"use client";

import { Brand } from "../molecules";
import { MyGithubLink } from "../atoms";

export function Header() {
    return (
        <div className="flex flex-row justify-between p-2 rounded-md">
            <Brand />
           <MyGithubLink />
        </div>
    )
}