import mongoose from 'mongoose';

export const CONNECTION_URL = 'mongodb+srv://presto:presto123@cluster0.4yfbt.mongodb.net/almacen_bd2?retryWrites=true&w=majority';

// export default connect = async () => {
export async function connect() {
  try {
    await mongoose.connect(CONNECTION_URL);
    console.log('>>> BD on line: ', new Date());
  } catch (error) {
    console.log('Algo salio mal al conectar la BD.');
    console.log(error);
  }
}
