import { act } from "react";
import Stopwatch from "./Stopwatch";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Stopwatch", () => {
    jest.useFakeTimers();

    it("Renders stopwatch with 0 and with start, pause, lap and reset buttons", () => {
        render(<Stopwatch />);
        expect(screen.getByText("00:00.00")).toBeInTheDocument();
        expect(screen.getByText("Start")).toBeInTheDocument();
        expect(screen.getByText("Pause")).toBeInTheDocument();
        expect(screen.getByText("Lap")).toBeInTheDocument();
        expect(screen.getByText("Reset")).toBeInTheDocument();
    });

    it("Start button starts the stopwatch and elapsed time increases over time", async () => {
        render(<Stopwatch />);

        //push start
        fireEvent.click(getButton("Start"));

        await wait(100);

        const time = getTimer();
        expect(time).toBe("00:00.10");
    });

    it("Pause button stops the stopwatch and elapsed time stop increasing", async () => {
        render(<Stopwatch />);

        //first of all we have to start the timer before we can pause it
        fireEvent.click(getButton("Start"));

        await wait(100);

        //push pause
        fireEvent.click(getButton("Pause"));

        const time = getTimer();
        expect(time).toBe("00:00.10");

        //wait another 100ms and test it again
        await wait(100);

        const time2 = getTimer();
        expect(time2).toBe("00:00.10");
    });

    it("Reset button resets the stopwatch to 0 and stops the elapsed time", async () => {
        render(<Stopwatch />);

        //first of all we have to start the timer to test reset functionality
        fireEvent.click(getButton("Start"));

        await wait(100);

        const time = getTimer();
        expect(time).toBe("00:00.10");

        //push reset
        fireEvent.click(getButton("Reset"));

        const time2 = getTimer();
        expect(time2).toBe("00:00.00");

        //wait another 100ms and test it again
        await wait(100);

        const time3 = getTimer();
        expect(time3).toBe("00:00.00");
    });

    it("Handles edge case of starting stopwatch multiple times without pause or reset", async () => {
        render(<Stopwatch />);

        //push start
        fireEvent.click(getButton("Start"));

        await wait(100);

        const time = getTimer();
        expect(time).toBe("00:00.10");

        //push start again
        fireEvent.click(getButton("Start"));

        await wait(100);

        //it should continue counting without pause or reset
        const time2 = getTimer();
        expect(time2).toBe("00:00.20");
    });
});

const wait = (ms: number): void => {
    act(() => {
        //All pending macro-tasks will be executed during this time frame
        jest.advanceTimersByTime(ms);
    });
};

const getTimer = () => screen.getByLabelText("Timer").textContent;

const getButton = (name: string) => screen.getByRole("button", { name: name });
