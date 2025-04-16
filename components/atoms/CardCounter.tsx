type Props = {
    totalPairs: number;
    foundPairCount: number;
};

export function CardCounter({foundPairCount, totalPairs }: Props) {
    return <span>{foundPairCount}/{totalPairs} paire de cartes</span>;
}
