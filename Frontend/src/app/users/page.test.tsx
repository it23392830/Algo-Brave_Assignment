import { render, screen } from "@testing-library/react";
import UsersPage from "./page";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/userSlice";

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
