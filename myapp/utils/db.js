import mongoose from "mongoose";

const connection = {}

async function connect(){
    if(connection.isConnected){
        return;
    }
    if (mongoose.connection.length > 0){
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected === 1 ){
            return;
        }
        await mongoose.disconnect()
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState
}
async function disconnect(){
    if(connection.isConnected){
        if(process.env.MODE_ENV === 'production'){
            await mongoose.disconnect();
            connection.isConnected = false;
        }
    }
}

const db = {connection, disconnect};
export default db