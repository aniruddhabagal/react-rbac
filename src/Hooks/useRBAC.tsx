const permissions = ['read', 'create', 'edit', 'delete', 'all']
const permissionsConfig = {
  user: permissions,
  seller: permissions,
  admin: permissions,
}
type Roles = 'user' | 'admin' | 'seller'
interface IUser {
  roles: Roles[]
  permissions: string[]
}
const useRBAC = (user: IUser, permission: string) => {
  const regex = new RegExp(permission, 'ig')
  const isAllowed = user.permissions.some(
    (p: any) => p === 'all' || regex.test(p)
  )
  return isAllowed
}
export default useRBAC
