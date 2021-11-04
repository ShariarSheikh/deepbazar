const AuthModel = require("../../../server/models/UserSchema");

//create new users
export default async (req, res) => {
  const { name, email, number, password } = req.body;

  const profileImg = "";
  const imagesFileName = "";

  const accountType = {
    user: process.env.ACCOUNT_TYPE_USER,
    isAdmin: process.env.ACCOUNT_TYPE_IS_ADMIN,
  };

  try {
    if (!name || !email || !password || !number) {
      return res.status(401).json({
        success: false,
        message: "Please provide name mobile email and password",
      });
    }

    const user = await AuthModel.create({
      name,
      email,
      number,
      password,
      profileImg,
      imagesFileName,
      accountType,
    });
    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//create jsonwebtoken
const sendToken = async (user, statusCode, res) => {
  const token = await user.getSignedToken();
  res.status(statusCode).json({ success: true, token: token });
};
