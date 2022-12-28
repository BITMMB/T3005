import { configureStore } from '@reduxjs/toolkit'

import aReducer from './Slice'

export default configureStore({
  reducer: {
    aviaReducer: aReducer,
  },
})
