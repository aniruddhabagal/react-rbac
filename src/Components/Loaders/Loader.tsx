import { Box, CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  )
}
export default Loader
