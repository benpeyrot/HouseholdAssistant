import { Document, Model } from "mongoose";

export interface IRole {
  name: string
}

// which includes our fields, plus the other elements of a standard Mongoose Document
export interface IRoleDocument extends IRole, Document {}

// represents a standard Mongoose Model, containing documents of our IRoleDocument type.
export interface IRoleModel extends Model<IRoleDocument> {
  findOneOrCreate: (
    { name }
    : { name: string; }
  ) => Promise<IRoleDocument[]>;
}