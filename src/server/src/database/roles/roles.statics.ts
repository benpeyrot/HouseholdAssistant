
import { IRoleDocument, IRoleModel } from "./roles.types";

/* Static methods are executed on the model itself, rather than on particular instances.
We can define static methods in their own file, using the model as the first argument, 
and later pass them into roles.schema.ts . */


export async function findOneOrCreate(
  roleId: string
): Promise<IRoleDocument> {
  const record = await this.findOne({ roleId });
  if (record) {
    return record;
  } else {
    return this.create({ roleId })
  }
}