//const API_URL = "http://172.20.99.1:3000";
const API_URL = "http://localhost:3000";

export async function getAllPosts() {
  try {
    const response = await fetch(API_URL + "/posts");
    // parse the json response
    const data = await response.json();
    // do something with data
    //console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function createNewPost(post) {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const newPost = await response.json();
    return newPost;
  } catch (error) {
    console.error("Post Data Error:", error);
    throw error;
  }
}
