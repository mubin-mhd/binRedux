import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../config/supabase";
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
  const { data, error } = await supabase.auth.getSession();
  return data;
});

export const getStateChange = createAsyncThunk(
  "auth/getStateChange",
  async () => {
    const dataSess = [];
    const { data } = await supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          localStorage.setItem("userProfile", JSON.stringify(session));
          dataSess.push(session);
          break;
        case "SIGNED_OUT":
          localStorage.removeItem("userProfile");
          break;
        default:
      }
    });
    return dataSess;
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (loadingHandler) => {
    loadingHandler(true);
    const { error } = await supabase.auth.signOut();
    return error;
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
    [getSession.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.session;
      state.isLogin = true;
      localStorage.setItem("dataSession", action.payload);
    },
    [logOut.pending]: (state, action) => {
      state.isLoading = true;
    },
    [logOut.fulfilled]: (state, action) => {
      localStorage.removeItem("dataSession");
      localStorage.removeItem("dataSession");
      state.isLoading = false;
      window.location.href = "/login";
    },
    [loginWithGoogle.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loginWithGoogle.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
