const BASEURL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers() {
  try {
    const response = await fetch(BASEURL + "/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error :", error);
    return { error: error };
  }
}

export async function fetchUserById(id) {
  try {
    const response = await fetch(BASEURL + "/users/" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error :", error);
    return { error: error };
  }
}
