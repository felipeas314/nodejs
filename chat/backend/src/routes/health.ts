import { Request, Response, Router } from "express";
import HealthController from "../controller/health-controller";

export default (router: Router): void => {

  const healthController = new HealthController()

  router.get('/health', healthController.handle)
}