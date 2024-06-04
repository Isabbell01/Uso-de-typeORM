import { Request, Response } from "express";
import { User } from "../entities/user";

export const createUser = (req: Request, res: Response) => {
  const { nombre, apellido, edad } = req.body;

  const user = new User();
  user.nombre = nombre;
  user.apellido = apellido;

  User.save(user);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();

  return res.json(users);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findOneBy({ id: parseInt(id) });
    if (!user) return res.status(404).json({ message: "Not user found" });

    await User.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await User.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "User not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
