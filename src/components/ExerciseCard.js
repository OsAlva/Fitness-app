import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';
import { textTransform } from '@mui/system';


const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card'  to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button sx={{ml:'21px', color:'#fff', background: '#1E90FF', fontSize:'14px', borderRadius:'20px', textTransform:'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ml:'21px', color:'#fff', background: '#800000', fontSize:'14px', borderRadius:'20px', textTransform:'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack> 
      <Typography sx={{ ml:"24px", textTransform: 'capitalize', color:'#000', fontSize:'20px'}} fontWeight="bold" mt='11px'>{exercise.name}</Typography>
    </Link>

  )
}

export default ExerciseCard;