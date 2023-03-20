import { Divider, List, Typography } from '@mui/material'
import NavCollapse from './NavCollapse'
import NavItem from './NavItem'

type Props = {
  item: any
}

const NavGroup = ({ item }: Props) => {
  const itemsList = item.children.map((element: any) => {
    const mapper: { [key: string]: JSX.Element } = {
      collapse: <NavCollapse key={element.id} element={element} level={1} />,
      item: <NavItem key={element.id} element={element} level={1} />,
      default: (
        <Typography key={element.id} color="error" align="center" variant="h6">
          Menu Items Error
        </Typography>
      ),
    }
    return mapper[element.type] ?? mapper.default
  })
  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography
              variant="subtitle1"
              //sx={{ ...theme.typography.caption }}
              display="block"
              gutterBottom
            >
              {item.title}
              {item.caption && (
                <Typography
                  variant="caption"
                  //  sx={{ ...theme.typography.caption }}
                  display="block"
                  gutterBottom
                >
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {itemsList}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  )
}

export default NavGroup
