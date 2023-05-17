const { render } = require('ejs');
const conexion = require('../database/db');
const bcrypt = require('bcryptjs');

const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

exports.registrarUsuario = async (peticion, respuesta) => {
    const nombre = peticion.body.nombre;
    const edad = peticion.body.edad;
    const contraseña = peticion.body.contraseña;
    let contrahash = await bcrypt.hash(contraseña,8);
    conexion.query('select count(*) as contador from usuario where nombre=?', [nombre], (error, resultados) => {
        if (resultados[0].contador == 0){
            conexion.query('INSERT INTO usuario SET ?', { nombre: nombre, edad: edad, contraseña: contrahash }, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Datos registrados");
                    respuesta.redirect('/');
                }
            });
        } else {
            console.log("Usuario existente");
        }
    });
};

exports.auth = async (peticion, respuesta) => {
	const nombre = peticion.body.nombre;
    const contraseña = peticion.body.contraseña;
	if (nombre && contraseña) {
		conexion.query('SELECT * FROM usuario WHERE nombre = ?', [nombre], async (error, resultados, fields) => {
			if (resultados.length == 0 || !(await bcrypt.compare(contraseña, resultados[0].contraseña))) {
				respuesta.render('inicio');

				//Mensaje simple y poco vistoso
				//res.send('Incorrect Username and/or Password!');				
			} else {
				//creamos una var de session y le asignamos true si INICIO SESSION       
				peticion.session.loggedin = true;
				peticion.session.name = resultados[0].name;
				respuesta.render('inicio', {
					alert: true,
					alertTitle: "Conexión exitosa",
					alertMessage: "¡LOGIN CORRECTO!",
					alertIcon: 'success',
					showConfirmButton: false,
					timer: 1500,
					ruta: 'perfil'
				});
			}
			respuesta.end();
		});
	} else {
		respuesta.send('Please enter user and Password!');
		respuesta.end();
	}
};