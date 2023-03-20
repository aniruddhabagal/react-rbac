import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setLogin } from 'Redux/slices/AuthSlice'
import Loader from '../Loaders/Loader'
const fakeUsers = [
  {
    email: 'user@email.com',
    name: 'Carlos RT',
    job: 'none',
    roles: ['user'],
    permissions: ['read'],
  },
  {
    email: 'seller@email.com',
    name: 'Bob JT',
    job: 'Seller',
    roles: ['seller'],
    permissions: ['create', 'edit'],
  },
  {
    email: 'admin@email.com',
    name: 'Admin RG',
    job: 'Admin',
    roles: ['admin'],
    permissions: ['all'],
  },
]
const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showPassword, hiddenPassword] = useState(false)
  const loading = false
  const initialValues = {
    password: 'Admin1234',
    email: 'admin@email.com',
  }

  const onSubmit = (values: any) => {
    localStorage.setItem('userToken', values.email)
    const user = fakeUsers.find((u) => u.email === values.email)
    dispatch(
      setLogin({
        user,
      })
    )
    navigate(`/`)
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
  })
  const { isValid, isSubmitting } = formik

  return (
    <>
      {loading && <Loader />}
      <form onSubmit={formik.handleSubmit}>
        <Grid sx={{ marginBottom: '16px' }}>
          <TextField
            placeholder="email"
            fullWidth
            sx={{
              borderRadius: '24px',
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            name="email"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Grid>
        <Grid sx={{ marginBottom: '16px' }}>
          <TextField
            placeholder="password"
            fullWidth
            sx={{
              borderRadius: '24px',
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      hiddenPassword(!showPassword)
                    }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Grid>
        <Grid sx={{ marginBottom: '16px' }}>
          <Button
            sx={{
              borderRadius: '24px',
            }}
            type="submit"
            variant="contained"
            fullWidth
            disabled={!isValid || isSubmitting}
            color="primary"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </>
  )
}

export default LoginForm
