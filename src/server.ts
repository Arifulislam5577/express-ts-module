import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function startServer() {
  try {
    await mongoose.connect(config.PORT!);
    app.listen(config.PORT, () => {
      console.log(`App listening on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error");
  }
}

startServer();
