import express from "express";
import Database from "./Database/database.js";

import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());

// ========= ENV VARIABLE'S =========
dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// database connection
const db = new Database(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.connect().catch((err) =>
  console.error("❌ Error connecting to database:", err)
);

// database disconnection
process.on("SIGINT", async () => {
  try {
    await db.disconnect();
    console.log("Disconnected from database.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

app.listen(PORT, () => {
  console.log("Backend server is running");
});
