function requestValidator(obj){
    let validMethod = ["GET", "POST", "DELETE", "CONNECT"]
    let uriPattern = /^[\w.]+$/gl;

    if (!validMethod.includes(obj.method) < 0){
        throw new Error("Invalid request header: Invalid Method");
    }
    if (!obj.hasOwnProperty("uri")){
        throw new Error("Invalid request header: Invalid URI");
    }
    if (obj.uri !== "*" && obj.uri.match(uriPattern)){
        throw new Error("Invalid request header: Invalid URI");
    }
}

requestValidator(
    {

        method: 'GET',
        
        uri: 'svn.public.catalog',
        
        version: 'HTTP/1.1',
        
        message: ''
        
        }
)
