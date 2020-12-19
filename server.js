import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const bcrypt = require('bcrypt')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');

//const mongoose = require('mongoose');


const app = express();
const port = 8080;


app.use(express.json())
//app.use(jwtAuthenticationMiddleware);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


const users = []

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = { name: req.body.name, password: hashedPassword }
    users.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})

app.post('/users/login', async (req, res) => {
  const user = users.find(user => user.name === req.body.name)
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if(await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})

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

//app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(port, () => {
    console.log(`API served  at http://localhost:${port}`);
 });
 