import { FiberManualRecord } from '@mui/icons-material'
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { useState } from 'react'

type Props = {
  element: any
  level: number
}

const NavItem = ({ element, level }: Props) => {
  const [isSelected, setIsSelected] = useState<string | null>(null)
  const handleSelect = (id: string) =>
    setIsSelected(!isSelected ? element.id : null)
  const Icon = element.icon ? (
    <element.icon />
  ) : (
    <FiberManualRecord
      sx={{
        width: isSelected === element.id ? 8 : 6,
        height: isSelected === element.id ? 8 : 6,
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
      color={isSelected === element.id ? 'primary' : 'inherit'}
    />
  )
  return (
    <ListItemButton
      sx={{
        borderRadius: `12px`,
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
      }}
      selected={isSelected === element.id}
      onClick={() => handleSelect(element.id)}
    >
      <ListItemIcon sx={{ my: 'auto', minWidth: !element?.icon ? 18 : 36 }}>
        {Icon}
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant="body1"
            color={isSelected === element.id ? 'primary' : 'inherit'}
            sx={{
              my: 'auto',
              fontSize: '0.875rem',
              fontWeight: isSelected === element.id ? 500 : 400,
            }}
          >
            {element.title}
          </Typography>
        }
        secondary={
          element.caption && (
            <Typography
              variant="caption"
              // sx={{ ...theme.typography.caption }}
              display="block"
              gutterBottom
            >
              {element.caption}
            </Typography>
          )
        }
      />
    </ListItemButton>
  )
}

export default NavItem
