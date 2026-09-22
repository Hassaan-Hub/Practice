const userModel = require("../../models/register.model");
const bcrypt = require('bcrypt')

const login = async (req, res) => {
    const { email, password } = req.body;

    const existingUser = await userModel.findOne({ email })

    const loggedIn = await bcrypt.compare(password, existingUser.password)

    const isLoggedInUser = await userModel.findById(existingUser._id)

    res.status(201).json({
        status: 201,
        message: "user is login successfully",
        isLoggedInUser
    })
}

module.exports = login