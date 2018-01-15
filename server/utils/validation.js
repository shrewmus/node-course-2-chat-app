/**
 * @file validation.js
 * @author shrewmus (shrewmus@yandex.ru contact@shrewmus.name)
 * Date: 1/11/18
 * (c) 2018
 */

const isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
};

module.exports = {isRealString};