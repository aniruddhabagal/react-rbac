import { Button, Grid, Typography } from '@mui/material'
import useRBAC from 'Hooks/useRBAC'
import { useAppSelector } from '../../Redux'

type Props = {}

const SecureComponent = ({ user }: any) => {
  const isAllowedEdit = useRBAC(user, 'edit')
  const isAllowedCreate = useRBAC(user, 'create')
  const isAllowedDelete = useRBAC(user, 'delete')
  console.log(isAllowedCreate)
  return (
    <Grid item>
      <Typography>{user.name}</Typography>
      access to read thi: ok
      {isAllowedEdit && <Button>edit</Button>}
      {isAllowedCreate && <Button>create</Button>}
      {isAllowedDelete && <Button>delete</Button>}
    </Grid>
  )
}
const Home = (props: Props) => {
  const user: any = useAppSelector((state) => state.auth.user)
  const groupComponent: any = {
    user: <SecureComponent user={user} />,
    seller: <SecureComponent user={user} />,
    admin: <SecureComponent user={user} />,
  }
  return (
    <Grid container spacing={2} style={{ marginTop: '64px' }}>
      {groupComponent[user.roles[0]]}
    </Grid>
  )
}

export default Home
