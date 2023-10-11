import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

export default function tokenValidator(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded) {
      return {
        isValid: true,
        ...decoded,
      };
    } else {
      return { isValid: false, error: "Token is required" };
    }
    //return { isValid: true, ...jwt.verify(token, JWT_SECRET) };
  } catch (e) {
    if (e.name === "TokenExpiredError") {
      return { isValid: false, error: "Token has already expired" };
    }
    if (e.name === "JsonWebTokenError") {
      return { isValid: false, error: "Token is required" };
    }
    throw e;
  }
}
