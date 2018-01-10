/**
 * @file message.test.js
 * @author shrewmus (shrewmus@yandex.ru contact@shrewmus.name)
 * Date: 1/10/18
 * (c) 2018
 */

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Andrew';
        const text = 'Hello';
        const msg = generateMessage(from, text);
        expect(msg).toMatchObject({from, text});
        expect(typeof msg.createdAt).toBe('number');
    })
});