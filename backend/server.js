import express from "express";
import morgan from "morgan";
import cors from "cors";
import downloadRouter from "./routes/download.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Media Downloader Backend is running 🚀" });
});

app.use("/api", downloadRouter);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});