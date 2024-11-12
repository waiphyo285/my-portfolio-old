import { configureStore } from "@reduxjs/toolkit";

// reducers
import meReducer from "./features/meSlice";
import authReducer from "./features/authSlice";
import navlistReducer from "./features/navlistSlice";
import contentReducer from "./features/contentSlice";
import projectReducer from "./features/projectSlice";
import repositoryReducer from "./features/repoSlice";
import contactReducer from "./features/contactSlice";
import bannerReducer from "./features/bannerSlice";
import socialReducer from "./features/socialSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    personal: meReducer,
    navlist: navlistReducer,
    content: contentReducer,
    project: projectReducer,
    repository: repositoryReducer,
    contact: contactReducer,
    banner: bannerReducer,
    social: socialReducer,
  },
});
