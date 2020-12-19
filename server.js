import { createRequire } from 'module';
const require = createRequire(import.meta.url);


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');

//const mongoose = require('mongoose');


const app = express();
const port = 8080;

//app.use(jwtAuthenticationMiddleware);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
// app.post('/jwt-login', jwtLogin);
// app.get('/messages', isAuthenticatedMiddleware, messagesController.getAll);
// app.post('/messages', isAuthenticatedMiddleware, messagesController.post);

/* let url = 'mongodb://localhost:27017/user_data';
mongoose.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true}, 
    function(err) {
    if (err) {
      throw err;
    } else {
      console.log(`Successfully connected to ${url}`);
    }
  }); */
const data = require("./user");
console.log(data);
  
  
const budget = require("./budget_");
console.log(budget);

app.get('/budget',(req, res) => {
    res.json(budget);
});

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(port, () => {
    console.log(`API served  at http://localhost:${port}`);
 });
 