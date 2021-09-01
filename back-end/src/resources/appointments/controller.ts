import { Request, Response } from "express";
import dbClient from "../../utils/dbClient";
//model Appointment {
//   id Int @id @default(autoincrement())
//   date DateTime @db.Date
//   time DateTime @db.Time()
//   user_ID Int
//   counsellor_ID Int
//   user User @relation(fields: [user_ID], references: [id], onDelete: Cascade)
//   counsellor Counsellor @relation(fields: [counsellor_ID], references: [id], onDelete: Cascade)
// }

export const getUsersAppointments = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const usersAppointments = await dbClient.appointment.findMany({
      where: {
        user_ID: id,
      },
    });
    res.json({ data: usersAppointments });
  } catch (error) {
    res.json({ error });
  }
};

export const updateAppointment = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updateInfo = req.body;

  try {
    const existAppointment = await dbClient.appointment.findUnique({
      where: {
        id,
      },
    });
    const updatedAppointment = await dbClient.counsellor.update({
      where: {
        id,
      },
      data: {
        ...existAppointment,
        ...updateInfo,
      },
    });
    res.json({ data: updatedAppointment });
  } catch (error) {
    res.json({ error: `Appointment with ID ${id} doesn't exict` });
  }
};

export const addAppointment = async (req: Request, res: Response) => {
  const newAppointment = req.body;

  try {
    const created = await dbClient.appointment.create({
      data: {
        ...newAppointment,
      },
    });
    res.json({ data: created });
  } catch (error) {
    res.json({ error });
  }
};
