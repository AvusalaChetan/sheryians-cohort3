import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is not defined in the environment variables");
  process.exit(1);
}
if (!process.env.PORT) {
  console.error("PORT is not defined in the environment variables");
  process.exit(1);
}

const config = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/urlShortener",
};

export default config;
