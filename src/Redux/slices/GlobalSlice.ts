import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  loading: boolean
  error: any
  openSideBar: boolean
  isSelected: any[]
  errorCode: string
  mode: 'light' | 'dark'
}

const initialState: InitialState = {
  loading: false,
  error: null,
  openSideBar: true,
  isSelected: [],
  errorCode: '',
  mode: 'dark',
}
export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      }
    },
    setErrors: (state, action) => {
      return {
        ...state,
        error: action.payload,
      }
    },
    setOpenSideBar: (state, action) => {
      return {
        ...state,
        openSideBar: action.payload,
      }
    },
    setIsSelected: (state: any, action) => {
      return {
        ...state,
        isSelected: [action.payload],
      }
    },
    setErrorCode: (state: any, action) => {
      return {
        ...state,
        errorCode: action.payload,
      }
    },
  },
})

export const {
  setErrors,
  setLoading,
  setOpenSideBar,
  setIsSelected,
  setErrorCode,
} = globalSlice.actions
export default globalSlice.reducer
