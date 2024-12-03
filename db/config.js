import mongoose from "mongoose";
const mongodb = process.env.MONGO;

const connectToMongobd = async () => {
  try {
    await mongoose.connect(mongodb);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongobd;
