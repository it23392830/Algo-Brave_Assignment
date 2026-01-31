import userReducer, { addUser, removeUser } from "./userSlice";

describe("userSlice reducer", () => {
  it("should add a user", () => {
    const initialState = { list: [], loading: false };
    const user = { id: 1, name: "Test", email: "t@test.com", phone: "077" };

    const state = userReducer(
      initialState as any,
      addUser.fulfilled(user, "", user)
    );

    expect(state.list.length).toBe(1);
    expect(state.list[0].name).toBe("Test");
  });

  it("should remove a user", () => {
    const initialState = {
      list: [{ id: 1, name: "A", email: "a@a.com", phone: "077" }],
      loading: false,
    };

    const state = userReducer(
      initialState as any,
      removeUser.fulfilled(1, "", 1)
    );

    expect(state.list.length).toBe(0);
  });
});
