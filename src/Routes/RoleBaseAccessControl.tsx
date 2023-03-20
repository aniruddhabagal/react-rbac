import { useAppSelector } from 'Redux'
import { setErrorCode } from 'Redux/slices/GlobalSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface Props {
  allowedRoles: string[]
}

const RoleBaseAccessControl = ({ allowedRoles }: Props) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const user = useAppSelector((state) => state.auth.user)

  const isAllowed = allowedRoles.some((r) => user?.roles?.includes(r))
  useEffect(() => {
    dispatch(setErrorCode(!isAllowed ? '403' : ''))
    // eslint-disable-next-line
  }, [isAllowed])

  return isAllowed ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  )
}

export default RoleBaseAccessControl
