/**
 * @file users.js
 * @author shrewmus (shrewmus@yandex.ru contact@shrewmus.name)
 * Date: 1/11/18
 * (c) 2018
 */

class Users {

    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        const user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        const user = this.getUser(id);
        if (user) {
            this.users = this.users.filter((user) => {
                return user.id !== id;
            });
        }
        return user;
    }

    getUser(id) {
        return this.users.filter((user) => {
            return user.id === id
        })[0];
    }

    getUserList(room) {
        const users = this.users.filter((user) => {
            return user.room === room;
        });
        const names = users.map((user) => {
            return user.name;
        });

        return names;
    }
}

module.exports = {Users};