const userModel = require("../../models/register.model");

const login = async (req, res) => {
    const { email, password } = req.body;

    

    await userModel.findById({})
}