import { Schema } from "mongoose";
import { findOneOrCreate } from "./roles.statics";

const RoleSchema = new Schema({
  name: String
})

RoleSchema.statics.findOneOrCreate = findOneOrCreate;

export default RoleSchema;
