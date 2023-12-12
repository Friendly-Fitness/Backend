import express from 'express';
import {
  inUpCliente,
  logearCliente,
  cargarCliente,
  inUpEvento,
  listarEventos,
  listarMisEventos,
  getListarMisEventos,
  inUpPublicacion,
  listarPublicaciones,
  listarMisPublicaciones,
} from '../controllers/cliente.control.js';

const router = express.Router();

router.post('/inUpCliente', inUpCliente);
router.post('/logearCliente', logearCliente);
router.post('/cargarCliente', cargarCliente);

router.post('/inUpEvento', inUpEvento);
router.post('/listarEventos', listarEventos);
router.post('/listarMisEventos', listarMisEventos);
router.get('/getListarMisEventos', getListarMisEventos);

router.post('/inUpPublicacion', inUpPublicacion);
router.post('/listarPublicaciones', listarPublicaciones);
router.post('/listarMisPublicaciones', listarMisPublicaciones);

export default router;
