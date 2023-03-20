import Dashboard from 'Pages/Dashboard'
import RoleBaseAccessControl from './RoleBaseAccessControl'

const routesList = [
  {
    id: 'role-route-1',
    RoleRoute: <RoleBaseAccessControl allowedRoles={['analyzer', 'admin']} />,
    childrens: [
      {
        id: 'dashboard',
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]
export default routesList
