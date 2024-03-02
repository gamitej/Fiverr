import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res) => {
  try {
    const token = req.cookies.accessToken;
    const user = await User.findById(req.params.id);
    if (!token) return res.status(404).json("You are not authenticated");

    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
      if (payload.id !== user._id.toString()) {
        return res.status(403).json("You can delete only your account");
      }
      await User.findByIdAndDelete(req.params.id);
    });

    return res.status(200).json("Your account has been deleted");
  } catch (error) {
    return res.status(500).json("Something went wrong!");
  }
};
