import { Footer } from '../../../components/footer.ts';
import { Header } from '../../../components/header.ts';

type PostsLayoutProps = {
  title: string;
  content: string;
};

export const PostsPage = ({ title, content }: PostsLayoutProps) => /*html*/ `<!DOCTYPE html>
<html>
<head>
  <title>${title} - Blog</title>
  <link rel="stylesheet" href="/static/css/base.css">
</head>
<body>
  ${Header()}

  <main class="container">
    ${content}
  </main>

  ${Footer()}
</body>
</html>`;
