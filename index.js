const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//import Routes
const smartphone = require('./routes/smartphones.routes'); // Importa rota
app.use('/smartphones', smartphone);

let url = 'mongodb+srv://<user>:<passworld>@clusters.e2ywm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', smartphone);

//server
let port = 8080;
app.listen(port, () => {
    console.log('Servidor em execucao na porta ' + port);
})