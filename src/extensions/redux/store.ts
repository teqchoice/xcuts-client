import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { baseSplitApi } from './api/baseApi'
import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    }).concat(baseSplitApi.middleware)
  }
})
setupListeners(store.dispatch)
