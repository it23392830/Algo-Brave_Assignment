import userReducer, { addUser, removeUser } from "./userSlice";

//What is tested//
//Add user:
//Starts with empty list.
//Dispatches addUser.fulfilled with a user.
//Asserts list length becomes 1 and the user’s name matches.
//Remove user:
//Starts with one user in the list.
//Dispatches removeUser.fulfilled with the user’s id.
//Asserts the list becomes empty.

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


//Why this matters//
//Verifies state transitions are correct without UI or API.
//Ensures Immer-powered updates work as expected.
//Fast, deterministic logic tests.