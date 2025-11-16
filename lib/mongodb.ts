import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        if(!process.env.MONGODB_URI){
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
       const db = await mongoose.connect(process.env.MONGODB_URI)
       console.log("Database is connected"); 
    }catch(error){
        console.error("Database connection error:", error);
        throw error;
    }
}

export default connectDB;