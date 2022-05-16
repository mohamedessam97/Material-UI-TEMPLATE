import React, { useState } from 'react'
import Card from '../components/UI/Card'
import ImgCard from '../components/UI/ImgCard'
import img1 from '../assets/portfolio-1.jpg'
import img2 from '../assets/portfolio-2.jpg'
import img3 from '../assets/portfolio-3.jpg'
import { motion } from 'framer-motion'
import { Typography, Button, Box, Stack, styled, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'

const OrangeButton = styled(Button)({
    border: '2px solid #FF651C',
    backgroundColor: '#FF651C',
    fontWeight: 700,
    marginRight: 10,
    "&:hover": {
        backgroundColor: 'transparent',
        // border: '2px solid #FF651C'
    }
})

const ButtonGroup=styled(ToggleButtonGroup)({
    "&.MuiToggleButtonGroup-grouped":{
        border: '2px solid #FF651C'
    }

})

const ToggleOrangeButton = styled(ToggleButton)({
    backgroundColor: '#FF651C',
    // border: '2px solid #FF651C',
        fontWeight: 700,
        marginRight: 10,
        color: 'white',
        // borderRadius: '5px',
        "&.Mui-selected": {
            // backgroundColor: 'transparent',
    // border: '2px solid #FF651C',
    color:'white'


        }

})

export default function Portfolio() {

    const imgs = [{ img: img1, id: 'app' }, { img: img2, id: 'card' }, { img: img3, id: 'web' }, { img: img2, id: 'card' }];
    const [catg, setCatg] = useState(imgs)

    const catgHandler = (ctg) => {
        if (ctg === 'all') {
            setCatg(imgs)
            return;
        }
        const i = imgs.filter(item => {
            return item.id === ctg
        })
        setCatg(i)
    }
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Card>
            <h2>Portfolio</h2>
            <Stack
                direction='row'
                justifyContent='center'
            >
                <ToggleButtonGroup
                color='warning'
                value={alignment}
                exclusive
                onChange={handleChange}
                >

                    <ToggleOrangeButton value="all" onClick={() => catgHandler('all')}>ALL</ToggleOrangeButton>
                    <ToggleOrangeButton value="app" onClick={() => catgHandler('app')}>APP</ToggleOrangeButton>
                    <ToggleOrangeButton value="card" onClick={() => catgHandler('card')}>CARD</ToggleOrangeButton>
                    <ToggleOrangeButton value="web" onClick={() => catgHandler('web')}>WEB</ToggleOrangeButton>
                </ToggleButtonGroup>
                
            </Stack>
            <Grid container spacing={2}
            sx={{
                marginTop:'20px'
            }}
            >
                {
                    catg.map(i => {
                        return (

                            <Grid item xs={12} sm={6} md={4} >

                                <ImgCard img={i.img} />
                            </Grid>
                        )

                    })
                }


            </Grid>
        </Card>
    )
}
