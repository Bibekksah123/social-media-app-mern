import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'

const store=configureStore({
  reducer:{
userdata:userSlice
  }
})

export default store