export default async function access(req, res) {
  const { email, password } = req.body;

  if (email !== "deepBazar@gmail.com") {
    return res.status(401).json({ error: "Enter a correct email" });
  }
  if (password !== "123456") {
    return res.status(401).json({ error: "password is wrong" });
  }

  res.status(200).json({
    data: {
      name: "Shariar",
      email: "shariar.dev@gmail.com",
      profileImg:
        "https://res.cloudinary.com/dthzw7gmp/image/upload/v1658795331/165830033613645356_zob9je.jpg",
      tokens: {
        accessTokens:
          "29893nrc3ur8vc3ucn837rvbnp9wicmewc3n98efj9384jfc93849fj3948fj398hf983jc398hf",
      },
    },
  });
}
