import React from 'react'
import { Box, Grid, Stack, TextField, TextareaAutosize , Button , useMediaQuery } from '@mui/material'


export default function Form() {
    const mainColor = '#FF651C'
  const match1 = useMediaQuery('(min-width:525px)');
const margin = match1 ? '43%' :'33%' 

    const Item = (props) => {
        return (
            <Box
                sx={{
                    boxShadow: 4,
                    color: 'white',
                    padding: '1px 20px',
                    borderRadius: '10px',
                    boxShadow: '0 0 25px rgb(0 0 0 / 85%)',
                }}
            >
                {props.children}
            </Box>
        )
    }
    return (
        <Grid md={12} sx={{ mt: 3 }}>
            <Item>
                
                <Stack direction='row'>
                    <TextField placeholder="Your Name" size="small" fullWidth sx={{
                        boxShadow: 4,
                        margin: '20px 20px 20px 0px',
                        borderRadius: '10px',
                        color:'white',
                        "& input::placeholder": {
                            color: "white"
                        }
                    }} />
                    <TextField placeholder="Your Email" size="small" fullWidth sx={{
                        boxShadow: 5,
                        margin: '20px 0px 20px 20px',
                        borderRadius: '10px',
                        color:'white',
                        "& input::placeholder": {
                            color: "white"
                        }
                    }} />
                </Stack>
                <Stack direction='row'>
                    <TextField placeholder="Subject" size="small" fullWidth sx={{
                        boxShadow: 5,
                        borderRadius: '10px',
                        color:'white',
                        "& input::placeholder": {
                            color: "white"
                        }
                    }} />
                </Stack>
                <Stack direction='row'>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Message"
                        style={{
                            width: 1100,
                            height: 200,
                            background: "#212121",
                            border: '0',
                            boxShadow: '0 2px 35px rgb(0 0 0 / 70%',
                            borderRadius: '10px',
                            margin: '20px 0px',
                            padding:'10px',
                            color:'white'
                        }}
                        sx={{
                            "& textarea::placeholder":{
                                fontSize:'30px'
                            }
                        }}
                    />
                </Stack>
            <Button
                variant="contained"
                sx={{
                    background: mainColor,
                    textTransform: 'capitalize',
                    boxSizing: 'border-box',
                    margin:`10px ${margin} 20px`,
                    '&:hover': {
                        background: 'transparent',
                        border: `2px solid ${mainColor}`,
                        boxShadow: '0'

                    }
                }}
            >Send Message</Button>
            
            </Item>
        </Grid>
    )
}
