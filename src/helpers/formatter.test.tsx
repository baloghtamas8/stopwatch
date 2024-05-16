import { formatTime, getTimeValuesFromTimeNumber } from "./formatter";

describe("formatTime", () => {
    it("should format a time number into readable string format", () => {
        expect(formatTime(0)).toBe("00:00.00");
        expect(formatTime(100)).toBe("00:00.10");
        expect(formatTime(200)).toBe("00:00.20");
        expect(formatTime(3000)).toBe("00:03.00");
        expect(formatTime(10000)).toBe("00:10.00");
        expect(formatTime(200100)).toBe("03:20.10");
        expect(formatTime(300000)).toBe("05:00.00");
    });
});

describe("getTimeValuesFromTimeNumber", () => {
    it("should return hours, minutes and seconds from time number", () => {
        expect(getTimeValuesFromTimeNumber(0)).toEqual({
            hours: 0,
            minutes: 0,
            minutesContinous: 0,
            seconds: 0,
            milliseconds: 0,
        });
        expect(getTimeValuesFromTimeNumber(3000)).toEqual({
            hours: 0,
            minutes: 0,
            minutesContinous: 0,
            seconds: 3,
            milliseconds: 0,
        });
        expect(getTimeValuesFromTimeNumber(65100)).toEqual({
            hours: 0,
            minutes: 1,
            minutesContinous: 1,
            seconds: 5,
            milliseconds: 10,
        });
        expect(getTimeValuesFromTimeNumber(3600000)).toEqual({
            hours: 1,
            minutes: 0,
            minutesContinous: 60,
            seconds: 0,
            milliseconds: 0,
        });
        expect(getTimeValuesFromTimeNumber(12345670)).toEqual({
            hours: 3,
            minutes: 25,
            minutesContinous: 205,
            seconds: 45,
            milliseconds: 67,
        });
    });
});
