import { Box, Container, Typography } from '@mui/material'
import LoginForm from 'Components/Forms/LoginForm'

const Login = () => {
  return (
    <Box
      sx={{
        height: '92vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <Typography align="center" variant="h2">
          Welcome Todo App
        </Typography>
        <Container
          sx={{
            maxWidth: '350px',
          }}
        >
          <LoginForm />
        </Container>
      </div>
    </Box>
  )
}

export default Login
