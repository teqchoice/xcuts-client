import { createSlice } from '@reduxjs/toolkit'

export const options = createSlice({
  name: 'options',
  initialState: {
    password: '12345',
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
