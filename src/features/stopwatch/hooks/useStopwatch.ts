import { useState, useRef, useEffect, useCallback } from "react";

// Custom hook for stopwatch functionality
const useStopwatch = (): {
    elapsedTime: number;
    start: () => void;
    pause: () => void;
    reset: () => void;
    clear: () => void;
    lap: () => void;
    laps: number[];
} => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const elapsedTimeRef = useRef(0); // for storing the actual elapsedTime but not cause re-render
    const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const startTimeRef = useRef<number | null>(null);
    const [laps, setLaps] = useState<number[]>([]);

    useEffect(() => {
        // cleanup on component unmount
        return () => {
            clearInterval(intervalRef.current!);
        };
    }, []);

    useEffect(() => {
        // store elapsedTime twice to prevent unnecessary dependencies (and re-renders)
        elapsedTimeRef.current = elapsedTime;
    }, [elapsedTime]);

    useEffect(() => {
        if (isRunning) {
            // calculate start time whenever start the clock
            startTimeRef.current = Date.now() - elapsedTimeRef.current;
            intervalRef.current = setInterval(() => {
                //calculate elapsed time in every 10s millisecond
                setElapsedTime(Date.now() - startTimeRef.current!);
            }, 10);
        }
    }, [isRunning]);

    const start = useCallback(() => {
        if (isRunning) return;

        setIsRunning(true);
    }, [isRunning]);

    const pause = useCallback(() => {
        setIsRunning(false);
        clearInterval(intervalRef.current!);
    }, []);

    const clear = useCallback(() => {
        setLaps([]);
    }, []);

    const reset = useCallback(() => {
        setIsRunning(false);
        clearInterval(intervalRef.current!);
        setElapsedTime(0);
        clear(); // also clean the laps
    }, [clear]);

    const lap = useCallback(() => {
        if (!isRunning) return;

        setLaps([elapsedTimeRef.current, ...laps]);
    }, [isRunning, laps]);

    return {
        elapsedTime,
        start,
        pause,
        reset,
        clear,
        lap,
        laps,
    };
};

export default useStopwatch;
