import mongoose from "mongoose";

// Cache connection to reuse across requests in serverless environments
interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// eslint-disable-next-line prefer-const
let cached: CachedConnection = { conn: null, promise: null };

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    // Return existing connection if already established
    if (cached.conn) {
      console.log("Using existing database connection");
      return cached.conn;
    }

    // If connection is being established, wait for it
    if (cached.promise) {
      const db = await cached.promise;
      console.log("Database connection established (from promise)");
      return db;
    }

    // Create new connection
    cached.promise = mongoose.connect(process.env.MONGODB_URI);
    cached.conn = await cached.promise;
    console.log("Database is connected");
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    cached.conn = null;
    console.error("Database connection error:", error);
    throw error;
  }
};

export default connectDB;