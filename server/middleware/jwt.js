import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json("You are authenticated!");
  }

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) {
      return res.status(403).json("Token is not valid!");
    }

    req.userId = payload.id;
    req.isSeller = payload.isSeller;
  });

  next();
};
