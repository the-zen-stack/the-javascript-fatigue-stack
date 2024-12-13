import { Footer } from "../../components/footer.ts";
import { Header } from "../../components/header.ts";

export const HomePage = (): string => /*html*/ `<!DOCTYPE html>
<html>
<head>
  <title>Home page</title>
  <link rel="stylesheet" href="/static/css/base.css">
</head>
<body>
  ${Header()}

  <main class="container">
    hello world
  </main>

  ${Footer()}
</body>
</html>`;
