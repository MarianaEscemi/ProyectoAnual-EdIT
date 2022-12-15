import 'dotenv/config';
import mongodb from 'mongodb';


const mongoCliente = mongodb.MongoClient;

// Conexión Home
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


/* export const contacto = (req, res) => {

    const { nombre, email, mensaje } = req.body;
    console.log(`las variables son ${titulo} - ${descripcion}`);

    mongoCliente.connect(process.env.MONGOATLAS, (error, db) => {
        const database = db.db('proyectoanual');
        if (error) {
            console.log(`No estamos conectados a la Database`);
        } else {


            console.log(`Conexion correcta a la Database`);

            database.collection('decoart').insertOne({ nombre, email, mensaje }, (error, result) => {
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
 */
