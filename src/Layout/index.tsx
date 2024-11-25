import { Box, useMediaQuery, useTheme } from '@mui/material'
import ErrorBoundary from 'Components/Errors/ErrorBoundary'
import ErrorFallback from 'Components/Errors/ErrorFallback'
import { useAppSelector } from '../Redux'
import { setOpenSideBar } from 'Redux/slices/GlobalSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Main from './MainLayout'
import Navbar from './Navbar'
import SideBar from './Sidebar'

const Layout = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.up('lg'))

  // Handle left drawer
  const { openSideBar } = useAppSelector((state) => state.global)

  const dispatch = useDispatch()
  const handleLeftDrawerToggle = () => {
    dispatch(setOpenSideBar(!openSideBar))
  }

  useEffect(() => {
    dispatch(setOpenSideBar(isMobile))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile])

  return (
    <Box display="flex">
      <Navbar leftDrawerOpened={handleLeftDrawerToggle} />

      <SideBar open={openSideBar} toggle={handleLeftDrawerToggle} />

      <Main theme={theme} open={openSideBar}>
        <ErrorBoundary ErrorFallback={ErrorFallback}>
          <Outlet />
        </ErrorBoundary>
      </Main>
    </Box>
  )
}

export default Layout
