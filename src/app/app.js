import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../components/state/userSlice'
import userSignInReducer from '../components/state/signInSlice'
import routeReducer from '../components/state/routeInSlice'
import userDataReducer from '../components/state/userDataSlice'
import bookmarkListReducer from '../components/state/bookmarkListSlice'

const store = configureStore({
  reducer: {
      userGlobal: userReducer,
      userSignIn: userSignInReducer,
      route: routeReducer,
      userData: userDataReducer,
      bookmarkList: bookmarkListReducer
  },
})

export {store};