export default class PostCollection {
  constructor(posts = []) {
    this.posts = posts;
  }

  deletePost(id) {
    this.posts = this.posts.filter((post) => post.id !== Number(id));
    console.log(this.posts);
  }

  getAllPosts() {
    return this.posts;
  }

  getPostById(id) {
    return this.posts.filter((post) => post.id == id)[0];
  }

  updatePost(updatedPost) {
    let postIndex;
    postIndex = this.posts.findIndex((post) => post.id == updatedPost.id);
    if (postIndex < 0) {
      console.warn(
        `Cannot update post with index ${updatedPost.id} because it doesn't exist`
      );
      return false;
    } else {
      this.posts[postIndex].text = updatedPost.text;
      console.log(`Post with id ${updatedPost.id} updated successfully`);
    }
  }

  addNewPost(newPost) {
    const foundId = this.posts.filter((post) => post.id == newPost.id);
    console.log(foundId);
    if (foundId.length) {
      console.log("This ID is already in use");
      return 0;
    } else {
      this.posts.push(newPost);
      return newPost.id;
    }
  }
}
