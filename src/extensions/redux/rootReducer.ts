import { baseSplitApi } from './api/baseApi'
import options from './slice/optionsSlice'

const rootReducer = {
  [baseSplitApi.reducerPath]: baseSplitApi.reducer,
  options
}
export default rootReducer
