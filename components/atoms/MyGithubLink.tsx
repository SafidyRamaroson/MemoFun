"use client";

import Link from "next/link";
import githubImg from "@/public/assets/github.png";
import Image from "next/image";

export function MyGithubLink(){
    return(
        <Link href="https://github.com/SafidyRamaroson/MemoFun" target="_blank">
            <Image
                alt="github/SafidyRamaroson"
                src={githubImg}
                className="w-16 h-10 rounded-sm"
            />
        </Link>
    )
}