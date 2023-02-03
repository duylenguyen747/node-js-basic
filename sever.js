const http = require("http");
const sever = http.createServer((req, res) => {
  console.log("run request...");
  res.setHeader("Content-Type", "text/html");
  res.write("<h3>hello world! </h3>");
  res.write("<h2>Nguyen le duy</h2>");
  res.end();
});

sever.listen(3000, "localhost", () => {
  console.log("nodejs sever is running on port: 3000");
});
