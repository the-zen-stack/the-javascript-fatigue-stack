import { test } from 'node:test';
import assert from 'node:assert';
import view from '../view.js';

test('View', async (t) => {
  await t.test('renderTemplate replaces variables correctly', () => {
    const template = 'Hello {{name}}!';
    const data = { name: 'World' };
    const result = view.renderTemplate(template, data);
    assert.equal(result, 'Hello World!');
  });

  await t.test('renderTemplate handles missing variables', () => {
    const template = 'Hello {{name}}!';
    const data = {};
    const result = view.renderTemplate(template, data);
    assert.equal(result, 'Hello !');
  });
});