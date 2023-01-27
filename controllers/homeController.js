import 'dotenv/config';
import mongodb from 'mongodb';
import nodemailer from 'nodemailer';

const mongoCliente = mongodb.MongoClient;


export const home = (req, res) => {

    mongoCliente.connect(process.env.MONGOATLAS, (error, db) => {
        const database = db.db('proyectoanual');
        if (error) {
            console.log(`No estamos conectados a la Database`);
        } else {
            console.log(`Conexion correcta a la Database`);
            database.collection('decoart').find({}).toArray((error, result) => {
                if (error) {
                    throw error;
                } else {
                    res.render('home', {
                        result
                    }) 
                }
            })
        }
    });

};


export const nosotros = (req, res) => {

    mongoCliente.connect(process.env.MONGOATLAS, (error, db) => {
        const database = db.db('proyectoanual');
        if (error) {
            console.log(`No estamos conectados a la Database`);
        } else {
            console.log(`Conexion correcta a la Database`);
            database.collection('decoart').find({}).toArray((error, result) => {
                if (error) {
                    throw error;
                } else {
                    res.render('nosotros', {
                        result
                    })
                }
            })
        }
    });

};


export const exito = (req, res) => {

    mongoCliente.connect(process.env.MONGOATLAS, (error, db) => {
        const database = db.db('proyectoanual');
        if (error) {
            console.log(`No estamos conectados a la Database`);
        } else {
            console.log(`Conexion correcta a la Database`);
            database.collection('decoart').find({}).toArray((error, result) => {
                if (error) {
                    throw error;
                } else {
                    res.render('exito', {
                        result
                    })
                }
            })
        }
    });

};


export const especialidad = (req, res) => {

    mongoCliente.connect(process.env.MONGOATLAS, (error, db) => {
        const database = db.db('proyectoanual');
        if (error) {
            console.log(`No estamos conectados a la Database`);
        } else {
            console.log(`Conexion correcta a la Database`);
            database.collection('decoart').find({}).toArray((error, result) => {
                if (error) {
                    throw error;
                } else {
                    res.render('especialidad', {
                        result
                    })
                }
            })
        }
    });

};


export const disenos = (req, res) => {

    mongoCliente.connect(process.env.MONGOATLAS, (error, db) => {
        const database = db.db('proyectoanual');
        if (error) {
            console.log(`No estamos conectados a la Database`);
        } else {
            console.log(`Conexion correcta a la Database`);
            database.collection('decoart').find({}).toArray((error, result) => {
                if (error) {
                    throw error;
                } else {
                    res.render('disenos', {
                        result
                    })
                }
            })
        }
    });

};


export const productos = (req, res) => {

    mongoCliente.connect(process.env.MONGOATLAS, (error, db) => {
        const database = db.db('proyectoanual');
        if (error) {
            console.log(`No estamos conectados a la Database`);
        } else {
            console.log(`Conexion correcta a la Database`);
            database.collection('decoart').find({}).toArray((error, result) => {
                if (error) {
                    throw error;
                } else {
                    res.render('productos', {
                        result
                    })
                }
            })
        }
    });

};


export const contacto = (req, res) => {

    mongoCliente.connect(process.env.MONGOATLAS, (error, db) => {
        const database = db.db('proyectoanual');
        if (error) {
            console.log(`No estamos conectados a la Database`);
        } else {
            console.log(`Conexion correcta a la Database`);
            database.collection('decoart').find({}).toArray((error, result) => {
                if (error) {
                    throw error;
                } else {
                    res.render('contacto', {
                        result
                    })
                }
            })
        }
    });

};


export const contactoenv = (req, res) => {

    const { nombre, email, numero, mensaje } = req.body;
    console.log(`las variables son ${nombre} - ${email} - ${numero} - ${mensaje}`);

    async function envioMail() {
        let trasporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL, 
                pass: process.env.PASSGOOGLE
            }
        });
        let mensaje = await trasporter.sendMail({
            from:  process.env.EMAIL,
            to: `${email}`,
            subject: "Gracias por ponerse en contacto con DecoArt",
            html: `${nombre}, hemos recibido su consulta! a la brevedad nos estaremos comunicando con usted a través de su número telefónico: ${numero} o si así lo prefiere por éste medio ${email}, Saludos cordiales, DecoArt.`
        });
        res.render('enviado')
    }
envioMail().catch(console.error)
    mongoCliente.connect(process.env.MONGOATLAS, (error, db) => {
        const database = db.db('proyectoanual');
        if (error) {
            console.log(`No estamos conectados a la Database`);
        } else {
            console.log(`Conexion correcta a la Database`);
            database.collection('decoart').insertOne({ nombre, email, numero, mensaje }, (error, result) => {
                if (error) {
                    throw error;
                } else{
                    res.render('exito', {
                        result
                    })
                }
            });
        };
    });
};

