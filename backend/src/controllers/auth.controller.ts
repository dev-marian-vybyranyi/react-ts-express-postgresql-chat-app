import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  res.send("Login");
};

export const logout = (req: Request, res: Response) => {
  res.send("Logout");
};

export const signup = (req: Request, res: Response) => {
  res.send("Signup");
};