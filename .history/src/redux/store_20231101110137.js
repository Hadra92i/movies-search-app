import { configureStore } from '@reduxjs/toolkit'
import { playerSlice } from './features/palyerSlice'

export const store = configureStore({
  reducer: {
    player : playerSlice
  },
})