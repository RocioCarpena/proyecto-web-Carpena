const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = new Router();
const mysql = require('mysql');


// Conexión a base de datos
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fullstack'
    })
    
    conn.connect((err) => {
        if (err) throw err;
        console.log("CONEXION ESTABLECIDA...");
    });
    
    

// SELECT 
router.get('/', (req, res) => {
    let sql = "SELECT * FROM producto";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('../views/productos', {
            results: results
        });
    });
});

// Insertar 
router.post('/save', (req, res) => {
    let data = { producto_nombre: req.body.producto_nombre, producto_precio: req.body.producto_precio };
    let sql = "INSERT INTO producto SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});


//UPDATE
router.post('/update', (req, res) => {
    let sql = "UPDATE producto SET producto_nombre='" + req.body.producto_nombre + "', producto_precio='" + req.body.producto_precio + "' WHERE producto_id=" + req.body.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// DELETE
router.post('/delete', (req, res) => {
    let sql = "DELETE FROM producto WHERE producto_id=" + req.body.producto_id + "";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

    // //Envio de mail

    // router.get('/contacto',(req, res) => {
    //     res.render('contacto');
    // });
    
    
    //     router.post("/send-email",(req, res) =>{
    //     const nombre = req.body.nombre;
    //     const apellido = req.body.apellido;
    //     const email = req.body.email;
    //     const asunto = req.body.asunto;
    //     const mensaje = req.body.mensaje;


    //     const transporter = nodemailer.createTransport({
    //         host: process.env.SMTP_HOST,
    //         port: process.env.SMTP_PORT,
    //         secure: false,
    //         auth: {
    //         user: process.env.SMTP_USER,
    //         pass: process.env.SMTP_PASS,
    //     },
    //     });
    //     const mailOptions={
    //         from: "Remitente",
    //         to:"naranjaspintdas@gmail.com",
    //         subject: `${asunto}`,
    //         html:`<h1>Consulta de ${nombre} ${apellido} sobre ${mensaje}. Responder a ${email}</h1>`,
    //     };

    //     transporter.sendMail(mailOptions,(error, info)=>{
    //         if(error){
    //         res.status(500).send(error.message);
    //             }else{
    //             console.log("Email enviado")
    //             res.status(200).jsonp(reqbody);
    //             }
    //     });
    // });
    

module.exports = router;