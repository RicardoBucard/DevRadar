//express serve pra fazer roteamento
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://Ricardo:omnistack@cluster0-sv1ao.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

//cria um servidor local na porta 3333, pode ser acessado por localhost:3333
app.listen(3333); 