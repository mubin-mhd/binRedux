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
    console.log("DATA SETELAH LOGIN");
    if (data) {
      loadingHandler(false);
    }
  }
);

export const getSession = createAsyncThunk("auth/getSession", async () => {
  const { data } = await supabase.auth.getSession();
  if (data.session) {
    console.log("authenticated", data.session);
    secureStorage.setItem("dataSession", data.session);
  } else {
    console.log("not authentication", data.session);
    localStorage.setItem("dataSession", null);
  }
});

export const getStateChange = createAsyncThunk(
  "auth/getStateChange",
  async () => {
    const history = useHistory();
    const result = await supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          console.log("CASE SIGNIN", session.user);
          history.push("/home");
          break;
        case "SIGNED_OUT":
          console.log("CASE SIGN OUT", session.user);
          alert("notauthenticated");
          break;
        default:
      }
      return result;
    });
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (loadingHandler) => {
    loadingHandler(true);
    const data = await supabase.auth.signOut();
    console.log(data);
  }
);

const authEntity = createEntityAdapter({
  selectId: (authVal) => authVal.id,
});

const authSlice = createSlice({
  name: "auth",
  initialState: authEntity.getInitialState(),
  extraReducers: {
    [loginWithGithub.fulfilled]: (state, action) => {
      authEntity.setAll(state, action.payload);
    },
    [getSession.fulfilled]: (state, action) => {
      authEntity.setAll(state, action.payload);
    },
    [getStateChange.fulfilled]: (state, action) => {
      authEntity.setAll(state, action.payload);
    },
    [logOut.fulfilled]: (state, action) => {
      authEntity.setAll(state, action.payload);
    },
  },
});

export const authSelector = authEntity.getSelectors((state) => state.auth);

export default authSlice.reducer;
