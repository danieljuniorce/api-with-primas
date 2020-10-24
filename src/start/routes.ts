import { Router } from "express";

const Routes = Router();

Routes.get("/", async (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

export default Routes;
