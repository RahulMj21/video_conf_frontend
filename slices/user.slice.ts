import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface UserInterface {
  name: string;
  email: string;
  avatar: {
    public_id: string;
    secure_url: string;
  };
  isLoggedInWithGoogle: Boolean;
  role: string;
  _id: string;
  createdAt: string;
}

const initialState: { user: UserInterface | null; isLoggedIn: Boolean } = {
  user: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInterface>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export const selectIsUserLoggedIn = (state: RootState) => state.user.isLoggedIn;

export default userSlice.reducer;
