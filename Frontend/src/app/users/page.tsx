"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, removeUser } from "@/store/userSlice";
import type { RootState, AppDispatch } from "@/store/store";
import Link from "next/link";

export default function UsersPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link
          href="/users/new"
          className="bg-black text-white px-4 py-2 rounded"
        >
          + Add User
        </Link>
      </div>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && list.length === 0 && <p>No users found.</p>}

      <ul className="space-y-4">
        {list.map((user) => (
          <li
            key={user.id}
            className="border rounded p-4 flex justify-between items-start"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600">{user.phone}</p>
            </div>

            <div className="flex gap-3">
              <Link
                href={`/users/${user.id}`}
                className="text-blue-600 underline"
              >
                Edit
              </Link>
              <button
                onClick={() => {
                  if (confirm("Delete this user?")) {
                    dispatch(removeUser(user.id!));
                  }
                }}
                className="text-red-600 underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
