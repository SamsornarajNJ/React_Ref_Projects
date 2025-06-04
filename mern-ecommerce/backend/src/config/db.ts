import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect("mongodb+srv://samacc3010:United_states%2410@cluster0.dx1nqlt.mongodb.net/mern-ecommerce?retryWrites=true&w=majority");
    //const conn = await mongoose.connect("mongodb+srv://samacc3010:United_states%2410@cluster0.dx1nqlt.mongodb.net/mern-ecommerce?retryWrites=true&w=majority");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    if (err instanceof Error) {
        // Now 'err' is typed as 'Error' and you can safely access 'message'
        console.error(`Error: ${err.message}`);
      } else {
        // If the error is not an instance of Error (unlikely, but safe)
        console.error('An unknown error occurred');
      }
      process.exit(1); // Exit process with failure (otherwards) // Stop the server if connection fails
  }
};

export default connectDB;
