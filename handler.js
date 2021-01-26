const queryString = require('querystring');
function home(res,rdata){
    console.log("Executing 'home' handler ");
    let html = "<html><head><meta http-equiv='Contet-Type' Content='text/html;charset=UTF-8' /></head>"+
            "<body>"+
            "<form action='/review' method='post'>"+
            "<textarea col='60' row='30'></textarea>"+
            "<input type='submit' value='submit'/>"+
            "</form>"+
            "</body>"+
        +"</html>";
    res.writeHead(200,{"content-type": "text/html"});
    res.write(html);
    res.end(0);
}
function review(res,rdata){
    console.log("Executing 'review' handler ");
    res.writeHead(200, {"content-type":"text/plain"});
    res.write('your review is ' + queryString.parse(rdata).text);
    res.end();
}
exports.home = home;
exports.review = review;