import http from "http";

const listener = (req: any, res: any): void => {
    res.writeHead(200);
    res.end("Hello world!");
}


const server: http.Server = http.createServer(listener);
server.listen(8080);