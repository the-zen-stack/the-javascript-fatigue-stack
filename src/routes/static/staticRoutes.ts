import { IncomingMessage, ServerResponse } from 'node:http';
import { StaticFilesHandler } from '../../core/static-files-handler.core.ts';
import { fileURLToPath } from 'node:url';

export const staticHandler = new StaticFilesHandler();
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const staticRoutes: Record<
  string,
  (req: IncomingMessage, res: ServerResponse) => Promise<void>
> = staticHandler.serveFiles(
  ['/css/base.css', '/css/buttons.css', '/css/forms.css', '/css/colors.css', '/css/navigation.css'],
  { prefix: '/static', dirName: __dirname }
);
