var responseinterceptor = require('responseinterceptor');

module.exports=function(req,res,next) {
    res.setHeader('content-type', 'application/javascript');
    responseinterceptor.interceptOnFly(req,res,function (body, bodyContentType, request, callback) {
        var NewResponse = body;
        NewResponse = NewResponse.replace('<script type=\"text/javascript\">', '');
        NewResponse = NewResponse.replace('</script>', '');
        callback(NewResponse); // callback function with the new content
    });
    next();
}