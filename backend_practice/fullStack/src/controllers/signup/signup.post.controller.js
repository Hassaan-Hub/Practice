const userModel = require("../../models/register.model");

async function register(req, res) {
    const { username, email, password, number } = req.body;

    if (!username || !email || !password || !number){
        return res.status(401).json({
            status: 401,
            message: "All fields are required"
        })
    }

        const userData = await userModel.create({
            username,
            email,
            password,
            number
        })

    res.status(201).json({
        status: 201,
        message: "user registered succussfully",
        userData
    })
}


module.exports = {
    register
}