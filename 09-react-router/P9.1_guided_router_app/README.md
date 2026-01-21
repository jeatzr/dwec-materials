# Guided Practice – User Management SPA with React Router

## Objective

Build a **Single Page Application (SPA)** using React that:

- Uses **React Router v7 (Declarative Mode)**
- Consumes a **custom REST API built in Python**
- Separates logic using **services** and **custom hooks**
- Implements **navigation and detail pages**
- Simulates **authentication and protected routes**

---

## Backend API (Provided)

You already have a Python API running locally:

- GET `http://127.0.0.1:8000/users`

Example response:

```json
[
  {
    "id": 1,
    "name": "Vicent",
    "surname": "Foo",
    "email": "vicent@example.com"
  }
]
```

---

## Step 1 – Create the React Project

Create a new React project with TypeScript:

```bash
npm create vite@latest users-spa
cd users-spa
npm install
npm install react-router
code .
npm run dev
```

---

## Step 2 – Project Structure

Organize the project as follows:

```text
src/
 ├─ pages/
 │   ├─ Home.tsx
 │   ├─ Users.tsx
 │   └─ UserDetail.tsx
 ├─ components/
 │   ├─ Navbar.tsx
 │   └─ PrivateRoute.tsx
 ├─ services/
 │   └─ usersService.ts
 ├─ hooks/
 │   └─ useUsers.ts
 ├─ context/
 │   └─ AuthContext.tsx
 ├─ App.tsx
 └─ main.tsx
```

---

## Step 3 – Configure React Router (Declarative Mode)

Edit `App.tsx`:

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## Step 4 – Navigation Component

Create `components/Navbar.tsx`:

```tsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/users">Users</Link>
    </nav>
  );
}

export default Navbar;
```

---

## Step 5 – Create the Users Service

Create `services/usersService.ts`:

```ts
const API_URL = "http://127.0.0.1:8000/users";

export async function getUsers() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error fetching users");
  }
  return response.json();
}
```

---

## Step 6 – Create a Custom Hook (`useUsers`)

Create `hooks/useUsers.ts`:

```ts
import { useEffect, useState } from "react";
import { getUsers } from "../services/usersService";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
}
```

---

## Step 7 – Users Page (List View)

Create `pages/Users.tsx`:

```tsx
import { Link } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

function Users() {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={\`/users/\${user.id}\`}>
            {user.name} {user.surname}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Users;
```

---

## Step 8 – User Detail Page

Create `pages/UserDetail.tsx`:

```tsx
import { useParams } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

function UserDetail() {
  const { id } = useParams();
  const { users } = useUsers();

  const user = users.find((u) => u.id === Number(id));

  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h2>
        {user.name} {user.surname}
      </h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetail;
```

---

## Step 9 – (Optional) Fake Authentication

You may extend the app by adding:

- AuthContext
- `useUser` custom hook
- Protected routes (`PrivateRoute`)
- Login page

This simulates real-world access control.

---

## Step 10 – Expected Result

The final application should:

- Navigate without page reloads
- Show a list of users from your Python API
- Display user details using URL parameters
- Use services and custom hooks correctly
- Follow a clean project structure

---

## Evaluation Criteria

- Correct use of React Router
- API consumption from Python backend
- Separation of concerns (pages, services, hooks)
- Code readability
- Proper SPA behavior

---

## Final Challenge (Optional)

- Add a form to create a new user
- Add loading and error UI
- Protect the `/users` route with authentication
