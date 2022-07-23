
import { IUserDocument, /* IUserModel */ } from "./users.types";

/* Static methods are executed on the model itself, rather than on particular instances.
We can define static methods in their own file, using the model as the first argument, 
and later pass them into users.schema.ts . */


export async function findOneOrCreate(
  userId: string
): Promise<IUserDocument> {
  const record = await this.findOne({ userId });
  if (record) {
    return record;
  } else {
    return this.create({ userId })
  }
}