const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'alfabeta',
    user: 'root',
    password: 'n0m3l0'
});

conexion.connect((error,)=>{
    if(error){
        console.log("El error es "+ error);
        return;
    }
    console.log("Conexión exitosa");
});

module.exports = conexion;