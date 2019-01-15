module.exports = function (context, req) {
    context.log('Received request');

    if (req.body && req.body.name) {
        context.res = {
            body: "Hello (v1) " + req.body.name
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    };

    context.bindings.outputBlob = "Hello (v1) " + req.body.name;
    context.done();
};