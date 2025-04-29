"use client";
import { formatTime } from "@/utils/time";

type Props = {
    time: number;
}

export function Timer({ time }:Props) {
    return <span>{formatTime(time)}</span>;
}