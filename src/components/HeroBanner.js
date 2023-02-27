import React from 'react'
import {Box, Button, Stack, Typography} from '@mui/material' 
import Banner from '../assets/images/banner.jpeg'

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '152px', xs:'70px'}, ml:{sm:'60px'}}} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="800" fontSize="30px">
            Fitness App
        </Typography>
        <Typography fontWeight="800" sx={{fontSize: {lg:'44px', xs:'40px'}}} mb="23px" mt="30px">
            Smile, Exercise <br/> and Repeat
        </Typography>
        <Typography fontSize="22px" fontWeight="400" lineHeight="35px" mb={5}>
            Check out the most effective exercises
        </Typography>
        <Button variant="contained" color="error" href='#exercises' sx={{pading: '10px'}}>Explore Exercises</Button>
        <Typography
            fontWeight={600}
            color="#ff2625"
            sx={{
                opacity: 0.1,
                display: {lg: 'block', xs:'none'}

            }}
             fontSize="200px"
        >   
            Exercise
        </Typography>

        <img src={Banner} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner 