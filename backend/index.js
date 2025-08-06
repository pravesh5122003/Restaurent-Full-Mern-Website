import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
dotenv.config();
import userRoutes from "./routes/user.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import addressRoutes from "./routes/address.routes.js";
import orderRoutes from "./routes/order.routes.js";
import { connectCloudinary } from "./config/cloudinary.js";
import { stripeWebhooks } from "./controllers/order.controller.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // 👈 your frontend origin
  credentials: true                // 👈 allows sending cookies (JWT)
}));


await connectCloudinary();
// allow multiple origins
const allowedOrigins = ["http://localhost:5173","http://localhost:5174"];

app.post("/stripe", express.raw({type: "application/json"}),stripeWebhooks);
//middlewares
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Api endpoints
app.use("/images", express.static("uploads"));
app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/order", orderRoutes);

const PORT = process.env.PORT || 4000;
import http from "http";
import { Server } from "socket.io";

// Create HTTP server
const server = http.createServer(app);

// Setup socket.io server
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true
  }
});

// Save io to use in controllers
app.set("io", io);

io.on("connection", (socket) => {
  console.log("Seller connected:", socket.id);
});

server.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server running on port ${PORT}`);
});
