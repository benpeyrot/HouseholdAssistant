import { Document, Model } from "mongoose";
import { IRole } from "../roles/roles.types";

export interface IUser {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  creationDate: Date;
  lastUpdateDate: Date;
  roles: IRole[]
}

// which includes our fields, plus the other elements of a standard Mongoose Document
export interface IUserDocument extends IUser, Document {
  setLastUpdated: (this: IUserDocument) => Promise<void>;
  sameLastName: (this: IUserDocument) => Promise<Document[]>;
}

// represents a standard Mongoose Model, containing documents of our IUserDocument type.
export interface IUserModel extends Model<IUserDocument> {
  findOneOrCreate: (
    {
      firstName,
      lastName,
      userName,
      email,
      password
    }
      : {
        firstName: string;
        lastName: string;
        userName: string;
        email: string;
        password: string;
      }
  ) => Promise<IUserDocument[]>;
}