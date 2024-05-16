/**
 * Calculate hours, minutes, seconds and milliseconds from time number
 */
const getTimeValuesFromTimeNumber = (
    time: number
): {
    hours: number;
    minutes: number;
    minutesContinous: number; // counting minutes continously (not separated into hours and minutes)
    seconds: number;
    milliseconds: number;
} => {
    const hours = Math.floor(time / 3600000);
    const minutesContinous = Math.floor(time / 60000);
    const minutes = Math.floor(time / 60000) % 60;
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return { hours, minutes, minutesContinous, seconds, milliseconds };
};

/**
 * Format a time number into readable string format: {minutes}:{seconds}.{milliseconds}
 */
const formatTime = (time: number): string => {
    const { minutesContinous, seconds, milliseconds } =
        getTimeValuesFromTimeNumber(time);
    return (
        String(minutesContinous).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0") +
        "." +
        String(milliseconds).padStart(2, "0")
    );
};

export { getTimeValuesFromTimeNumber, formatTime };
