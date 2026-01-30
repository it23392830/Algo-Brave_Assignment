"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "@/store/userSlice";
import type { AppDispatch } from "@/store/store";
import { getUserById, User } from "@/services/userApi";
import { useRouter, useParams } from "next/navigation";

export default function EditUserPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState<User>({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    getUserById(Number(id)).then(setForm);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(editUser({ id: Number(id), user: form }));
    router.push("/users");
  };

  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Edit User</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <button className="bg-black text-white px-4 py-2 rounded w-full">
          Update User
        </button>
      </form>
    </main>
  );
}
