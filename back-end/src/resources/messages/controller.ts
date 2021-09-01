import { Request, Response } from "express";
import dbClient from "../../utils/dbClient";

// export type Message = {
//   date: string;
//   content: string;
//   user_ID: number;
//   counsellor_ID: number;
// };

export const getMessagesByUserId = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const messages = await dbClient.message.findMany({
      where: {
        user_ID: id,
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
