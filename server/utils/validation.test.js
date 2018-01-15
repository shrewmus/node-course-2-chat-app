/**
 * @file validation.test.js
 * @author shrewmus (shrewmus@yandex.ru contact@shrewmus.name)
 * Date: 1/11/18
 * (c) 2018
 */

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        const res = isRealString(98);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        const res = isRealString(' ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        const res = isRealString(' sdffds sdf f   ');
        expect(res).toBe(true);
    });
});