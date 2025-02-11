import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    User: null,
    otherUser: null,
    userProfiles:null,
  },
  reducers: {
    getUser: (state, action) => {
      state.User = action.payload;
    },
    getOtherUser: (state, action) => {
      state.otherUser = action.payload;
    },
    profile: (state, action) => {
      state.userProfiles = action.payload;
    },
  },
});

export const {getUser,getOtherUser,profile}=userSlice.actions
export default userSlice.reducer