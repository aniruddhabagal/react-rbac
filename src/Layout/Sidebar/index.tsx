import { Box, useMediaQuery, useTheme } from '@mui/material'
import SideDrawer from './Drawer'

type Props = {
  open: boolean
  toggle: any
}
const drawerWidth = 260
const SideBar = ({ open, toggle }: Props) => {
  const theme = useTheme()
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label="mailbox folders"
    >
      <SideDrawer open={open} toggle={toggle} />
    </Box>
  )
}

export default SideBar
