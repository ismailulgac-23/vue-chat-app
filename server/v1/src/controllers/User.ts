import { hashSync } from "bcryptjs";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { responseMessages } from "../constants/helpers";
import database from "../services/database";

export const registerUser = async (req: Request, res: Response) => {

  const { fullName, username, password } = req.body;

  if (!fullName || !username || !password) {
    return res.status(400).json(responseMessages.required);
  }

  try {

    const newPassword = hashSync(password, 12);

    const user = await database.user.create({
      data: {
        fullName,
        username,
        password: newPassword
      },
      select: {
        fullName: true,
        photoURL: true,
        userUUID: true,
        username: true
      }
    });

    const token = sign({ user: user }, process.env.JWT_SECRET_KEY!);

    return res.status(200).json({
      message: "You're registered",
      user: user,
      token: token
    });

  } catch (error: any) {
    console.log("error => ", error);
    if (error.message.includes("Unique") || error.message.includes("constraint")) {
      return res.status(400).json({
        error: "There is already a user with the username you entered!"
      });
    }
    return res.status(400).json(responseMessages.error);
  }

}