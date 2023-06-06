function requestValidator(obj){
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9','HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    const uriPattern = /[^A-Za-z0-9\.\*]+/;
    const messagePattern = /[<>&'"\\]/gm;
    if (!obj.hasOwnProperty('method')){
        throw new Error(`Invalid request header: Invalid Method`)
    }
    if (!obj.hasOwnProperty('uri')){
        throw new Error(`Invalid request header: Invalid URI`)
    }
    if (!obj.hasOwnProperty('version')){
        throw new Error(`Invalid request header: Invalid Version`)
    }
    if (!obj.hasOwnProperty('message')){
        throw new Error(`Invalid request header: Invalid Message`)
    }
    if (!methods.includes(obj.method)){
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if (obj.uri === '' || uriPattern.test(obj.uri)){
        throw new Error(`Invalid request header: Invalid URI`)
    }
    if (!versions.includes(obj.version)){
        throw new Error(`Invalid request header: Invalid Version`)
    }
    if (messagePattern.test(obj.message)){
        throw new Error(`Invalid request header: Invalid Message`)
    }
    return obj;
}
requestValidator({
    method: 'GET',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: 'hello world'
   }
   )