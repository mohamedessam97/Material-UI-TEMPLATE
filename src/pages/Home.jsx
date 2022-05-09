import React from 'react'
import Card from '../components/UI/Card'
import image from '../assets/WhatsApp Image 2022-05-08 at 9.02.52 PM.jpeg'
import { Stack, Box , Button , keyframes} from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Typography } from '@mui/material'
import Typed from "react-typed"

const animation =keyframes`
  0% {
      -webkit-transform: translateY(-200%);
      -ms-transform: translateY(-200%);
      -o-transform: translateY(-200%);
      transform: translateY(-200%)
  }

  100% {
      -webkit-transform: translateY(0%);
      -ms-transform: translateY(0%);
      -o-transform: translateY(0%);
      transform: translateY(0%)
  }
`

export default function Home() {
  const mainColor ='#FF651C'
  const match1 = useMediaQuery('(min-width:525px)');
  const match2 = useMediaQuery('(min-width:850px)');
  const imgWidth = match2 ? '30%' : match1 ? '50%' : '75%';
  const textWidth = match2 ? '60%' : '70%'
  return (
    <Card id="main" component="section">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          mt: 4,
          mb:4,
          animation:`${animation} 1.5s `

        }}>
          
        <Box
          sx={{
            maxWidth:  imgWidth ,
            borderRadius: '50%',
            border: `4px solid ${mainColor}`,
            overflow: 'hidden',
            boxShadow: `0 0 35px ${mainColor}`,
            mb: 2,
          }}
        >
          <img
            style={{ maxWidth: '100%' }}
            src={image} alt="" />

        </Box>
        

        <Typography variant='h4'
          component={'div'}
          color='white' sx={{
            fontWeight: 700,
          }}>Mohamed Essam</Typography>
        <Typed
          style={{
            fontSize: '30px',
            fontWeight: 700,
            color: mainColor
          }}
          strings={[
            "Front End Developer.",
            "Full Stack Developer.",
          ]}
          typeSpeed={100}
          backSpeed={70}
          loop
        />
        <Typography
          variant='p'
          component="div"
          sx={{
            fontSize: '19px',
            lineHeight: '30px',
            textAlign: 'center',
            width: textWidth,
            color: '#888'
        }}
        >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe ratione qui, quidem odio adipisci ducimus, veritatis pariatur itaque officia molestiae deserunt corporis iure delectus?
      </Typography>
      <Button 
      variant="contained"
      sx={{
        background:mainColor,
        textTransform:'capitalize',
        boxSizing:'border-box',

        '&:hover':{
          background:'transparent',
          border:`2px solid ${mainColor}`,
          boxShadow:'0'

        }
      }}
      >More About Me</Button>
      
    </Stack>
    </Card >

  )
}
