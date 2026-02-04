import { render, screen } from "@testing-library/react";
import UsersPage from "./page";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/userSlice";

// tests the UsersPage component using React Testing Library 
// with a test Redux store.

//What is tested//
//Smoke test: Verifies the page renders without crashing.
//UI presence: Confirms the "Users" heading is rendered.
//Redux integration: Ensures the component can read from Redux 
// (even with empty initial state).

// ✅ Create a TEST store (not the app store)
function renderWithStore(ui: React.ReactElement) {
  const store = configureStore({
    reducer: {
      users: userReducer,
    },
    preloadedState: {
      users: {
        list: [],
        loading: false,
        error: undefined,
      },
    },
  });

  return render(<Provider store={store}>{ui}</Provider>);
}

describe("UsersPage", () => {
  it("renders Users heading", () => {
    renderWithStore(<UsersPage />);
    expect(screen.getByText("Users")).toBeInTheDocument();
  });
});
