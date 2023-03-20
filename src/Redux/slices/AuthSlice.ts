import { createSlice } from '@reduxjs/toolkit'
type PermisionsType =
  | ' permission'
  | 'read'
  | 'create'
  | 'update'
  | 'delete'
  | 'all'
interface IUser {
  name: string
  email: string
  job: string
  roles: string[]
  permissions: PermisionsType[]
}
interface InitialState {
  user: IUser | null
  isAuth: boolean
  token: null | string
}
const initialState: InitialState = {
  user: null,
  isAuth: false,
  token: null,
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      return {
        user: action.payload.user,
        token: localStorage.getItem('userToken'),
        isAuth: !!localStorage.getItem('userToken'),
      }
    },
    setLogout: () => initialState,
  },
})

export const { setLogin, setLogout } = authSlice.actions
export default authSlice.reducer
