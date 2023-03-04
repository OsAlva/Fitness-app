import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt="50px" bgcolor="#8D8C8C">
      <Stack gap="10px" alignItems="center" px="40px" pt="20px">
        <img src={Logo} alt="Logo" width="40px" />
        <Typography color="black" variant="h3" sx={{pb:'5px'}}>OsAlva</Typography>
           
      </Stack>
      
    </Box>
  )
}

export default Footer