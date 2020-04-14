'use strict'

const EventEmitter = require('events');

class Clock extends EventEmitter {
	constructor() {
		super();
		setInterval(() => {
			this.emit('tictac');
		}, 1000);
	}
	showTime() {
		let date 	= new Date(),
			hours 	= date.getHours(),
			minutes = date.getMinutes(),
			seconds = date.getSeconds(),
			message = `${hours}:${minutes}:${seconds}`

		console.log(message);
	}
}

let clock = new Clock();
clock.on('tictac', () => {
	clock.showTime();
});