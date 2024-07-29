const URL_users = 'https://jsonplaceholder.typicode.com/users';
const tableBody = document.querySelector('#userTable tbody');

async function fetchUsers() {
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

function displayUsers(users) {
  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
                  <td>${user.id}</td>
                  <td>${user.name}</td>
                  <td>${user.email}</td>
                  <td>${user.username}</td>
              `;
    tableBody.appendChild(row);
  });

}

// we can solve with promises this asynchrony
fetchUsers().then(users => {
  displayUsers(users)
}).catch(error => {
  console.log(error)
});

// Or we can solve like this, with async/wait. In this case we need an async function 
// to be called
/*
async function init() {
  const users = await fetchUsers();
  if (users) {
      displayUsers(users);
  }
}

init();
*/


