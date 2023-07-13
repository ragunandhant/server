import mongoose from 'mongoose';





const Connection = () => {


    const MONGODB_URI = 'mongodb+srv://ragunanthan:sece2021@cluster0.swyryga.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })
    

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;