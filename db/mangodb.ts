import mongoose from "mongoose";

let isConnected=false

export const connectToMDB=async()=>{
     mongoose.set("strictQuery",true)
     if(isConnected){
        console.log("MongoDB is connected")
     }else{
        try {
            mongoose.connect(process.env.MONGODB_URI as string,{
                dbName:'api_interaction',
                // useNewUrlParser:true, 
                // useUnifiedTopology:true
            })
            isConnected=true
            console.log("MongoDB is connected")
        } catch (error) {
            console.log("Mongodb_ERROR: ",error)
        }
     }
}