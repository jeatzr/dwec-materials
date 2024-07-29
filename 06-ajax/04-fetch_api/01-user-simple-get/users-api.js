const URL_users = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers() {
  try {
    const response = await fetch(URL_users);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const users = await response.json();
    console.log(users);
    return users;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}