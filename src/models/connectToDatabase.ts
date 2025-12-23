import mongoose from "mongoose";

import { env } from "@/env";

const cached = global.mongooseConnection || { conn: null, promise: null };

async function connectToDatabase() {
  const MONGODB_URI = env.MONGODB_URI;

  if (cached.conn) return;

  if (!cached.promise) {
    console.log("Starting to connect to database");
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;

  global.mongooseConnection = cached;
}

export default connectToDatabase;
