const expressAsyncHandler = require("express-async-handler");

const loginUser=asyncHandler(async(req,res) => {
    res.json({message:"login user"})
})