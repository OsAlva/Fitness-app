import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
import ExerciseCard from './ExerciseCard';
// import { ScrollMenu } from 'react-horizontal-scrolling-menu/dist/types';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({equipmentExercises, targetMuscleExercises}) => {
  return (
    <Box sx={{mt: {lg: '40px', xs: '0'}}}>
      <Typography variant="h3" mb="5px">
        Similar Target Muscle exercises:
      </Typography>
      <Stack direction="row" sx={{p:'2', position: 'relative'}} justifyContent="center">
          {   targetMuscleExercises.length 
          ? <HorizontalScrollbar data={targetMuscleExercises}/>
          : <Loader/>
          }
      </Stack> 
      <Typography variant="h3" mb="5px" mt="20px">
        Similar exercises that use the same equipment:
      </Typography>
      <Stack direction="row" sx={{p:'2', position: 'relative'}} justifyContent="center">
          {   equipmentExercises.length 
          ? <HorizontalScrollbar data={equipmentExercises}/>
          : <Loader/>
          }
      </Stack> 
    </Box>
  )
}

export default SimilarExercises


