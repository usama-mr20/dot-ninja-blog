import postsReducer from './postsReducer.js'
import authReducer from './authReducer.js'
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  post: postsReducer,
});

export default rootReducer;