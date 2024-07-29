const tableBody = document.querySelector('#userTable tbody');

// in this case we are importing from an external module the function
import { fetchUsers } from './users-api.js';

function displayUsers(users) {
  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
                  <td>${user.id}</td>
                  <td>${user.name}</td>
                  <td>${user.email}</td>
                  <td>${user.username}</td>
              `;
    row.addEventListener('click', () => showUserDetails(user));
    tableBody.appendChild(row);
  });

  function showUserDetails(user) {
    const userDetails = document.getElementById('userDetails');
    userDetails.innerHTML = `
              <h2>User Details</h2>
              <p><strong>ID:</strong> ${user.id}</p>
              <p><strong>Name:</strong> ${user.name}</p>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>Username:</strong> ${user.username}</p>
              <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
              <p><strong>Phone:</strong> ${user.phone}</p>
              <p><strong>Website:</strong> ${user.website}</p>
              <p><strong>Company:</strong> ${user.company.name}</p>
          `;
    userDetails.style.display = 'block';
  }

}

async function init() {
  const users = await fetchUsers();
  if (users) {
    displayUsers(users);
  }
}

init();



