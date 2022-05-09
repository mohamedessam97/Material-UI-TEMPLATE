import React from 'react'
import { Box, Grid, Stack, TextField } from '@mui/material'


export default function Form() {
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
        <Grid md={12}>
            <Item>
                <Stack direction='row'>
                <input type="text" />
                <input type="text" />
                </Stack>
            </Item>
        </Grid>
    )
}
