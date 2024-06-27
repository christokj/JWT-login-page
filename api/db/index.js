const mongoose = require('mongoose');
const MONGO_DB_URL = process.env.MONGO_DB_URL


mongoose.connect(MONGO_DB_URL).then(() => {
    console.log("DB connected successfully");
}).catch((err) => console.log(err));