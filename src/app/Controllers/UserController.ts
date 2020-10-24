import Auth from "../Middleware/Auth";
import { IControllers } from "../../Core/Interfaces";

export default class UserController {
  public async index({ res, req }: IControllers) {}
  public async show({ res, req }: IControllers) {}
}
