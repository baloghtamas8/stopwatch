const StopwatchClock = ({
    hours,
    minutes,
    seconds,
    elapsedTime,
}: {
    hours: number;
    minutes: number;
    seconds: number;
    elapsedTime: number;
}) => {
    const secondDeg = (elapsedTime / 1000 / 60) * 360;
    const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
    const hourDeg = ((hours + minutes / 60 + seconds / 3600) / 12) * 360;

    return (
        <div className="clock-container">
            <div className="clock-face">
                <div className="clock-hands">
                    <div
                        className="hour-hand"
                        style={{ transform: `rotate(${hourDeg}deg)` }}
                    />
                    <div
                        className="min-hand"
                        style={{ transform: `rotate(${minuteDeg}deg)` }}
                    />
                    <div
                        className="sec-hand"
                        style={{ transform: `rotate(${secondDeg}deg)` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default StopwatchClock;
