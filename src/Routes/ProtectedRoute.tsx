import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  isAuth: boolean
  redirectPath?: string
}

function ProtectedRoute({ isAuth, redirectPath = '/login' }: Props) {
  return isAuth ? <Outlet /> : <Navigate to={redirectPath} replace />
}

export default ProtectedRoute
