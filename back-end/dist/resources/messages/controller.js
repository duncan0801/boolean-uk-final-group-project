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
exports.addMessage = exports.getMessagesByUserId = void 0;
const dbClient_1 = __importDefault(require("../../utils/dbClient"));
// export type Message = {
//   date: string;
//   content: string;
//   user_ID: number;
//   counsellor_ID: number;
// };
const getMessagesByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield dbClient_1.default.message.findMany({
            where: {
                user_ID: req.currentUserId,
            },
        });
        res.json({ data: messages });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.getMessagesByUserId = getMessagesByUserId;
const addMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newMessage = req.body;
    try {
        const createdMessage = dbClient_1.default.message.create({
            data: Object.assign({}, newMessage),
        });
        res.json({ data: createdMessage });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.addMessage = addMessage;
