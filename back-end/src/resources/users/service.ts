import dbClient from "../../utils/dbClient";
import { hash } from "bcrypt";

export type NewUser = {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar: string;
  counsellor_ID: number;
};

const createWithHash = async (newUser: NewUser) => {
  const plainTextPassword = newUser.password;

  const hashedPassword = await hash(plainTextPassword, 10);

  const savedUser = await dbClient.user.create({
    data: { ...newUser, password: hashedPassword },
  });

  return savedUser;
};

const userClient = {
  ...dbClient.user,
  createWithHash,
};

export default userClient;
