route = (handle,pathname,res,reviewData) => {
    if( typeof handle[pathname] === 'function' ){
        handle[pathname](res,reviewData);
        console.log(`routing a request for ${pathname} path`);
    }else{
        console.log(`No handle for this ${pathname} path`);
        res.writeHead(404,{"Content-Type" : "tex/plain"});
        res.write("Error 404 page not found");
        res.end();
    }
    
}
exports.route = route;