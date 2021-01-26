
// Anonymous Function
/*function printf(print_val){
    console.log(print_val);
}
function main(fname, value){
    fname(value);
}
main(printf,'this is anononymous function');*/

/*printf = function(print_val){ // name function
    console.log(print_val);
} 
function main(fname, value){
    fname(value);
}
main(printf, 'hello name function');*/

/*function main(fname, value){
    fname(value);
}
main( function printf(print_val) {
    console.log(print_val) }, "hello define function in calling another function"
);*/

//---------------------------------------------

// filename, dirname, setTimeout, setInterval

/*console.log(__filename);
console.log(__dirname);
function printf() {
    console.log('Hello this is set time out')
}
setTimeout(printf, 4000);

function  printf_two() {
    console.log('hello this is set time interval');
}
setInterval(printf_two, 3000);*/
// --------------------------------------

// custom module 

/*const custom_module = require("./custom_module");
custom_module.run();
custom_module.walk();*/

// --------------------------------------

// http(core) module 

const http = require('http');
const port = 4000;
// http.createServer(function(req, res){
//     res.writeHead(200,{"content-type":"text/html"});
//     res.write("<h2>Hello this is node app file</h2>");
//     res.end();
// }).listen(port);


/*http.createServer( (req, res) => {
    res.writeHead(200, {"content-type":"text/html"});
    res.write("<h3>This is app file</h3>");
    res.end();
} ).listen(port);
console.log(`app is running on http://localhost:${port}`); */
//----------------------------------------------------------


// events

/* const events = require('events');
const eventEmitter = new events.EventEmitter();

// ringbell = function() {
//     console.log('ring ring ring');
    
// }

// eventEmitter.on("dooropen", ringbell);
// eventEmitter.on("bellrings", function(msg) {
//     console.log(msg);
// });
// eventEmitter.emit("dooropen");


ringbell = () => {
    console.log("Ring ring ring");
}
eventEmitter.on("bellring", ringbell); // takes 2 parameter 1st : event name, 2nd : function name
eventEmitter.on("dooropen",(msg) => {
    console.log(msg);
});

eventEmitter.emit("bellring"); // call the events from event name
eventEmitter.emit("dooropen", 'welcome'); */
//---------------------------------------------------------------------------------------------------

// fs (file handling)
const fs = require('fs');
/*
// fs.readFile('input.txt', function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// });

// const data = fs.readFileSync('input.txt');
// console.log(`Sync data is ${data.toString()}`);

// fs.readFile('input.txt', (err,data) => {
//     if(err) throw err;
//     console.log(`Async data is : ${data.toString()}`);
// });

// const data = fs.readFileSync('input.txt');
// console.log(`Sync data is : ${data.toString()}`);

// read and write stream

const readableStream = fs.createReadStream('input.txt');
let data='';
readableStream.setEncoding('UTF-8');
readableStream.on('data',function(chunk){
    data +=chunk;
});
readableStream.on('end',function(){
    console.log(data);
})
// data,end and finish are pre-defined paramteres

let writesome = 'Hello world';
const writestream = fs.createWriteStream('hello.txt');
writestream.write(writesome, 'utf-8');
writestream.end();
writestream.on('finish', function(){
    console.log('completed');
}) */

/*Why this time we are not emitting the data?
It should be like this ----->  readableStream.emit("data"); 
as you have told like this in Event Emitter Tutorial

a readable stream is an event emitter - it has the functionality to emit events as it chooses. In this case when a chunk is read, the readable stream emits the event "data" - you have a callback function defined to be executed when a "data" event is emitted (to concatenate the chunk to the data variable). Likewise, the readable stream emits events "end" and "finish". You have defined a callback function to execute when the "end" event is emitted (console log the data variable) and another callback function to execute when the "finish" event is emitted (console log "write completed"). 
Use the emit(custom event) method when you want your own custom event to be emitted. Simply add a listener on the object to wait for this custom event to be fired using on(custom event,  callback)*/

// pipe function
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('out.txt');
console.log(readStream);
readStream.pipe(writeStream);
//---------------------------------------------------------------------------------------/






























