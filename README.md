# Getting Started to React RBAC (Role Base Access Control)

## How does a Role Base Acces Control work?

- this system rely on every user or entity within a system having a designated role, this role determines their permissions. example:

  - When a user creates an account, a role with specific permissions is assigned to the user based on the user’s group.
  - This role is then stored alongside other user information in the database.
  - When the user attempts to access a protected route, the user’s role and other information are retrieved from the database.
  - The user’s role is cross-checked to confirm if the role of the user matches the required role to access the information requested.
  - If the user’s role matches the required role, access is granted, else access will be denied.

## Components

- route

```ts
// Role Component
const RoleBaseAccessControl = ({ allowedRoles }: Props) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const user = useAppSelector((state) => state.auth.user)

  const isAllowed = allowedRoles.some((r) => user?.roles?.includes(r))
  useEffect(() => {
    dispatch(setErrorCode(!isAllowed ? '403' : ''))
  }, [isAllowed])

  return isAllowed ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  )
}
export default RoleBaseAccessControl

// implements
 <Route element={<RoleBaseAccessControl allowedRoles={['supervisor', 'admin']} />}/>
 ... routes childrens
 </Route>
```

- component permisions

```ts
// Hook
// permisions ['read', 'create', 'edit', 'delete', 'all']
// a simple user has default read permission
// the admin have all permisions by default
const useRBAC = (user: IUser, permission: any) => {
  const regex = new RegExp(permission, 'ig')
  const isAllowed = user.permissions.some(
    (p: any) => p === 'all' || regex.test(p)
  )
  return isAllowed
}
export default useRBAC
//implement
// the actions are limited by permissions
const SecureComponent = ({ user }: any) => {
  const isAllowedEdit = useRBAC(user, 'edit')
  const isAllowedCreate = useRBAC(user, 'create')
  const isAllowedDelete = useRBAC(user, 'delete')
  return (
    <Grid item>
      <Typography>{user.name}</Typography>
      access to read this : ok
      {isAllowedEdit && <Button>edit</Button>}
      {isAllowedCreate && <Button>create</Button>}
      {isAllowedDelete && <Button>delete</Button>}
    </Grid>
  )
}
```

## finaly

- More pages and roles can be added using the same logic. We could have more scrutiny in each department, but that’s up to you. Happy coding!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
