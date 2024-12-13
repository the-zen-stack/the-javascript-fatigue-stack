import { readFile } from 'fs/promises';
import { CurlyBracesRenderer } from '../../core/curly-braces-renderer.core.ts';
import { join } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { type ViewData } from './posts.types.ts';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class PostsView extends CurlyBracesRenderer {
  private layoutCache: string | null = null;

  async getLayout(layoutFileName: string): Promise<string> {
    if (!this.layoutCache) {
      this.layoutCache = await readFile(join(__dirname, layoutFileName), 'utf8');
    }
    return this.layoutCache;
  }

  async renderPosts(data: ViewData): Promise<string> {
    const layout = await this.getLayout(`./html/posts.layout.html`);
    const content = await readFile(join(__dirname, `./html/posts.page.html`), 'utf8');

    let html = content;
    const postTemplate = await readFile(join(__dirname, './html/post.component.html'), 'utf8');
    const postsHtml = data.posts.map((post) => this.renderTemplate(postTemplate, post)).join('');
    html = this.renderTemplate(html, { posts: postsHtml });

    return this.renderTemplate(layout, {
      content: html,
      title: 'Posts',
      page: 'posts',
    });
  }

  async renderNewPostForm(): Promise<string> {
    const layout = await this.getLayout('./html/posts.layout.html');
    const content = await readFile(join(__dirname, `./html/new-post.page.html`), 'utf8');

    return this.renderTemplate(layout, {
      content,
      title: 'New Post',
      page: 'new-post',
    });
  }
}
