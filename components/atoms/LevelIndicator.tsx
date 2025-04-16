import { Gauge } from "lucide-react";

type Props = {
    levelName: string;
};

export function LevelIndicator({ levelName }: Props) {
    return (
        <div className="flex flex-row items-center gap-2">
            <Gauge className="text-slate-600" />
            <h1 className="font-bold">{levelName}</h1>
        </div>
    );
}
