import * as Mongoose from 'mongoose';
import dbConfig from '../config/db.config';

let database: Mongoose.Connection;

export const connect = () => {

  const uri = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;

  if (database) {
    return;
  }

  Mongoose.connect(uri);

  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  })
}

export const disconnect = () => {

  if (!database) {
    return;
  }

  Mongoose.disconnect();
}