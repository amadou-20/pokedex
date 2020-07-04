const http = require("http");
const server = http.createServer(function (req, res) {
    if (req.url === "/") {
        console.log("Main page requested at " + Date());
        res.end("Hello World");
    } else if (req.url === "/weather") {
        console.log("Migracode page requested at " + Date());
        res.end("The weather is 24.5!")
    }
});