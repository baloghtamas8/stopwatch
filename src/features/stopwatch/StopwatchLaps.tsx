import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import formatTime from "../../helpers/formatter";
import React from "react";

const StopwatchLaps = ({
    laps,
    clear,
}: {
    laps: number[];
    clear: () => void;
}) => {
    return (
        <>
            {laps.length > 0 && (
                <>
                    <div className="laps-list">
                        <ListGroup>
                            {laps.map((lap, i) => (
                                <ListGroup.Item key={`lap-${i}`}>
                                    Lap {laps.length - i}
                                    <span style={{ float: "right" }}>
                                        {formatTime(lap)}
                                    </span>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                    <Button variant="light" onClick={clear}>
                        Clear
                    </Button>
                </>
            )}
        </>
    );
};

// Prevent unnecessary rerenders with memo
export default React.memo(StopwatchLaps);
