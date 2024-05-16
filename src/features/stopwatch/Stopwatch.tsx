import {
    formatTime,
    getTimeValuesFromTimeNumber,
} from "../../helpers/formatter";
import useStopwatch from "./hooks/useStopwatch";
import StopwatchLaps from "./StopwatchLaps";
import StopwatchControls from "./StopwatchControls";
import StopwatchClock from "./StopwatchClock";

const Stopwatch: React.FC = () => {
    // Use the stopwatch custom hook for the stopwatch functionality
    const { elapsedTime, start, pause, lap, reset, clear, laps } =
        useStopwatch();

    const { hours, minutes, seconds } =
        getTimeValuesFromTimeNumber(elapsedTime);

    return (
        <div className="stopwatch">
            <div>
                <StopwatchClock
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    elapsedTime={elapsedTime}
                    aria-label="Analog Clock"
                />
            </div>
            <div className="time" aria-label="Timer">
                {formatTime(elapsedTime)}
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
