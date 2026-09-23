const userModel = require("../../../models/register.model");
const bcrypt = require('bcrypt')

const signup = async (req, res) => {
    const { username, email, password, phone } = req.body;


    const hashPassword = await bcrypt.hash(password, 10)

    await userModel.create({
        username,
        email,
        password: hashPassword,
        phone
    })

    res.status(201).json({
        status: 201,
        message: "user Created successfully",
    })
}

module.exports = signup