import { HomePage } from "./home.view.ts";

export class HomeController {
    async home(req, res) {

        const html = HomePage();

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    }
}