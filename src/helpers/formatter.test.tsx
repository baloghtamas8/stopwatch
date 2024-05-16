import formatTime from "./formatter";

describe("formatTime", () => {
    it("should format a millisecond time number into readable string format", () => {
        expect(formatTime(0)).toBe("00:00.00");
        expect(formatTime(100)).toBe("00:00.10");
        expect(formatTime(200)).toBe("00:00.20");
        expect(formatTime(3000)).toBe("00:03.00");
        expect(formatTime(10000)).toBe("00:10.00");
        expect(formatTime(200100)).toBe("03:20.10");
        expect(formatTime(300000)).toBe("05:00.00");
    });
});
