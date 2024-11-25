import { Box, Button, Grid, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../Redux'
import { setErrorCode } from 'Redux/slices/GlobalSlice'
import statusCode from './StatusCode'

const ErrorPage = () => {
  const navigate = useNavigate()
  const { errorCode } = useAppSelector((state) => state.global)
  const dispatch = useDispatch()
  const { title, subTitle, message } =
    statusCode[errorCode] ?? statusCode['404']

  const handleGoBack = () => {
    dispatch(setErrorCode(''))
    navigate(-1)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'calc(100% - 88px)',
      }}
    >
      <Grid>
        <Typography variant="h3" fontWeight="bold" fontFamily="Raleway">
          {title}
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="h4" fontWeight="bold">
          {subTitle}
        </Typography>
      </Grid>
      <Grid>
        <Typography
          variant="h6"
          sx={{
            margin: '2em 1em',
          }}
        >
          {message}
        </Typography>
      </Grid>
      <Grid>
        <Button variant="contained" onClick={handleGoBack}>
          {' '}
          Go Back
        </Button>
      </Grid>
    </Box>
  )
}

export default ErrorPage
