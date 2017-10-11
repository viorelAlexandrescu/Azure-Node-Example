const app = require("express")(),
      port = 5000;

function getRoot(request, response) {
    response.end("Hello World! From Node, in Azure!");
};
      
app.get('/', getRoot);

app.listen(port);