const http = require("http");
const homeHtml = require("./views/home/index");
const css = require("./content/styles/site");

const cats = [
  {
    id: 1,
    name: "Navcho",
    breed: "Persian",
    description: "Very cute cat",
  },
  {
    id: 2,
    name: "Mishi",
    breed: "Angora",
    description: "Fluffy cat",
  }
];

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(homeHtml);
  } else if (req.url == "/content/styles/site.css") {
    es.writeHead(200, { "Content-type": "text/css" });
    res.write(css);
  }
  res.end();
});

server.listen(5000, () => console.log(`This server is running on port 5000;`));
