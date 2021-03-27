import { configureStore } from '@reduxjs/toolkit'
import application from '../features/application/application'

export const store = configureStore({
  reducer: application
})