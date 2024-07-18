const adminMiddleware = async (req, res, next) => {
  try {
    if (req.isAdmin) {
      next();
    } else {
      return res.status(401).json({ message: "User is not admin" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. invalid token" });
  }
};

export default adminMiddleware;
