import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Angular-NodeJs");
    console.log("db connect");
  } catch (error) {
    console.log(error);
  }
};
