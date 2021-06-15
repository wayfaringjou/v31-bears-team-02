import { createSlice } from "@reduxjs/toolkit";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";


export const authSlice = createSlice({
  name: 'isAuthenticated',
  initialState: {
    value: false
  },
  reducers: {

  }
})