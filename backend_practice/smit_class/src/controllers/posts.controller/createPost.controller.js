const post = require("../../../models/post.model");
const uploadFile = require("../../services/storage.service")

const createPost = async (req, res) => {
    const { caption } = req.body;
    const fileData = await uploadFile(req.file.buffer)

    const postData = await post.create({
        image: fileData,
        caption
    })

    return res.status(201).json({
        status: 201,
        message: "post created successfully",
        postData
    })
}

module.exports = createPost