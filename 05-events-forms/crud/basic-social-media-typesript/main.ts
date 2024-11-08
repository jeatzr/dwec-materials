const form = <HTMLFormElement>document.getElementById("form");
const input = <HTMLInputElement>document.getElementById("input");
const msg = <HTMLDivElement>document.getElementById("msg");
const posts = <HTMLDivElement>document.getElementById("posts");
const formButton = <HTMLButtonElement>document.querySelector("form button");

let editFlag: boolean = false
let postIdToUpdate: number

interface Post {
  id: number,
  text: string
}



let postsList: Post[] = [
  {
    id: 1001,
    text: "Hi there!",
  },
  {
    id: 1002,
    text: "I'm too here!"
  },
]

console.log(postsList);

function formValidation() {
  if (!input.value) {
    msg.textContent = "No input text for new Post"
    return false
  } else {
    msg.textContent = ""
    return true
  }
}

const deletePost = (id: number) => {
  console.log("Delete post: " + id)
  postsList = postsList.filter((post) => post.id !== id)
  displayPosts(postsList);

}

const editPost = (id: number) => {

  let postIndex: number
  console.log("Edit post: " + id)

  editFlag = true
  postIdToUpdate = id
  postIndex = postsList.findIndex((post) => post.id == id)

  input.value = postsList[postIndex].text

  formButton.textContent = "Update"

}

const updatePost = () => {
  console.log("Update post: " + postIdToUpdate)
  let postIndex: number
  postIndex = postsList.findIndex((post) => post.id == postIdToUpdate)
  postsList[postIndex].text = input.value

  editFlag = false
  formButton.textContent = "Post"
  displayPosts(postsList);
}

function displayPosts(messages: Post[]) {
  posts!.innerHTML = "";
  messages.forEach((post: Post) => {
    posts!.innerHTML += `<div>
      <p>${post.text}</p>
      <span class="options">
        <i onClick="editPost(${post.id})" class="fas fa-edit"></i>
        <i onClick="deletePost(${post.id})" class="fas fa-trash-alt"></i>
      </span>
    </div>`;
  })
}

form!.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("button clicked")

  if (formValidation()) {
    if (editFlag === false) {
      const newPost: Post = {
        id: Date.now(),
        text: input!.value
      }
      postsList.push(newPost);
      console.log(postsList);
    } else {
      updatePost()
    }
    input!.value = "";
    displayPosts(postsList);
  }

});

displayPosts(postsList);









