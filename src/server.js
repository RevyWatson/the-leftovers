const http = require('http');
const PORT = 8080;
const handleRequest = (request, response) => {
    response.end(`Listening at PORT. Path Hit: ${request.url}`);
};
    const server = http.createServer(handleRequest);
    server.listen(PORT, () => {
        console.log(`server listening on: http://localhost:${PORT}`);
    });