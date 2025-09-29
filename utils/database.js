import mongoose from 'mongoose';

let isConnected = false; // to track the database

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log("Connection to the database has been established")
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log("database connection successful !!")
    }
    catch (error) {
        console.log(error)
    }
}

