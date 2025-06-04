import bcryptjs from "bcryptjs";
import User from "../models/User";
import generateToken from "../utils/generateToken";
import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { name, email, password } = req.body;

  try {
    //Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "user already exists" });

    //Hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    //Create a new user
    const newUser = new User({ name, email, password: hashedPassword });

    // Save the new user to the database
    await newUser.save();

    //Generate JWT Token
    //const token = generateToken(newUser._id);


  // Generate tokens
  const { accessToken, refreshToken } = generateToken(newUser._id);

  // Set HTTP-Only Refresh Token Cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true, // Prevent client-side access
    secure: true, // Send only over HTTPS
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

   // res.status(201).json({ message: "User register Sucessfully", token });
    res.json({ accessToken });
  // } catch (error) {
  //   console.error("Error during user registration:", error); // Log the error
  //   res.status(500).json({ message: "Server error" });
  // }
  } catch (error) {
    console.error("Error during user registration:", error);
  
    if (error instanceof Error) {
      res.status(500).json({ message: "Server error", error: error.message });
    } else {
      res.status(500).json({ message: "Server error", error: "Unknown error occurred" });
    }
  }  
};

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  try {
    //Find the email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    //Compare the password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials bg" });
    }
    //Generate Token
    const token = generateToken(user._id);

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const refreshAccessToken = async (req: Request, res: Response): Promise<Response> => {
  const refreshToken = req.cookies.refreshToken; // Get refresh token from cookies

  if (!refreshToken) {
    return res.status(401).json({ error: "Refresh token missing" });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!) as jwt.JwtPayload;

    if (!decoded || !decoded.id) {
      return res.status(403).json({ error: "Invalid refresh token" });
    }

    // Generate new tokens
    const { accessToken, refreshToken: newRefreshToken } = generateToken(decoded.id as string);

    // Update refresh token in cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.json({ accessToken }); // Send new access token to client
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired refresh token" });
  }
};


