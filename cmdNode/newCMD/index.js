#!/usr/bin/env node
const open = require('open');

console.log("hello world");

(async () => {
    await open('https://github.com/SYED-RAFI-NAQVI', {app: ['google chrome'});
    await open('https://github.com/SYED-RAFI-NAQVI', {app: ['google chrome'});


    for(let i = 0; i<=10; i++){
    	await open('https://github.com/SYED-RAFI-NAQVI')
    }

})();
