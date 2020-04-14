/* Single thread es el modulo de process */

'use strict'

function singleThread() {
	console.log(process.argv);
	console.log(process.title);
	console.log(process.pid);
}

singleThread();