import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    res.sendFile(__dirname + "/.html")
})


app.listen(port);

