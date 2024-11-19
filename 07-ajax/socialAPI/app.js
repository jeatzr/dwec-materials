import { getAllPosts } from "./socialApi.js";

document.addEventListener("DOMContentLoaded", (ev) => {
  const postSection = document.querySelector(".posts");

  getAllPosts()
    .then((posts) => {
      console.log(posts);
      renderPosts(posts);
    })
    .catch((err) => {
      console.log("ERROR: " + err);
    });
  
  
   /// event listener, when submit form, call createNewPost
});

function renderPosts(posts) {
  posts.forEach(post=> {
    // show a card per each post
  });
}
