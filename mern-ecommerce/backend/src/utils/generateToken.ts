// import jwt from "jsonwebtoken";

// const generateToken = (userId: string) => {
//   return jwt.sign({ userId }, process.env.JWT_SECRET as string, {
//     expiresIn: "1h",
//   });
// };

// export default generateToken;

// const generateToken = (userId: string) => {
//   console.log("JWT_SECRET:", process.env.JWT_SECRET_KEY); // Debugging output

//   if (!process.env.JWT_SECRET_KEY) {
//     throw new Error("JWT_SECRET is not defined"); // Throw an explicit error
//   }

//   return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
// };

import jwt from "jsonwebtoken";

const generateTokens = (userId: string) => {
  if (!process.env.JWT_SECRET || !process.env.JWT_REFRESH_SECRET) {
    throw new Error("Missing JWT_SECRET or JWT_REFRESH_SECRET in environment variables");
  }

  const accessToken = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "15m" });

  const refreshToken = jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });

  return { accessToken, refreshToken };
};

export default generateTokens;



