const mongoose = require("mongoose");

const connection = {};

exports.connectDB = async () => {
  if (connection.isConnection) {
    return;
  }

  const db = await mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  connection.isConnection = db.connections[0].readyState;
  console.log("DB connected");
};
