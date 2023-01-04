import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import supabase from "../config/supabase";
import { useHistory } from "react-router-dom";
import secureStorage from "../helper/secureStorage";

export const loginWithGithub = createAsyncThunk(
  "auth/loginWithGithub",
  async (loadingHandler) => {
    loadingHandler(true);
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    return data;
  }
);

export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (loadingHandler) => {
    loadingHandler(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    return data;
  }
);

export const getSession = createAsyncThunk("auth/getSession", async () => {
  const { data } = await supabase.auth.getSession();
  return data;
});

export const getStateChange = createAsyncThunk(
  "auth/getStateChange",
  async () => {
    const data = ["mubin"];
    await supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          console.log("LOGGED", session);
          break;
        case "SIGNED_OUT":
          console.log("LOGOUT", session);
          break;
        default:
      }
    });
    return data;
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (loadingHandler) => {
    loadingHandler(true);
    const { error } = await supabase.auth.signOut();
    console.log(error);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    token: {},
    profile: [],
    isLogin: false,
  },
  extraReducers: {
    [getSession.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getSession.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.session;
      state.isLogin = true;
      secureStorage.setItem("dataSession", action.payload.session);
    },
    [logOut.fulfilled]: (state, action) => {
      secureStorage.removeItem("dataSession");
    },
  },
});

export default authSlice.reducer;
