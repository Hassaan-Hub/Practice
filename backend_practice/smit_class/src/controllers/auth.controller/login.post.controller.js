const userModel = require("../../../models/register.model");
const bcrypt = require('bcrypt')

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await userModel.findOne({ email })
        if (existingUser !== email) {
            return res.status(400).json({
                status: 400,
                message: "user email invalid",
            })
        }

        const loggedIn = await bcrypt.compare(password, existingUser.password)

        if (!loggedIn) {
            return res.status(400).json({
                status: 400,
                message: "user password invalid",
            })
        }
        
        const isLoggedInUser = await userModel.findById(existingUser._id).select("-password")

        return res.status(201).json({
            status: 201,
            message: "user is login successfully",
            isLoggedInUser
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "internal server error",
        })
    }
}

module.exports = login