import jwt from "jsonwebtoken";

export const isAuthincated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({
        message: " user not login",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.secrect_code);
    req.user = decode.userid;
    console.log(decode);
    next();
  } catch (error) {
    console.log(error);
  }
};
