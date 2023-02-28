import React from 'react'  
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.gif';
import TargetImage from '../assets/icons/target.gif';
import EquipmentImage from '../assets/icons/equipment.gif';



const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,

        },
        {
            icon: TargetImage,
            name: target,

        },
        {
            icon: EquipmentImage,
            name: equipment,

        }
    ]


    console.log(exerciseDetail);
  return (
        <Stack gap="60px" sx={{flexDirection: {lg:'row'}, p:'20px', alignItems:'center'}}>
            <img border= "1px ridge black" src={gifUrl} alt={name} loading="lazy" className='detail-image'
            />
            <Stack sx={{gap: {lg:'35px',xs:'20px'}}}>
                <Typography variant="h3">
                    {name}
                </Typography>
                <Typography variant="h6">
                    This exercise keeps you strong.<br></br> <strong> {name} {` `}</strong>
                    It's a great exercise to develop your <strong>{target}</strong> . It will help you over time to achieve your goals
                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{background: "#fff", borderRadius:'50%'}}>
                            <img width="50px"src={item.icon} alt/>
                        </Button>
                        <Typography variant="h5" textTransform="capitalize">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail