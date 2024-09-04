const http = require("http");
const fs = require("fs");
const url = require("url");

const nuestro_server = http.createServer((request, respuesta) => {
    const parsedUrl = url.parse(request.url, true);

    if(req.method == "GET" && parsedUrl.pathname == "/ver-registros"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Codigo HTML");
        res.end();

    }
});

nuestro_server.listen(3000, () => {
    console.log("Corriendo")
})