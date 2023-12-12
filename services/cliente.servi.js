import mongoose from 'mongoose';
import mCliente from '../models/cliente.model.js';
import mEvento from '../models/evento.model.js';
import mPublicacion from '../models/publicacion.model.js';

export const inUp_Cliente = async (preto) => {
  console.log(`***********servi*******************`);
  console.log(`//-->//--> inUp_Cliente <--//<--//`);
  console.log(`*********************************`);
  const ge = preto.elJson;
  console.log('ge:', ge);
  const session = await mongoose.startSession();

  try {
    console.log(1);

    session.startTransaction();

    let updated;
    console.log('idCliente', ge.idCliente);
    if (ge.idCliente === null || ge.idCliente === '' || typeof ge.idCliente === 'undefined') {
      console.log('--------insert--------', ge);
      // console.log(ge);
      updated = await mCliente.insertMany(
        [
          {
            nombre: ge.nombre,
            apellido: ge.apellido,
            correo: ge.correo,
            edad: ge.edad,
            contrasena: ge.contrasena,
          },
        ],
        { session: session }
      );
      console.log('end IN');
    } else {
      console.log('--------update--------', ge);
      updated = await mCliente.updateOne(
        { _id: ge.idCliente },
        {
          nombre: ge.nombre,
          apellido: ge.apellido,
          correo: ge.correo,
          edad: ge.edad,
          contrasena: ge.contrasena,
        },
        { session: session }
      );
      console.log('end UP');
    }

    //finalizando
    console.log(2);
    await session.commitTransaction();

    session.endSession();
    if (ge.idCliente === null || ge.idCliente === '') {
      //insertado
      //el CORRELATIVO NO SE VISUALIZAR CON EL update[0]
      //POR ELLO SE HACE UN findById(update._id)
      updated = updated[0];
      //   const elID = updated._id;
      updated = await mEvento.findById(updated._id);
      //   console.log('//insertado', elID, updated);
    } else {
      //editado
      updated = await mEvento.findById(ge.idCliente);
    }
    console.log('-->Session ACABADO con  commitTransaction <---', updated);
    console.log(3);
    return updated;
  } catch (error) {
    console.log(666);
    await session.abortTransaction();

    throw Error('Error newCliente ::| ' + error);
  } finally {
    console.log('terminando_0');
    session.endSession();
    console.log('terminando_1');
  }
};

export const logear_Cliente = async (preto) => {
  console.log(`***********servi*******************`);
  console.log(`//-->//--> logear_Cliente <--//<--//`);
  console.log(`*********************************`);
  const ge = preto.elJson;
  console.log('ge:', ge);
  const session = await mongoose.startSession();

  try {
    console.log(1);

    session.startTransaction();
    //OBTENER EL NUMERO CORRELATIVO de la SERIE X-

    // if (ge.idLineaTipoMercaderia == null) {
    const newCliente = await mCliente.find(
      {
        // idCliente: ge.idCliente,
        correo: ge.correo,
        contrasena: ge.contrasena,
      }

      // { session: session }
    );
    //finalizando
    console.log(2);
    await session.commitTransaction();

    //session.endSession();
    console.log('-->Session ACABADO con commitTransaction <---', newCliente);

    // return true;
    return newCliente;
  } catch (error) {
    console.log(666);
    await session.abortTransaction();

    throw Error('Error newCliente ::| ' + error);
  } finally {
    console.log('terminando_0');
    session.endSession();
    console.log('terminando_1');
  }
};

export const cargar_Cliente = async (preto) => {
  console.log(`***********servi*******************`);
  console.log(`//-->//--> cargar_Cliente <--//<--//`);
  console.log(`*********************************`);
  const ge = preto.elJson;
  console.log('ge:', ge);
  const session = await mongoose.startSession();

  try {
    console.log(1);

    session.startTransaction();
    //OBTENER EL NUMERO CORRELATIVO de la SERIE X-

    // if (ge.idLineaTipoMercaderia == null) {
    const newCliente = await mCliente.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(ge.idCliente),
        },
      },
    ]);
    //finalizando
    console.log(2);
    await session.commitTransaction();

    //session.endSession();
    console.log('-->Session ACABADO con commitTransaction <---', newCliente);

    // return true;
    return newCliente;
  } catch (error) {
    console.log(666);
    await session.abortTransaction();

    throw Error('Error newCliente ::| ' + error);
  } finally {
    console.log('terminando_0');
    session.endSession();
    console.log('terminando_1');
  }
};

export const inUp_Evento = async (preto) => {
  console.log(`***********servi*************************`);
  console.log(`//-->//--> inUp_Evento <--//<--//`);
  console.log(`***************************************`);
  const ge = preto.elJson;

  try {
    console.log(1);
    const session = await mongoose.startSession();
    session.startTransaction();
    //
    let updated;
    console.log('idEvento', ge.idEvento);
    if (ge.idEvento === null || ge.idEvento === '' || typeof ge.idEvento === 'undefined') {
      console.log('--------insert--------', ge);
      // console.log(ge);
      updated = await mEvento.insertMany(
        [
          {
            idCliente: ge.idCliente,
            nombre: ge.nombre,
            titulo: ge.titulo,
            fechaInicio: ge.fechaInicio,
            contenido: ge.contenido,
            link: ge.link,
          },
        ],
        { session: session }
      );
      console.log('end IN');
    } else {
      console.log('--------update--------', ge);
      updated = await mEvento.updateOne(
        { _id: ge.idEvento },
        {
          idCliente: ge.idCliente,
          nombre: ge.nombre,
          titulo: ge.titulo,
          fechaInicio: ge.fechaInicio,
          contenido: ge.contenido,
          link: ge.link,
        },
        { session: session }
      );
      console.log('end UP');
    }

    //finalizando
    console.log(2);
    await session.commitTransaction();

    session.endSession();
    if (ge.idEvento === null || ge.idEvento === '') {
      //insertado
      //el CORRELATIVO NO SE VISUALIZAR CON EL update[0]
      //POR ELLO SE HACE UN findById(update._id)
      updated = updated[0];
      //   const elID = updated._id;
      updated = await mEvento.findById(updated._id);
      //   console.log('//insertado', elID, updated);
    } else {
      //editado
      updated = await mEvento.findById(ge.idEvento);
    }
    console.log('-->Session ACABADO con  commitTransaction <---', updated);
    console.log(3);
    return updated;
  } catch (error) {
    console.log(666);
    await session.abortTransaction();
    session.endSession();
    throw Error('Error while Paginating inUp_Evento ::| ' + error);
  }
};

export const listar_Eventos = async () => {
  console.log(`***********servi*******************`);
  console.log(`//-->//--> listar_Eventos <--//<--//`);
  console.log(`*********************************`);
  // const ge = preto.elJson;
  // console.log('ge:', ge);
  const session = await mongoose.startSession();

  try {
    console.log(1);

    session.startTransaction();

    // if (ge.idLineaTipoMercaderia == null) {
    const newEvento = await mEvento.aggregate([
      {
        $sort: {
          fechaInicio: -1,
          createdAt: -1,
        },
      },
    ]);
    //finalizando
    console.log(2);
    await session.commitTransaction();

    //session.endSession();
    console.log('-->Session ACABADO con commitTransaction <---', newEvento);

    // return true;
    return newEvento;
  } catch (error) {
    console.log(666);
    await session.abortTransaction();

    throw Error('Error newEvento ::| ' + error);
  } finally {
    console.log('terminando_0');
    session.endSession();
    console.log('terminando_1');
  }
};

export const listar_MisEventos = async (preto) => {
  console.log(`***********servi*******************`);
  console.log(`//-->//--> listar_MisEventos <--//<--//`);
  console.log(`*********************************`);
  const ge = preto.elJson;
  console.log('ge:', ge);
  const session = await mongoose.startSession();

  try {
    console.log(1);

    session.startTransaction();
    //OBTENER EL NUMERO CORRELATIVO de la SERIE X-

    // if (ge.idLineaTipoMercaderia == null) {
    const newCliente = await mEvento.aggregate([
      {
        $match: {
          idCliente: new mongoose.Types.ObjectId(ge.idCliente),
        },
      },
      {
        $sort: { fechaInicio: -1, createdAt: -1 },
      },
    ]);
    //finalizando
    console.log(2);
    await session.commitTransaction();

    //session.endSession();
    console.log('-->Session ACABADO con commitTransaction <---', newCliente);

    // return true;
    return newCliente;
  } catch (error) {
    console.log(666);
    await session.abortTransaction();

    throw Error('Error newCliente ::| ' + error);
  } finally {
    console.log('terminando_0');
    session.endSession();
    console.log('terminando_1');
  }
};

export const inUp_Publicacion = async (preto) => {
  console.log(`***********servi*************************`);
  console.log(`//-->//--> inUp_Publicacion <--//<--//`);
  console.log(`***************************************`);
  const ge = preto.elJson;

  try {
    console.log(1);
    const session = await mongoose.startSession();
    session.startTransaction();
    //
    let updated;
    console.log('idPublicacion', ge.idPublicacion);
    if (ge.idPublicacion === null || ge.idPublicacion === '' || typeof ge.idPublicacion === 'undefined') {
      console.log('--------insert--------', ge);
      // console.log(ge);
      updated = await mPublicacion.insertMany(
        [
          {
            idCliente: ge.idCliente,
            nombre: ge.nombre,
            titulo: ge.titulo,
            fechaPublicacion: ge.fechaPublicacion,
            contenido: ge.contenido,
          },
        ],
        { session: session }
      );
      console.log('end IN');
    } else {
      console.log('--------update--------', ge);
      updated = await mPublicacion.updateOne(
        { _id: ge.idPublicacion },
        {
          idCliente: ge.idCliente,
          nombre: ge.nombre,
          titulo: ge.titulo,
          fechaPublicacion: ge.fechaPublicacion,
          contenido: ge.contenido,
        },
        { session: session }
      );
      console.log('end UP');
    }

    //finalizando
    console.log(2);
    await session.commitTransaction();

    session.endSession();
    if (ge.idPublicacion === null || ge.idPublicacion === '') {
      //insertado
      //el CORRELATIVO NO SE VISUALIZAR CON EL update[0]
      //POR ELLO SE HACE UN findById(update._id)
      updated = updated[0];
      //   const elID = updated._id;
      updated = await mPublicacion.findById(updated._id);
      //   console.log('//insertado', elID, updated);
    } else {
      //editado
      updated = await mPublicacion.findById(ge.idPublicacion);
    }
    console.log('-->Session ACABADO con  commitTransaction <---', updated);
    console.log(3);
    return updated;
  } catch (error) {
    console.log(666);
    await session.abortTransaction();
    session.endSession();
    throw Error('Error while Paginating inUp_Publicacion ::| ' + error);
  }
};

export const listar_Publicaciones = async () => {
  console.log(`***********servi*******************`);
  console.log(`//-->//--> listar_Publicaciones <--//<--//`);
  console.log(`*********************************`);
  // const ge = preto.elJson;
  // console.log('ge:', ge);
  const session = await mongoose.startSession();

  try {
    console.log(1);

    session.startTransaction();

    // if (ge.idLineaTipoMercaderia == null) {
    const newCliente = await mPublicacion.aggregate([
      {
        $sort: {
          fechaPublicacion: -1,
          createdAt: -1,
        },
      },
    ]);
    //finalizando
    console.log(2);
    await session.commitTransaction();

    //session.endSession();
    console.log('-->Session ACABADO con commitTransaction <---', newCliente);

    // return true;
    return newCliente;
  } catch (error) {
    console.log(666);
    await session.abortTransaction();

    throw Error('Error newCliente ::| ' + error);
  } finally {
    console.log('terminando_0');
    session.endSession();
    console.log('terminando_1');
  }
};

export const listar_MisPublicaciones = async (preto) => {
  console.log(`***********servi*******************`);
  console.log(`//-->//--> listar_MisPublicaciones <--//<--//`);
  console.log(`*********************************`);
  const ge = preto.elJson;
  console.log('ge:', ge);
  const session = await mongoose.startSession();

  try {
    console.log(1);

    session.startTransaction();
    //OBTENER EL NUMERO CORRELATIVO de la SERIE X-

    // if (ge.idLineaTipoMercaderia == null) {
    const newCliente = await mPublicacion.aggregate([
      {
        $match: {
          idCliente: new mongoose.Types.ObjectId(ge.idCliente),
        },
      },
      {
        $sort: { fechaPublicacion: -1, createdAt: -1 },
      },
    ]);
    //finalizando
    console.log(2);
    await session.commitTransaction();

    //session.endSession();
    console.log('-->Session ACABADO con commitTransaction <---', newCliente);

    // return true;
    return newCliente;
  } catch (error) {
    console.log(666);
    await session.abortTransaction();

    throw Error('Error newCliente ::| ' + error);
  } finally {
    console.log('terminando_0');
    session.endSession();
    console.log('terminando_1');
  }
};
