import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const apiConfig = {
  method: 'post',
  maxBodyLength: Infinity,
  headers: {
    'Content-Type': 'application/json'
  }
}

export const setOTP = createAsyncThunk('auth/setOTP', async (phoneNumber: string) => {
  const data = { mobile: phoneNumber }
  const config = {
    ...apiConfig,
    url: `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    data
  }

  const res = await axios.request(config)
  return { res, number: phoneNumber }
})

export const saveJWT = createAsyncThunk('auth/saveJWT', async (props: Props) => {
  const data = { mobile: props.number, otp: props.otp }
  const config = {
    ...apiConfig,
    url: `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    data
  }

  const res = await axios.request(config)
  return res.data
})

const initialState = {
  number: '',
  userInfo: {},
  status: ''
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    save_userinfo: (state, action) => {
      state.userInfo = action.payload
    }
  },

  extraReducers: builder => {
    builder.addCase(setOTP.fulfilled, (state, action) => {
      state.number = action.payload.number
      state.status = 'send'
    })
    builder.addCase(saveJWT.fulfilled, (state, action) => {
      // console.log(action.payload)
      const oneWeekFromNow = new Date()
      oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7)
      cookie.set('jwt', action.payload?.data.refresh_token, {
        expires: oneWeekFromNow,
        path: 'inic.ac'
      })
      cookie.set('user_info', action.payload?.data.user_info, {
        expires: oneWeekFromNow,
        path: 'inic.ac'
      })
      // state.userInfo = action.payload?.data.user_info
      // localStorage.setItem('userInfo', JSON.stringify(action.payload?.data.user_info))
      window.location.replace('/')
    })
    builder.addCase(saveJWT.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(saveJWT.rejected, (state, action) => {
      state.status = 'error'
    })
  }
})

export default auth.reducer
export const { save_userinfo } = auth.actions
