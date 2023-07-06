import { useEffect, useState } from "react";


export const UseCountdown = (lenght: number) => {
    const [second, setSecond] = useState(lenght);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSecond((prevSecond) =>
                prevSecond > 0 ? prevSecond - 1 : prevSecond,
            );
        }, 1000)
        return () => clearTimeout(timeoutId)
    }, [second])

    return { second }
}