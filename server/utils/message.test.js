/**
 * @file message.test.js
 * @author shrewmus (shrewmus@yandex.ru contact@shrewmus.name)
 * Date: 1/10/18
 * (c) 2018
 */

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Andrew';
        const text = 'Hello';
        const msg = generateMessage(from, text);
        expect(msg).toMatchObject({from, text});
        expect(typeof msg.createdAt).toBe('number');
    })
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Deb';
        var lat = 15;
        var lon = 19;
        var url = 'https://www.google.com/maps?q=15,19';

        var msg = generateLocationMessage(from, lat, lon);
        expect(msg).toMatchObject({from, url});

    })
});