import { asyncHandler } from "../utils/asyncHandler.js"



const registerUser = asyncHandler(async (req, res) => {
    //   get user details from frontend
    //   add the validaction
    // check if user is already exists  through the username and email 
    // check the images check for avtar
    // upload them to cloudenary  , avatar
    // check the response from the cloudinary
    // create user object - create entry in Db
    // remove password and refresh_token feilds from the response 
    // check for user creation 
    // return res
    
    const { fullname, email, username, password } = req.body
    console.log("email :" , email)
    
    
})


export {registerUser} 