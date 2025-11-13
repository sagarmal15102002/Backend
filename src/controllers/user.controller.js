import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

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
    
    const { fullName, email, username, password } = req.body
    console.log("email :", email)
    console.log("username :" , fullName);

    // if (username === "") {
    //     throw new ApiError(400, "Fullname is required");
    // }

    // second and advance option

    if (
        [fullName , email , username , password].some((fields) => fields?.trim() === "")
    ) {
        throw new ApiError(400, "All Feilds Are Required");
    }

    //call the database that user is already exists or not

   const existedUser =  User.find({
        $or : [{ username } , { email }]
    })

})

if (existedUser) {
    throw new ApiError(409 , "User with email or username already Exists")
}

// check the images

const avatarLocalPath = req.files?.avatar[0]?.path;
const coverImageLocalPath = req.files?.coverImage[0]?.path;

if (!avatarLocalPath){
    throw new ApiError(400 , "Avtar files is required")
}


// upload image on cloudinary

const avtar = await uploadOnCloudinary(avatarLocalPath)
const coverImage = await uploadOnCloudinary(coverImageLocalPath)

if (!avtar) {
    throw new ApiError(400  , "Avatar file is rewuired")
    
}

// enter data into the dtaabase 
 const user =await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username : username.toLoweCase()
 })

const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
)


if (!createdUser) {
    throw new ApiError(500 , "Something went wrong while registring the user")
}


return res.status(201).json(
    new ApiResponse(200 , createdUser , "User Registered Successfully !")
)

export {registerUser} 