import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";

//  Create Store

const store = configureStore({
  reducer: {
    auth: authreducer,
    user: userReducer,
  },
  middleware: (getDefualtMiddlewares) => getDefualtMiddlewares(),
  devTools: true,
});

// Export

export default store;
