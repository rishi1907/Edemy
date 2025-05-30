import mongoose from "mongoose";

//connect to MongoDB database

const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=> console.log('Database connnected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}

export default connectDB