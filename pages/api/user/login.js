import { connectDB } from "../../../server/config/db";
import AuthModel from "../../../server/models/UserSchema";


connectDB();

export default async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "Please provide email and password" });
    } else {
      const user = await AuthModel.findOne({ email }).select("+password");
      if (!user) {
        res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }

      const isMatch = await user.matchPasswords(password);

      if (!isMatch) {
        res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }

      sendToken(user, 200, res);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//create jsonwebtoken
const sendToken = async (user, statusCode, res) => {
  const token = await user.getSignedToken();
  res.status(statusCode).json({ success: true, token: token });
};
