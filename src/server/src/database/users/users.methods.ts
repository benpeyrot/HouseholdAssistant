import * as bcrypt from "bcryptjs";
import { Document } from "mongoose";
import { IUserDocument } from "./users.types";

/* Instance methods refer to particular instances of the model. 
For example, if we had a particular user called Joe Bloggs, 
we could perform operations based on any of the fields related 
to his document in the database. */

export async function setPassword(pass: string) {
  const hash = await bcrypt.hash(pass, 10);
  this.password = hash;
}

export async function checkPassword(pass: string): Promise<boolean> {
  return bcrypt.compare(pass, this.password);
}

export async function setLastUpdateDate(
  this: IUserDocument
): Promise<void> {
  const now = new Date();
  if (!this.lastUpdateDate || this.lastUpdateDate < now) {
    this.lastUpdateDate = now;
    await this.save();
  }
}

export async function sameLastName(this: IUserDocument): Promise<Document[]> {
  return this.$model("user").find({ lastName: this.lastName });
}