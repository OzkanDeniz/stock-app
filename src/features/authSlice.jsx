import { createSlice } from "@reduxjs/toolkit"; //?Global State

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: "",
    username: "",
    loading: "",
    error: "",
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.token = payload.token;
      state.username = payload.user.username;
      state.loading = false;
    },
    //?Register işlemi için ayrıı bir action creator fonksiyonu yazılması
    //?Register ile Login arasında bazı farklılıklar olduğu için ayrı bir fonsiyon yazıldı.
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.username = payload.data.username;
      state.token = payload.token;
    },
    logoutSuccess: (state, { payload }) => {
      state.loading = false;
      state.username = ""
      state.token = ""
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true; 
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  fetchFail,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
