import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ViewData } from '../types/index.ts';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export class View {
  private layoutCache: string | null = null;

  async getLayout(): Promise<string> {
    if (!this.layoutCache) {
      this.layoutCache = await readFile(join(__dirname, '../views/layout.html'), 'utf8');
    }
    return this.layoutCache;
  }

  async render(template: string, data: ViewData = {}): Promise<string> {
    const layout = await this.getLayout();
    const content = await readFile(join(__dirname, `../views/${template}.html`), 'utf8');

    let html = content;
    if (data.posts) {
      const postTemplate = await readFile(join(__dirname, '../views/partials/post.html'), 'utf8');
      const postsHtml = data.posts.map((post) => this.renderTemplate(postTemplate, post)).join('');
      html = this.renderTemplate(html, { posts: postsHtml });
    }

    const pageName = template.replace('/', '-');

    return this.renderTemplate(layout, {
      content: html,
      title: template.charAt(0).toUpperCase() + template.slice(1),
      page: pageName,
    });
  }

  renderTemplate(template: string, data: Record<string, unknown>): string {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => String(data[key] ?? ''));
  }
}
