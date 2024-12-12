const fs = require('fs').promises;
const path = require('path');

class View {
  constructor() {
    this.layoutCache = null;
  }

  async getLayout() {
    if (!this.layoutCache) {
      this.layoutCache = await fs.readFile(path.join(__dirname, '../views/layout.html'), 'utf8');
    }
    return this.layoutCache;
  }

  async render(template, data = {}) {
    const layout = await this.getLayout();
    const content = await fs.readFile(
      path.join(__dirname, `../views/${template}.html`),
      'utf8'
    );

    let html = content;
    if (data.posts) {
      const postTemplate = await fs.readFile(
        path.join(__dirname, '../views/partials/post.html'),
        'utf8'
      );
      const postsHtml = data.posts
        .map(post => this.renderTemplate(postTemplate, post))
        .join('');
      html = this.renderTemplate(html, { posts: postsHtml });
    }

    // Add page name for CSS and JS loading
    const pageName = template.replace('/', '-');
    
    return this.renderTemplate(layout, {
      content: html,
      title: template.charAt(0).toUpperCase() + template.slice(1),
      page: pageName
    });
  }

  renderTemplate(template, data) {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] || '');
  }
}

module.exports = new View();