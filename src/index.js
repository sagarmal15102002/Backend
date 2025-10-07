// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'

import express from 'express'
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path:'./env'
})




connectDB()  
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port : ${process.env.PORT}`);
            app.on("error", (error) => {
                console.log(`Error occurred: ${error}`);
            })
       }) 
    })
    .catch((err) => {
        console.log("Mongo Db connection failed !!!", err);
}) 




    










//  const app  = express()   
// (async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log('ERORR', error);
//             throw error
//         })


//         app.listen(process.env.PORT, () => {
//             console.log(`Server started at PORT ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR", error);
//         throw Error
        
//     }
// } )()
