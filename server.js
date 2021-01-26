const http = require('http');
const url = require('url');
const port = 4001;

serverStart = (route, handle) => {
    onRequest = (req,res) => {
        const pathname = url.parse(req.url).pathname;
        console.log(`Request recevied ${pathname}`);
        let reviewData = "";
        req.addListener('data', function(chunk){
            reviewData +=chunk;
        });
        req.addListener('end',function(){
            route(handle,pathname,res,reviewData);
        })
        
    }
    http.createServer(onRequest).listen(port);
    console.log(`App is running on http://localhost:${port}`);
}
exports.serverStart = serverStart;