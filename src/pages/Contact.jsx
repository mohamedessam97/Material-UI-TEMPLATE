import React from 'react'
import Card from '../components/UI/Card'
import Form from '../components/UI/Form'
import { Box, Grid, Stack , TextField} from '@mui/material'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ShareIcon from '@mui/icons-material/Share';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
const Item = (props) => {
    return (
        <Box
            sx={{
                boxShadow: 4,
                color: 'white',
                padding: '1px 20px',
                borderRadius: '10px',
                boxShadow: '0 0 25px rgb(0 0 0 / 85%)',
                "& .h":{
                    
                        marginBottom: '-5px'
                }

            }}
        >
            <Stack
                spacing={2}
                direction="row">
                <Box
                    sx={{ mt: 3 , color:'#FF651C' ,  }}
                >
                    {props.icon}
                </Box>
                <Box>
                    {props.children}

                </Box>

            </Stack>
        </Box>
    )
}

export default function Contact() {
    return (
        <Card>
            <h2>CONTACT</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Item icon={<FmdGoodIcon fontSize="large"/>} >
                        <h3 className='h'>My Address</h3>
                        <p style={{fontSize:'13px' , color:'#888'}}> 4155 Mann Island, Liverpool, United Kingdom.</p>
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item icon={<ShareIcon fontSize="large" />}>

                        <h3 className='h'>Social Profiles</h3>
                        <p style={{fontSize:'13px' , color:'#888'}}><FacebookRoundedIcon fontSize='small' /> <LinkedInIcon fontSize='small'/> <InstagramIcon fontSize='small'/> <TwitterIcon fontSize='small'/> <GitHubIcon fontSize='small'/> </p>
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item icon={<EmailIcon fontSize="large"/>}>

                        <h3 className='h'>Email Me</h3>
                        <p style={{fontSize:'13px' , color:'#FF651C'}}> mohamedessam9798@gmail.com</p>
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item icon={<LocalPhoneIcon fontSize="large"/>}>

                        <h3 className='h'>Call Me</h3>
                        <p style={{fontSize:'13px' , color:'#FF651C'}}> +20 110 209 1453</p>
                    </Item>
                </Grid>

            </Grid>
            <Form/>
        </Card>
    )
}
