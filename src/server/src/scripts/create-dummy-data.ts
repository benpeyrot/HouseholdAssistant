import { UserModel } from "../database/users/users.model";
import { connect, disconnect } from '../database/database'

(async () => {
  connect();

  const users = [
    {
      firstName: "Bénédicte",
      lastName: "Peyrot",
      userName: "Ben",
      email: "peyrot.benedicte@gmail.com",
      password: "",
    },
    {
      firstName: "Luc",
      lastName: "Le Rumeur",
      userName: "Luc",
      email: "luc.lerumeur@gmail.com",
      password: "",
    }
  ];

  try {
    for (const user of users) {
      await UserModel.create(user);
      console.log(`Created user ${user.firstName} ${user.lastName}`);
    }
    disconnect();

  } catch (error) {
    console.log(error);
  }

})();