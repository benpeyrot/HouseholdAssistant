import { Schema } from "mongoose";
import { findOneOrCreate } from "./users.statics";
import { setLastUpdateDate, sameLastName } from "./users.methods";

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
  creationDate: {
    type: Date,
    default: new Date()
  },
  lastUpdateDate: {
    type: Date,
    default: new Date()
  }
 /*  roles: IRole[] */
})

// Duplicate the ID field.
UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

UserSchema.statics.findOneOrCreate = findOneOrCreate;

UserSchema.methods.setLastUpdateDate = setLastUpdateDate;
UserSchema.methods.sameLastName = sameLastName;

export default UserSchema;
