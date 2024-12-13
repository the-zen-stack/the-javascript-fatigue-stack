import type { IncomingMessage, ServerResponse } from "node:http";
import { HomeController } from "./home.controller.ts";

export const homeController = new HomeController();

export const homeRoutes: Record<
    string,
    (req: IncomingMessage, res: ServerResponse) => Promise<void>
> = {
    "GET /": (req, res) => homeController.home(req, res)
};
