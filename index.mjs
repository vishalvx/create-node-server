import http from "http";

// declare variable
const host = "localhost";
const port = 8000;

//create server

const server = http.createServer((req, res) => {
  // check request is is POST or GET
  if (req.method === "POST") {
    let body = "";

    /**
     * loading data of body
     * on event of data arrived
     */
    req.on("data", (chunk) => {
      body += chunk;
    });
    /**
     * on close we insert or do something with data
     */
    req.on("close", () => {
      console.log(body);
    });

    /**
     * write into head the successful status code
     * for POST 201
     * for GET 200
     */

    res.writeHead(201);

    /**
     * After close the read data
     * if we dont close then it wait for more data
     * and get time out
     */

    res.end("ok");
  } else {
    //GET dont have body part
    res.writeHead(200);
    res.end("hello");
  }
});
// running/listen the server 
server.listen(port, host, () => {
  console.log(`Server running on ${host}:${port}`);
});
