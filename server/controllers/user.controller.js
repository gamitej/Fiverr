import User from "../model/user.model.js";

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (req.userId !== user._id.toString()) {
      return res.status(403).json("You can delete only your account");
    }
    await User.findByIdAndDelete(req.params.id);

    return res.status(200).json("Your account has been deleted");
  } catch (error) {
    return res.status(500).json("Something went wrong!");
  }
};
