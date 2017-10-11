const app = require("express")(),
      port = 80;

function getRoot(request, response) {
    response.send("Hello World! From Node, in Azure!");
    response.end();
};
      
app.get('/', getRoot);

app.listen(port);