const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_CONFIG)

    console.log('connected to DB');
}

module.exports = connectDB;