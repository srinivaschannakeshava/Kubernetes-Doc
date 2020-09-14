const http = require('http'),
  os = require("os"),
  fs = require('fs');
var hostname = os.hostname();

const handler = (request, response) => {
  fs.readFile('/etc/config/owner.thought.level', 'UTF-8', (err, fileData) => {
    if (err) {
      console.log(err);
      return;
    } else {
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.write("<h1>'Hostname' :" + hostname+"</h1><br />");
      response.write("'OWNER' (from env variable): " + process.env.owner + '<br />');
      response.write("'owner.thought.level' (from volume): " + fileData);
      response.write("'Reveling secret : " + process.env.husband +" is husband of "+process.env.wife  );
      response.end();
    }
  });
};

const www = http.createServer(handler);
www.listen(9000);