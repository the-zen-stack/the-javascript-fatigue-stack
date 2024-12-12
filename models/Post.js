class Post {
  constructor() {
    this.posts = [
      { id: 1, title: 'First Post', content: 'This is my first post content.' },
      { id: 2, title: 'Second Post', content: 'This is another post content.' }
    ];
  }

  getAllPosts() {
    return this.posts;
  }

  addPost(title, content) {
    const newPost = {
      id: this.posts.length + 1,
      title,
      content
    };
    this.posts.push(newPost);
    return newPost;
  }
}

module.exports = new Post();