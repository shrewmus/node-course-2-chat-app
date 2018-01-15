/**
 * @file users.test.js
 * @author shrewmus (shrewmus@yandex.ru contact@shrewmus.name)
 * Date: 1/11/18
 * (c) 2018
 */

const {Users} = require('./users');

describe('Users', () => {
    let users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '123',
            name: 'Mike',
            room: 'Node course'
        },{
            id: '124',
            name: 'Jen',
            room: 'Vue course'
        },{
            id: '125',
            name: 'Den',
            room: 'Node course'
        },]
    });

    it('should add new user', () => {
        const users = new Users();
        const user = users.addUser('123','Andrew', 'Test room');

        expect(user).toBeTruthy();
        expect(users.users[0]).toEqual(user);
    });

    it('should remove a user', () => {
        const userId = '124';
        const removedUser = users.removeUser(userId);

        expect(removedUser.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        const userId = '121';
        const removedUser = users.removeUser(userId);

        expect(removedUser).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        const userId = '124';
        const user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        const userId = '121';
        const user = users.getUser(userId);

        expect(user).toBeFalsy();
    });

    it('should return names for node course', () => {
        const userList = users.getUserList('Node course');
        expect(userList).toEqual(['Mike', 'Den']);
    });

    it('should return names for vue course', () => {
        const userList = users.getUserList('Vue course');
        expect(userList).toEqual(['Jen']);
    })
});