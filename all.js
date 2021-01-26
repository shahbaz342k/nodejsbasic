// app.js
const server = require('./server');
const router = require('./router');
const handler = require('./handler');
let handle = {};
handle['/'] = handler.home;
handle['/home'] = handler.home;
handle['/review'] = handler.review;
handle['/about'] = handler.about;
server.startserver(router.route, handle);

/////////////////////

// server.js
const http = require('http');
const url = require('url');
const port = 3000;
// function onRequest(req,res){
//     res.writeHead(200,{"content-type": "text/html"});
//     res.write('hello from home');
//     res.end();
//     console.log('request received');
// }
startserver = (route, handle) =>{ // 1st param is fun name and 2nd is handle
    onRequest = (req,res) => {
        const pathname = url.parse(req.url).pathname;
        console.log(`Request Received ${pathname}`);
        var reviewData = "";
        req.setEncoding("utf8");
        req.addListener('data', function(chunk){
            reviewData +=chunk;
        });
        req.addListener('end', function(){
            route(handle,pathname,res,reviewData);
        });   
    }
    http.createServer(onRequest).listen(port);
    console.log(`App is running on http://localhost:${port}`);
}
exports.startserver = startserver;

////////////////////

// router.js

function route(handle,pathname,response,reviewData){
    console.log(`routing a request from ${pathname}`);
    if(typeof handle[pathname] === 'function') {
        handle[pathname](response,reviewData);
         
    }else{
        console.log(`No handler from this ${pathname}`);
        response.writeHead(404,{"Content-Type" : "tex/plain"});
        response.write("Error 404 page not found");
        response.end();
    }
}
exports.route = route;
///////////////////

// handler.js

// declare old function type
// function home(){
//     console.log('Execution "home" handler');
// }
// function review(){
//     console.log('Execution "review" handler');
// }
// function about(){
//     console.log('Execution "about" handler');
// }

// module exports

// first type to export method
// exports.home = home;
// exports.about = about;
// exports.review = review;

// module.exports = {
//     home: function(){
//         console.log('Execution "home" handler');
//     },
//     review: function(){
//         console.log('Execution "review" handler');
//     },
//     about: function(){
//         console.log('Execution "about" handler');
//     },
// };

// creating and exporting method both together arrow function 
const queryString = require('querystring');
module.exports = {
    home: (response) =>{
        console.log('Execution "home" handler');
        let htmfire = "<html><head><meta http-equiv='Contet-Type' Content='text/html;charset=UTF-8' /></head>"+
                        "<body>"+
                        "<form action='/review' method='post'>"+
                        "<textarea col='60' row='30'></textarea>"+
                        "<input type='submit' value='submit'/>"+
                        "</form>"+
                        "</body>"+
                    +"</html>";
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write(htmfire);
        response.end();
    },
    review: (response, reviewData) =>{
        console.log('Execution "review" handler');
        console.log(reviewData);
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write('Your review is ' + queryString.parse(reviewData).text);
        response.end();
    },
    about: () =>{
        console.log('Execution "about" handler');
    },
};
////////////////////////////////////////////////