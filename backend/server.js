import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Connection Error:", err));

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/files", fileRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
