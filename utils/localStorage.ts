export const setItem = (key: string, value: string | object | string[] | number): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log("Error setting ", error)
    }
}

export const getItem = (key: string): string | object | string[] | number | null => {
    const stored = localStorage.getItem(key);
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            return parsed
        } catch (error) {
            console.error("Erreur parsing:", error);
            localStorage.removeItem("level");
        }
    }

    return stored
}