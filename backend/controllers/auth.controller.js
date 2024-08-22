import { User } from "../models/user.model.js";
import bycrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export async function signup(req, res) {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    const existUserByEmail = await User.findOne({ email: email });

    if (existUserByEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }
    const existUserByUsername = await User.findOne({ username: username });

    if (existUserByUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: hashedPassword,
      username,
      image,
    });

    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();
    return res.status(201).json({
      success: true,
      message: "User created Successfuly",
      user: {
        ...newUser._doc,
        password: "",
      },
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Interanal server error" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields are required" });
    }

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid email or password" });
    }

    const isPasswordMatch = await bycrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid email or password" });
    }

    generateTokenAndSetCookie(user._id, res);
    res
      .status(200)
      .json({
        success: true,
        user: { ...user._doc, password: "" },
        message: "Login Successfuly",
      });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Interanal server error" });
  }
}

export async function logout(req, res) {
  try {
    res.clearCookie("jwt-netflix");
    return res.status(200).json({
      success: true,
      message: "Logged out Successfuly",
    });
  } catch (error) {
   
    res.status(500).json({ success: false, message: "Interanal server error" });
  }
}


export async function authCheck(req, res) {
  try {
    

    return res.status(200).json({
      success: true,
      user: req.user
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Interanal server error" });
  }
}