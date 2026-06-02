import { useEffect, useState } from "react";

export function useTimer(){
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() =>{
        if(!isRunning) return;

        const interval = setInterval(() =>{
            setTime(prev => prev +1);
        },1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    return {
        time,
        isRunning,
        setIsRunning,
    }
}
