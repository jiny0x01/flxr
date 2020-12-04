const express = require('express');
const app = express();
const port = 3000;

express.static(root);
app.use(express.static('public'));


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', function(req, res){
    res.send("FLXR MAIN!");
});

app.get('/challenge_list', function(req, res){
    
})
/*
app.post('/', function(req, res){
    res.send("got a POST request");
});
*/