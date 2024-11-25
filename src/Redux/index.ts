import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'
import AuthSlice from './slices/AuthSlice'
import GlobalSlice from './slices/GlobalSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    global: GlobalSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([logger]),
})
export type RootState = ReturnType<any>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
