import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
import { CompareHashData, HashData } from "../utils/Hash.js";

export const register = async (req, res) => {
  try {
    // check if user doesn't exist
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json("User already exists");
    }

    // create new user
    const hashPasswd = await HashData(req.body.password);
    const newUser = new User({ ...req.body, password: hashPasswd });

    await newUser.save();
    return res.status(201).json("User created successfully");
  } catch (error) {
    return res.status(500).json("Something went wrong!");
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username: username });
    if (!user) return res.status(404).json("User not found!");

    const isCorrectPasswd = await CompareHashData(password, user.password);
    if (!isCorrectPasswd) return res.status(400).json("wrong password!");

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password: userPasswd, ...userInfo } = user._doc;

    return res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "Login successful", userInfo });
  } catch (error) {
    return res.status(500).json("Something went wrong!");
  }
};

export const logout = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json("Something went wrong!");
  }
};
