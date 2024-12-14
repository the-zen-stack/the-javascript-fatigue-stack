import type { IncomingMessage, ServerResponse } from "node:http";
import { HomePage } from "./home.view.ts";

export class HomeController {
    async home(req: IncomingMessage, res: ServerResponse) {

        const html = HomePage();

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    }
}