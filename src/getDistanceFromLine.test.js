import getDistanceFromLine from './getDistanceFromLine';

describe('getDistanceFromLine', () => {
    it('should get the shortest distance from a point to a line of two points', () => {
        expect(
            getDistanceFromLine(
                { latitude: 51.516, longitude: 7.456 },
                { latitude: 51.512, longitude: 7.456 },
                { latitude: 51.516, longitude: 7.459 }
            )
        ).toEqual(188.5131192933101);
    });

    it('should get the shortest distance from a point [SO CLOSE TO LINE] to a line of two points', () => {
        expect(
            getDistanceFromLine(
                { latitude: 6.272593413043748, longitude: -75.57496146850801 },
                { latitude: 6.276251872242073, longitude: -75.5734445208417 },
                { latitude: 6.2710618547087185, longitude: -75.5755965212673 }
            )
        ).toBeLessThan(5);
    });
});
