import { Response, Request } from "express";

interface IControllers {
  req: Request;
  res: Response;
}

interface IJwtAuthentication {
  email: string;
  password: string;
}

export { IJwtAuthentication, IControllers };
