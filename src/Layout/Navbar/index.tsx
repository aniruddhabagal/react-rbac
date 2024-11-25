import {
  ArrowDropDownOutlined,
  Menu as MenuIcon,
  Search,
} from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonBase,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import { useAppSelector } from '../../Redux'
import { setLogout } from 'Redux/slices/AuthSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import classes from './navbar.module.css'
type Props = {
  leftDrawerOpened: any
}

const Navbar = ({ leftDrawerOpened }: Props) => {
  const theme: any = useTheme()
  const [anchorEl, setAnchorEl] = useState(null)
  const dispatch = useDispatch()
  const user = useAppSelector((state) => state.auth.user)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogOut = () => dispatch(setLogout())
  return (
    <AppBar
      enableColorOnDark
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: theme.palette.background.default,
        transition: leftDrawerOpened
          ? theme.transitions.create('width')
          : 'none',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: 228,
            display: 'flex',
            [theme.breakpoints.down('md')]: {
              width: 'auto',
            },
          }}
        >
          <Box
            component="span"
            sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}
          >
            Logo
          </Box>
          <ButtonBase
            sx={{
              borderRadius: '12px',
              overflow: 'hidden',
            }}
            onClick={leftDrawerOpened}
          >
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                transition: 'all .2s ease-in-out',
                background: 'rgba(25, 118, 210, 0.12)',
                color: theme.palette.primary.dark,
                '&:hover': {
                  background: theme.palette.primary.light,
                  color: theme.palette.primary.light,
                },
              }}
            >
              <MenuIcon color="primary" />
              {/* <IconMenu2 stroke={1.5} size="1.3rem" /> */}
            </Avatar>
          </ButtonBase>
        </Box>
        <Box
          className={classes.root}
          bgcolor={theme.palette.background.default}
          borderRadius="9px"
          gap="9px"
          p="0.1rem 1.5rem"
        >
          <InputBase placeholder="Search" />
          <IconButton>
            <Search />
          </IconButton>
        </Box>
        <Box justifyContent="center" alignItems="center" display="flex">
          <Button
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textTransform: 'none',
              gap: '1rem',
            }}
            onClick={handleClick}
            color="inherit"
          >
            <Box>
              <Avatar />
            </Box>
            <Box textAlign="left">
              <Typography fontWeight="bold" fontSize="0.7rem">
                {user?.name}
              </Typography>
              <Typography fontSize="0.6rem">{user?.job}</Typography>
            </Box>
            <ArrowDropDownOutlined
              sx={{
                color: theme.palette.text.primary,
                fontSize: '25px',
              }}
            />
          </Button>
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            keepMounted
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
