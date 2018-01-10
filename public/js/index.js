/**
 * @file index.js
 * @author shrewmus (shrewmus@yandex.ru contact@shrewmus.name)
 * Date: 1/9/18
 * (c) 2018
 */

var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);

    const li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

socket.emit('createMessage', {
    from: 'Frank',
    text: 'Hi'
}, function (data) {
    console.log('Got it', data);
});

jQuery('#message-form').on('submit', function (event) {
    event.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {

    })

});