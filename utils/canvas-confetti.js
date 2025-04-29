import confetti from "canvas-confetti";

export const celebrateWin = () => {
    confetti({
        particleCount: 450,
        spread: 100,
        origin: {
            y: 0.6
        }
    })
}