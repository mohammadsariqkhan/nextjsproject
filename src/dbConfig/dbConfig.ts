import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = await mongoose.connection
        connection.on('connection',() => {
            console.log('connected');
            
        })
        connection.on('error',(err) => {
            console.log(`err ${err}`);
            process.exit(1);
            
        })

    } catch(err){
            console.log('somthing wrong');
            
    }
}

