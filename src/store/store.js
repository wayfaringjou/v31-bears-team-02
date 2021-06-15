import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../components/App/authSlice';

export default configureStore({
  reducer: {
    authorization: authReducer,
  }
})