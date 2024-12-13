export class CurlyBracesRenderer {
  renderTemplate(template: string, data?: Record<string, unknown>): string {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => String(data?.[key] ?? ''));
  }
}
