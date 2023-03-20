import { LocalMall, People } from '@mui/icons-material'
import NavGroup from './NavGroup'

const menuList: any = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard',
        icon: null,
        breadcrumbs: false,
      },
    ],
  },
  {
    id: 'store',
    title: 'Store',
    caption: 'Store Caption',
    type: 'group',
    children: [
      {
        id: 'e-commerce',
        title: 'E-Commerce',
        type: 'collapse',
        icon: LocalMall,

        children: [
          {
            id: 'products',
            title: 'Products',
            type: 'item',
            url: '/products',
            target: true,
          },
          {
            id: 'orders',
            title: 'Orders',
            type: 'item',
            url: '/orders',
            target: true,
          },
        ],
      },
    ],
  },
  {
    id: 'customers',
    title: 'Customers',
    caption: 'Customers Caption',
    type: 'group',
    children: [
      {
        id: 'customers',
        title: 'Customers',
        type: 'collapse',
        icon: People,

        children: [
          {
            id: 'customers',
            title: 'Customers',
            type: 'item',
            url: '/customers',
            target: true,
          },
          {
            id: 'payments',
            title: 'Payments',
            type: 'item',
            url: '/payments',
            target: true,
          },
        ],
      },
    ],
  },
]
const MenuList = () => {
  return (
    <>
      {menuList.map((el: any) => (
        <NavGroup key={el.id} item={el} />
      ))}
    </>
  )
}

export default MenuList
