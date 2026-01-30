import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  User,
} from "@/services/userApi";

type UsersState = {
  list: User[];
  selected?: User;
  loading: boolean;
  error?: string;
};

const initialState: UsersState = {
  list: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk("users/fetchAll", getUsers);

export const fetchUser = createAsyncThunk(
  "users/fetchById",
  async (id: number) => getUserById(id)
);

export const addUser = createAsyncThunk(
  "users/create",
  async (user: User) => createUser(user)
);

export const editUser = createAsyncThunk(
  "users/update",
  async ({ id, user }: { id: number; user: User }) =>
    updateUser(id, user)
);

export const removeUser = createAsyncThunk(
  "users/delete",
  async (id: number) => {
    await deleteUser(id);
    return id;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearSelected(state) {
      state.selected = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Fetch one
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.selected = action.payload;
      })

      // Create
      .addCase(addUser.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })

      // Update
      .addCase(editUser.fulfilled, (state, action) => {
        state.list = state.list.map((u) =>
          u.id === action.payload.id ? action.payload : u
        );
        state.selected = action.payload;
      })

      // Delete
      .addCase(removeUser.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
      });
  },
});

export const { clearSelected } = userSlice.actions;
export default userSlice.reducer;
