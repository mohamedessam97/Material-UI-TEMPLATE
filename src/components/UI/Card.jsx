import React from 'react'
import Box from "@mui/material/Box";
// import {keyframes} from "@mui/material";

// const animation = keyframes`
//     from {width:0%}
//     to {width:100%}
//   `

export default function Card(props) {
    return (
        <Box
            id={props.id}
            component={props.component}
            sx={{
                background: "#212121",
                boxShadow: 4,
                borderRadius: '10px',
                height: 'calc(100vh - 155px)',
                overflow: 'hidden',
                overflowY: 'scroll',
                padding:'20px'
            }}>
            {props.children}
        </Box >
    )
}
