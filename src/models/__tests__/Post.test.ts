import { test } from 'node:test';
import assert from 'node:assert';
import PostModel from '../Post.js';

test('PostModel', async (t) => {
  await t.test('getAllPosts returns all posts', () => {
    const posts = PostModel.getAllPosts();
    assert.equal(posts.length, 2);
    assert.equal(posts[0].title, 'First Post');
  });

  await t.test('addPost creates a new post', () => {
    const newPost = PostModel.addPost('Test Post', 'Test Content');
    assert.equal(newPost.title, 'Test Post');
    assert.equal(newPost.content, 'Test Content');
    assert.equal(newPost.likes, 0);
    
    const posts = PostModel.getAllPosts();
    assert.equal(posts.length, 3);
  });

  await t.test('getPostById returns correct post', () => {
    const post = PostModel.getPostById(1);
    assert.ok(post);
    assert.equal(post.id, 1);
    assert.equal(post.title, 'First Post');
  });

  await t.test('getPostById returns undefined for non-existent post', () => {
    const post = PostModel.getPostById(999);
    assert.equal(post, undefined);
  });
});