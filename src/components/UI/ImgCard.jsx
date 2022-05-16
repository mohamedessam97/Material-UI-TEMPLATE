import { Box } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'


export default function ImgCard(props) {
  return (
    <motion.div animate={{ x: [0, 100, 0] }}
     style={{width:'98%'}}>
        <img src={props.img} alt="" style={{maxWidth:'100%' , borderRadius:'15px'}}/>
    </motion.div>
  )
}
