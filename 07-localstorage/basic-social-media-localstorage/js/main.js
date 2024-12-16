import PostCollection from "./PostCollection.js";

const form = document.getElementById("form");
const input = document.getElementById("input");
const msg = document.getElementById("msg");
const postsDiv = document.getElementById("posts");
const formButton = document.querySelector("form button");

let editFlag = false;
let postIdToUpdate;

let initialPosts = JSON.parse(localStorage.getItem("posts"));

if (!initialPosts) {
  initialPosts = [];
  console.log("no localstorage");
}
const postList = new PostCollection(initialPosts);

console.log(postList.getAllPosts());

function formValidation() {
  if (!input.value) {
    msg.textContent = "No input text for new Post";
    return false;
  } else {
    msg.textContent = "";
    return true;
  }
}

const deletePost = (id) => {
  console.log("Delete post: " + id);
  postList.deletePost(id);
  displayPosts(postList.getAllPosts());
};

const editPost = (id) => {
  let postIndex;
  console.log("Edit post: " + id);
  editFlag = true;
  postIdToUpdate = id;

  let postInfo = postList.getPostById(id);
  input.value = postInfo.text;

  formButton.textContent = "Update";
};
const updatePost = (postId) => {
  console.log("Update post: " + postId);

  const updatedPost = {
    id: postId,
    text: input.value,
  };
  postList.updatePost(updatedPost);
  editFlag = false;
  formButton.textContent = "Post";
  displayPosts(postList.getAllPosts());
};

function displayPosts(posts) {
  postsDiv.innerHTML = "";
  posts.forEach((post) => {
    postsDiv.innerHTML += `<div>
      <p>${post.text}</p>
      <span class="options">
        <i  data-id="${post.id}" class="fas fa-edit"></i>
        <i  data-id="${post.id}" class="fas fa-trash-alt"></i>
      </span>
    </div>`;
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  if (formValidation()) {
    if (editFlag === false) {
      const newPost = {
        id: Date.now(),
        text: input.value,
      };

      let newPostId = postList.addNewPost(newPost);

      if (newPostId) {
        console.log(`Post created successfully with id ${newPostId}`);
        console.log(postList.getAllPosts());
        // Update local storage
        localStorage.setItem("posts", JSON.stringify(postList.getAllPosts()));
      }
    } else {
      updatePost(postIdToUpdate);
    }

    input.value = "";
    displayPosts(postList.getAllPosts());
  }
});

postsDiv.addEventListener("click", (ev) => {
  console.log("Click inside posts div");
  const actionBtn = ev.target;
  if (actionBtn.classList.contains("fa-edit")) {
    editPost(actionBtn.dataset.id);
  } else if (actionBtn.classList.contains("fa-trash-alt")) {
    deletePost(actionBtn.dataset.id);
  }
});

displayPosts(postList.getAllPosts());
