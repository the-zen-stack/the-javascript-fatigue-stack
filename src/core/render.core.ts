import type { IncomingMessage, ServerResponse } from "http";

export function render(
	req: IncomingMessage,
	res: ServerResponse,
	html: string,
): void {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end(html);
}
