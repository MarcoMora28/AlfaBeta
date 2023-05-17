const { json } = require('express');
const express = require('express');
const app = express();
const puerto = 5000;

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./router'));

app.listen(puerto, ()=>{
    console.log("Aplicación corriendo en puerto " + puerto);
});