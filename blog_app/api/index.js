import cookieParser from "cookie-parser";
import express from "express";
import authRoutes from "./routers/auth.js";
import postRoutes from "./routers/posts.js";
import userRoutes from "./routers/users.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
   console.log("Connected!");
});
