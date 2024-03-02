import express from "express";
import Database from "./database/database.js";

import cors from "cors";
import dotenv from "dotenv";

import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import messageRoute from "./routes/message.route.js";
import conversationRoute from "./routes/conversation.route.js";

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

app.use("/api/gigs", gigRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/messages", messageRoute);
app.use("/api/conversations", conversationRoute);

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
