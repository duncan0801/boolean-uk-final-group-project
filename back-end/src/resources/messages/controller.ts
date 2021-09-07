import { User } from "@prisma/client";
import { Request, Response } from "express";
import dbClient from "../../utils/dbClient";

// export type Message = {
//   date: string;
//   content: string;
//   user_ID: number;
//   counsellor_ID: number;
// };

export const getMessagesByUserId = async (req: Request, res: Response) => {
  try {
    const messages = await dbClient.message.findMany({
      where: {
        user_ID: req.currentUserId,
      },
    });
    res.json({ data: messages });
  } catch (error) {
    res.json({ error });
  }
};

export const addMessage = async (req: Request, res: Response) => {
  const newMessage = req.body;

  try {
    const createdMessage = dbClient.message.create({
      data: {
        ...newMessage,
      },
    });
    res.json({ data: createdMessage });
  } catch (error) {
    res.json({ error });
  }
};
