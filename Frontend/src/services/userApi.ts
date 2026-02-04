const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type User = {
  id?: number;
  name: string;
  email: string;
  phone: string;
};
//abstracts backend API calls for user data, 
// used by your Redux async thunks to keep the UI in sync with the 
// Spring Boot REST API.

export async function getUsers(): Promise<User[]> {
  const res = await fetch(`${BASE_URL}/api/users`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function getUserById(id: number): Promise<User> {
  const res = await fetch(`${BASE_URL}/api/users/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

export async function createUser(user: User): Promise<User> {
  const res = await fetch(`${BASE_URL}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Create failed");
  return res.json();
}

export async function updateUser(id: number, user: User): Promise<User> {
  const res = await fetch(`${BASE_URL}/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Update failed");
  return res.json();
}

export async function deleteUser(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/api/users/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Delete failed");
}
