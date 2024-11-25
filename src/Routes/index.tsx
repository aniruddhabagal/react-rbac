import ErrorBoundary from 'Components/Errors/ErrorBoundary'
import ErrorFallback from 'Components/Errors/ErrorFallback'
import Loadable from 'Components/Loaders/Loadable'

import { useAppSelector } from '../Redux'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routesList from './routes'
const Layout = Loadable(lazy(() => import('../Layout')))
const Login = Loadable(lazy(() => import('../Pages/Login')))
const ProtectedRoute = Loadable(lazy(() => import('./ProtectedRoute')))
const ErrorPage = Loadable(lazy(() => import('../Components/Errors/ErrorPage')))
const Home = Loadable(lazy(() => import('../Pages/Home')))

const AppRouter = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  return (
    <ErrorBoundary ErrorFallback={ErrorFallback}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<ProtectedRoute isAuth={isAuth} />}>
              <Route path="/" element={<Home />} />
              {routesList.map(({ id, RoleRoute, childrens }) => (
                <Route key={id} element={RoleRoute}>
                  {childrens.map((el) => (
                    <Route key={el.id} path={el.path} element={el.element} />
                  ))}
                </Route>
              ))}
              <Route path="/unauthorized" element={<ErrorPage />} />
              <Route path="/forbiden" element={<ErrorPage />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
export default AppRouter
