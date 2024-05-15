// Prevent from re-rendering the buttons everytime the timer has changed
import React from "react";
import Button from "react-bootstrap/Button";

const StopwatchControls = ({
    start,
    pause,
    lap,
    reset,
}: {
    start: () => void;
    pause: () => void;
    lap: () => void;
    reset: () => void;
}) => {
    return (
        <div className="buttons">
            <Button variant="success" onClick={start}>
                Start
            </Button>{" "}
            <Button onClick={pause}>Pause</Button>{" "}
            <Button onClick={lap}>Lap</Button>{" "}
            <Button variant="secondary" onClick={reset}>
                Reset
            </Button>
        </div>
    );
};

export default React.memo(StopwatchControls);
