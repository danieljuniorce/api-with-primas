import jwt from "jsonwebtoken";
import { config } from "../../config/config";
import { IJwtAuthentication } from "../../Core/Interfaces";

class Auth {
  public async attempt({ email, password }: IJwtAuthentication) {
    return await jwt.sign({ email, password }, config.SECRET, {
      expiresIn: 24000,
    });
  }

  public async logout() {}
}

export default new Auth();
