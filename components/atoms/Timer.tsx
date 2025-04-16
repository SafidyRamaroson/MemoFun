import { useState } from "react";

export function Timer() {
    const [seconds] = useState<number>(0);
    const [minutes] = useState<number>(0);
    const [hour] = useState<number>(0);

    return <span>{hour}:{minutes}:{seconds}</span>;
}