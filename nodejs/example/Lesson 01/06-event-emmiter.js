'use strict'

const EventEmitter = require ('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter
	.on('customEvent', message => {
		console.log(message);
	})
	.once('customEvent', message => {
		console.log('Se ejecuta la primara vez = ' + message);
	});

myEmitter.emit('customEvent', 'Soy un emisor de eventos');
myEmitter.emit('customEvent', 'Volviendo a emitir');
myEmitter.removeAllListeners('customEvent');
myEmitter.emit('customEvent', 'Por tercera vez');