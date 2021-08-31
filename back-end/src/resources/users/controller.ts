import { Request, Response } from "express";
import userClient from "./service";

export const getUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const user = await userClient.findUnique({
      where: {
        id,
      },
    });
    res.json({ data: user });
  } catch (error) {
    res.json({ error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  try {
    const savedUser = await userClient.createWithHash(newUser);
    res.json({ data: savedUser });
  } catch (error) {
    res.json({ error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updateInfo = req.body;

  try {
    const existUser = await userClient.findUnique({
      where: {
        id,
      },
    });
    const updated = await userClient.update({
      where: {
        id,
      },
      data: {
        ...existUser,
        ...updateInfo,
      },
    });
    res.json({ data: updated });
  } catch (error) {
    res.json({ error: `ID ${id} doesn't exict` });
  }
};
