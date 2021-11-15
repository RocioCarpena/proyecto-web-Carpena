const express = require('express')
const hbs = require('hbs')

//require ('dotenv').config();


const app = express();
//const port = process.env.PORT;
const port = 3000;

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + "/views/partials/")

// midlle bars
// Contenido estatico
app.use(express.static('public'));
 

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Power Rochi',
    titulo: 'POWER ROCHI'
  })
})

app.get('/sobreNosotros',   (req, res) => {
  res.render('sobreNosotros', {
    nombre: 'Power Rochi',
    titulo: 'POWER ROCHI'
  })
})


app.get('/consulta',   (req, res) => {
  res.render('consulta', {
    nombre: 'Power Rochi',
    titulo: 'POWER ROCHI'
  })
})

app.get('/creaTuCuenta',   (req, res) => {
  res.render('creaTuCuenta', {
    nombre: 'Power Rochi',
    titulo: 'POWER ROCHI'
  })
})


app.get('*',  (req, res) => {
  res.send('Página no encontrada - Error 404 !!')
})

app.listen(port, () => {
       console.log(`Usando el puerto http://localhost:${port}`);
});