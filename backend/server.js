import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// Error Handler
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

connectDB(); // Connect to DB

const app = express();

// Body Parse Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie Parse Middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Using Error Handlers
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
