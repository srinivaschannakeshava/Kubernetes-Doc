const http = require('http'),
      fs = require('fs');

const handler = (request, response) => {
  fs.readFile('/etc/config/owner.thought.level', 'UTF-8', (err, fileData) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("'OWNER' (from env variable): " + process.env.OWNER + '<br />');
      response.write("'owner.thought.level' (from volume): " + fileData);
      response.end();
    }
  });
};

const www = http.createServer(handler);
www.listen(9000);