const { scoreCalculator } = require('./bowlingScoreCalculator');

describe('Score Calculator for bowling', () => {
    it('should calculate score when number of frame is 10', () => {
        const result = scoreCalculator([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
        expect(result).toEqual(30);
    });
    it('should return invalid input error when number of frames are greater than 10', () => {
        expect(() => {
            scoreCalculator([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10]).toThrow(Error);
        });
    });
});
