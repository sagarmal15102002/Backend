import mongoose, { Schema } from "mongoose";


const videoSchema = new Schema(

    {
        videoFile: {
            type: String,    //cladunary url aa se 
            required: true
        },
        thumbnail: {
            type: String
        }
        
 }













    ,{
        timestamps: true
    }
);





export const Video = mongoose.model("Video" , videoSchema)
