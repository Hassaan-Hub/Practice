const userModel = require("../../../models/register.model");
const bcrypt = require('bcrypt')

const signup = async (req, res) => {
    const user = await userModel.find()

    res.status(200).json({
        status: 200,
        message: "user fetched successfully",
        user
    })
}

module.exports = signup