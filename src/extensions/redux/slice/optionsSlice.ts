import { createSlice } from '@reduxjs/toolkit'

export const options = createSlice({
  name: 'options',
  initialState: {
    password: 'u%%XVHt3]01^;Sd2%',
    passwordvrify: false
  },
  reducers: {
    passwordvrify: (state, action) => {
      state.passwordvrify = action.payload
    }
  }
})

export default options.reducer
export const { passwordvrify } = options.actions
