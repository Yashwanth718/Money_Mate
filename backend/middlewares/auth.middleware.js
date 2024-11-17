import jwt from "jsonwebtoken"

const authMiddleware = (req, res, next) => {
  const authHeader = req?.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json("you need to signin");
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    req.userId = decoded.userId;
  } catch (error) {
    return res.status(403).json("you need to signin");
  }
  next();
};

export {authMiddleware}