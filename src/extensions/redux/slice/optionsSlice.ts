import { createSlice } from '@reduxjs/toolkit'

export const options = createSlice({
  name: 'options',
  initialState: {
    password: 'K&%XVH83]018Sd2%',
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
