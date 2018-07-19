var responseinterceptor = require('responseinterceptor');

module.exports=responseinterceptor.intercept(function(body, bodyContentType ,request, callback){
    var NewResponse=body;
    NewResponse=NewResponse.replace('<script type=\"text/javascript\">','');
    NewResponse=NewResponse.replace('</script>','');
    callback(NewResponse); // callback function with the new content
});