import {
  inUp_Cliente,
  logear_Cliente,
  cargar_Cliente,
  inUp_Evento,
  listar_Eventos,
  listar_MisEventos,
  inUp_Publicacion,
  listar_Publicaciones,
  listar_MisPublicaciones,
} from '../services/cliente.servi.js';

export const inUpCliente = async (req, res) => {
  console.log(`***********control***************`);
  console.log(`//-->//--> inUpCliente <--//<--//`);
  //#region PARAMETROS
  const elJson = req.body;
  //#endregion PARAMETROS
  try {
    const inRI = await inUp_Cliente({
      elJson,
    });
    return res.status(200).json({
      status: 200,
      data: inRI,
      message: 'Succesfully inUpCliente Retrieved',
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message + ' /inUpCliente' });
  }
};

export const logearCliente = async (req, res) => {
  console.log(`***********control***************`);
  console.log(`//-->//--> logearCliente <--//<--//`);
  //#region PARAMETROS
  const elJson = req.body;
  //#endregion PARAMETROS
  try {
    const inRI = await logear_Cliente({
      elJson,
    });
    return res.status(200).json({
      status: 200,
      data: inRI,
      message: 'Succesfully logearCliente Retrieved',
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message + ' /logearCliente' });
  }
};

export const cargarCliente = async (req, res) => {
  console.log(`***********control***************`);
  console.log(`//-->//--> cargarCliente <--//<--//`);
  //#region PARAMETROS
  const elJson = req.body;
  //#endregion PARAMETROS
  try {
    const inRI = await cargar_Cliente({
      elJson,
    });
    return res.status(200).json({
      status: 200,
      data: inRI,
      message: 'Succesfully cargarCliente Retrieved',
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message + ' /cargarCliente' });
  }
};

export const inUpEvento = async (req, res) => {
  console.log(`***********control***************`);
  console.log(`//-->//--> inUpEvento <--//<--//`);
  //#region PARAMETROS
  const elJson = req.body;
  //#endregion PARAMETROS
  try {
    const inRI = await inUp_Evento({
      elJson,
    });
    return res.status(200).json({
      status: 200,
      data: inRI,
      message: 'Succesfully inUpEvento Retrieved',
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message + ' /inUpEvento' });
  }
};

export const listarEventos = async (req, res) => {
  console.log(`***********control***************`);
  console.log(`//-->//--> listarEventos <--//<--//`);
  //#region PARAMETROS
  const elJson = req.body;
  //#endregion PARAMETROS
  try {
    const inRI = await listar_Eventos();
    return res.status(200).json({
      status: 200,
      data: inRI,
      message: 'Succesfully listarEventos Retrieved',
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message + ' /listarEventos' });
  }
};

export const listarMisEventos = async (req, res) => {
  console.log(`***********control***************`);
  console.log(`//-->//--> listarMisEventos <--//<--//`);
  //#region PARAMETROS
  const elJson = req.body;
  // console.log('CONTROL: elJson', elJson);
  //#endregion PARAMETROS
  try {
    const inRI = await listar_MisEventos({
      elJson,
    });
    return res.status(200).json({
      status: 200,
      data: inRI,
      message: 'Succesfully listarMisEventos Retrieved',
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message + ' /listarMisEventos' });
  }
};

export const getListarMisEventos = async (req, res) => {
  console.log(`***********control***************`);
  console.log(`//-->//--> getListarMisEventos <--//<--//`);
  //#region PARAMETROS
  const elJson = req.body;
  console.log('elJson', elJson);
  //#endregion PARAMETROS
  try {
    return res.status(200).send('Hola Micky!!!');
    // const inRI = await listar_MisEventos({
    //   elJson,
    // });
    // return res.status(200).json({
    //   status: 200,
    //   data: inRI,
    //   message: 'Succesfully listarMisEventos Retrieved',
    // });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message + ' /getListarMisEventos' });
  }
};

export const inUpPublicacion = async (req, res) => {
  console.log(`***********control***************`);
  console.log(`//-->//--> inUpPublicacion <--//<--//`);
  //#region PARAMETROS
  const elJson = req.body;
  //#endregion PARAMETROS
  try {
    const inRI = await inUp_Publicacion({
      elJson,
    });
    return res.status(200).json({
      status: 200,
      data: inRI,
      message: 'Succesfully inUpPublicacion Retrieved',
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message + ' /inUpPublicacion' });
  }
};

export const listarPublicaciones = async (req, res) => {
  console.log(`***********control***************`);
  console.log(`//-->//--> listarPublicaciones <--//<--//`);
  //#region PARAMETROS
  const elJson = req.body;
  //#endregion PARAMETROS
  try {
    const inRI = await listar_Publicaciones();
    return res.status(200).json({
      status: 200,
      data: inRI,
      message: 'Succesfully listarPublicaciones Retrieved',
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message + ' /listarPublicaciones' });
  }
};

export const listarMisPublicaciones = async (req, res) => {
  console.log(`***********control***************`);
  console.log(`//-->//--> listarMisPublicaciones <--//<--//`);
  //#region PARAMETROS
  const elJson = req.body;
  // console.log('CONTROL: elJson', elJson);
  //#endregion PARAMETROS
  try {
    const inRI = await listar_MisPublicaciones({
      elJson,
    });
    return res.status(200).json({
      status: 200,
      data: inRI,
      message: 'Succesfully listarMisPublicaciones Retrieved',
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message + ' /listarMisPublicaciones' });
  }
};
