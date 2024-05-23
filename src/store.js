import { legacy_createStore as createStore } from 'redux'


import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const initialState = {
  sidebarShow: true,
  theme: 'light',
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store




//  const store=configureStore({
//     devTools:true,
//     reducer:{user: userSlice}
// })

// export default store
