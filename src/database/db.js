const mongoose = require("mongoose");

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = connectDB;
