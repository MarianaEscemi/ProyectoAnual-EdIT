import { Router } from 'express';
import {
    home,
    nosotros,
    especialidad, 
    disenos,
    productos,
    contacto,
    exito,
    contactoenv 
} from '../controllers/homeController.js'
// from '../controllers/homeControllerAtlas.js'
// aca podria crear un nuevo controler para atlas 
//si no quisiera cambiar todas las const de MONGO A MONGOATLAS

export const router = Router();

router.get('/', home);
router.get('/nosotros', nosotros);
router.get('/especialidad', especialidad);
router.get('/disenos',disenos);
router.get('/productos', productos);
router.get('/contacto', contacto);
router.get('/exito', exito);
router.post('/contacto', contactoenv);

