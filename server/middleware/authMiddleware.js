import { UnauthenticatedError, UnauthorizedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/token.js";

// trước do cái async nên khi throw lỗi thì crash app luôn
export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token){
    throw new UnauthenticatedError('authentication invalid');
  }
  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid');
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if(!roles.includes(req.user.role)){
      throw new UnauthorizedError('Unauthorized to access this route');
    }
    next();
  }
}