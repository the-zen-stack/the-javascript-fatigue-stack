export class CurlyBracesRenderer {
  renderTemplate(template: string, data: object): string {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => String(data?.[key] ?? ''));
  }
}
