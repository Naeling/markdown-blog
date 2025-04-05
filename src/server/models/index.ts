import connectToDatabase from "./connectToDatabase";
export * from "./Post";

try {
  await connectToDatabase();
  console.log("Successfully connected to database");
} catch (error) {
  console.log(`Database connection failed with error: ${error}`);
}
