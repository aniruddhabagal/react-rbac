import {
  ChevronRight,
  ExpandMore,
  FiberManualRecord,
} from '@mui/icons-material'
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'
import useToggle from 'Hooks/useToggle'
import { useState } from 'react'
import NavItem from './NavItem'
type Items = {
  id: string
  type: any
  icon: any
  title: string
  caption: string
  children: any[]
}
type Props = {
  element: Items
  level: any
}

const NavCollapse = ({ element, level }: Props) => {
  const [open, setClose] = useToggle()
  const theme = useTheme()
  const [selected, setSelected] = useState<string | null>(null)
  const handleClick = () => {
    setClose()
    setSelected(!selected ? element.id : null)
  }
  const ItemIcon = element.icon ? (
    <element.icon color={selected === element.id ? 'primary' : 'inherit'} />
  ) : (
    <FiberManualRecord
      sx={{
        width: selected === element.id ? 8 : 6,
        height: selected === element.id ? 8 : 6,
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
      color={selected === element.id ? 'primary' : 'inherit'}
    />
  )
  const NavItemList = element.children.map((el: any) => {
    return <NavItem key={el.id} element={el} level={level + 1} />
  })
  return (
    <>
      <ListItemButton
        sx={{
          borderRadius: '8px',
          mb: 0.5,
          alignItems: 'flex-start',
          backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`,
        }}
        selected={selected === element.id}
        onClick={handleClick}
      >
        <ListItemIcon sx={{ my: 'auto', minWidth: !element.icon ? 18 : 36 }}>
          {ItemIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              variant="body1"
              color={selected === element.id ? 'primary' : 'inherit'}
              sx={{
                my: 'auto',
                fontWeight: selected === element.id ? 500 : 400,
              }}
            >
              {element.title}
            </Typography>
          }
          secondary={
            element.caption && (
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                color={selected === element.id ? 'primary' : 'inherit'}
              >
                {element.caption}
              </Typography>
            )
          }
        />
        {open ? (
          <ExpandMore
            color={selected === element.id ? 'primary' : 'inherit'}
            sx={{ marginTop: '3.5px' }}
          />
        ) : (
          <ChevronRight
            color={selected === element.id ? 'primary' : 'inherit'}
            sx={{ marginTop: '3.5px' }}
          />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            position: 'relative',
            '&:after': {
              content: "''",
              position: 'absolute',
              left: '32px',
              top: 0,
              height: '100%',
              width: '1px',
              opacity: 1,
              background: 'rgba(25, 118, 210, 0.12)', //theme.palette.primary.light
            },
          }}
        >
          {NavItemList}
        </List>
      </Collapse>
    </>
  )
}

export default NavCollapse
