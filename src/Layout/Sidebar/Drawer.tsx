import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material'
import { BrowserView, MobileView } from 'react-device-detect'
import MenuList from './MenuList'

type Props = {
  open: boolean
  toggle: any
}
const drawerWidth = 260
const SideDrawer = ({ open, toggle }: Props) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Drawer
      // container={()=>window.document.body}
      variant={isDesktop ? 'persistent' : 'temporary'}
      anchor="left"
      open={open}
      onClose={toggle}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderRight: 'none',
          [theme.breakpoints.up('md')]: {
            top: '88px',
          },
        },
      }}
      ModalProps={{ keepMounted: true }}
      color="inherit"
    >
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>logo</Box>
      </Box>
      <BrowserView>
        <Box
          sx={{
            height: !isDesktop ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
            paddingLeft: '16px',
            paddingRight: '16px',
          }}
        >
          <MenuList />
        </Box>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
        </Box>
      </MobileView>
    </Drawer>
  )
}

export default SideDrawer
