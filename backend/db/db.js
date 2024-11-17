import mongoose from "mongoose";

const connectToDB = async() => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URL)
    console.log("DB Connected!")
    console.log(connectionInstance.connection.name)
  } catch (error) {
    throw error
  }
}

export {connectToDB}