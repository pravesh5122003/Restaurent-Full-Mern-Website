import jwt from "jsonwebtoken";

export const authSeller = (req, res, next) => {
  try {
    const { sellerToken } = req.cookies;

    // 1. Check if the sellerToken exists
    if (!sellerToken) {
      return res.status(401).json({ message: "Unauthorized: No token", success: false });
    }

    // 2. Verify the token
    const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);

    // 3. Check if the decoded email matches the seller email
    if (decoded.email !== process.env.SELLER_EMAIL) {
      return res.status(403).json({ message: "Forbidden: Invalid Seller", success: false });
    }

    // 4. If everything is fine, move to next middleware
    req.seller = decoded; // Optional: Attach decoded data to request
    next();
    
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(401).json({ message: "Unauthorized: Invalid token", success: false });
  }
};
