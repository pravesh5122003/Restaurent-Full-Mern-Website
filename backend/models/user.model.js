

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    // ✅ Flexible cartItems object to support size-based keys
    cartItems: {
      type: Object, // Example: { "productId_M": { quantity: 1, size: "M" } }
      default: {},
    },
  },
  { minimize: false } // ✅ Ensures empty objects are stored correctly in MongoDB
);

const User = mongoose.model("User", userSchema);
export default User;
