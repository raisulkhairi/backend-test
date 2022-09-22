const mongoose = require("mongoose");
require("dotenv").config();

module.exports = mongoose
  .connect(process.env.CONNECT_DB)
  .then(() => console.log("Database connected successfully"))
  .catch(() => {
    console.log("Database is not connected");
  });

// const mongoDB = () => {F
//   try {
//     main().catch((err) => console.log(err));
//     async function main() {
//       await mongoose.connect("mongodb://localhost:27017");
//       console.log("DB CONNECTED");
//     }
//   } catch (error) {
//     console.log("connect db fail");
//   }
// };

// module.exports = mongoDB;
