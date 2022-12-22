const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;
try {
  mongoose.set("strictQuery", true);
  mongoose.connect(dbURL);
  console.log("mongoose atlas is connected");
} catch (error) {
  console.log(error.message);
  process.exit(1);
}
