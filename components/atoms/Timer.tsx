import { useEffect, useState } from "react";

export function Timer() {
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [hour, setHour] = useState<number>(0);

    return <span>{hour}:{minutes}:{seconds}</span>;
}