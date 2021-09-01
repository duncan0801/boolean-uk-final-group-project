"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAppointment = exports.updateAppointment = exports.getUsersAppointments = void 0;
const dbClient_1 = __importDefault(require("../../utils/dbClient"));
//model Appointment {
//   id Int @id @default(autoincrement())
//   date DateTime @db.Date
//   time DateTime @db.Time()
//   user_ID Int
//   counsellor_ID Int
//   user User @relation(fields: [user_ID], references: [id], onDelete: Cascade)
//   counsellor Counsellor @relation(fields: [counsellor_ID], references: [id], onDelete: Cascade)
// }
const getUsersAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const usersAppointments = yield dbClient_1.default.appointment.findMany({
            where: {
                user_ID: id,
            },
        });
        res.json({ data: usersAppointments });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.getUsersAppointments = getUsersAppointments;
const updateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const updateInfo = req.body;
    try {
        const existAppointment = yield dbClient_1.default.appointment.findUnique({
            where: {
                id,
            },
        });
        const updatedAppointment = yield dbClient_1.default.counsellor.update({
            where: {
                id,
            },
            data: Object.assign(Object.assign({}, existAppointment), updateInfo),
        });
        res.json({ data: updatedAppointment });
    }
    catch (error) {
        res.json({ error: `Appointment with ID ${id} doesn't exict` });
    }
});
exports.updateAppointment = updateAppointment;
const addAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = req.body;
    try {
        const created = yield dbClient_1.default.appointment.create({
            data: Object.assign({}, newAppointment),
        });
        res.json({ data: created });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.addAppointment = addAppointment;
