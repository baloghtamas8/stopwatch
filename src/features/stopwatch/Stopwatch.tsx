import React, { useMemo } from "react";
import formatTime from "../../helpers/formatter";
import useStopwatch from "./hooks/useStopwatch";
import StopwatchLaps from "./StopwatchLaps";
import StopwatchControls from "./StopwatchControls";

const Stopwatch: React.FC = () => {
    // Use the stopwatch custom hook for the stopwatch functionality
    const { elapsedTime, start, pause, lap, reset, clear, laps } =
        useStopwatch();

    const formattedTime = useMemo(() => formatTime(elapsedTime), [elapsedTime]);

    return (
        <div className="stopwatch">
            <div className="time" aria-label="Timer">
                {formattedTime}
            </div>
            <StopwatchControls
                start={start}
                pause={pause}
                lap={lap}
                reset={reset}
            />
            <StopwatchLaps laps={laps} clear={clear} />
        </div>
    );
};

export default Stopwatch;
