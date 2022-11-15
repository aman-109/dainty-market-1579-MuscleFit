import { Box, Text, useStatStyles } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AppContext'

const Exercises = () => {
  const [newData,setNewData]=useState([])
  const {user}=useContext(AuthContext)

  useEffect(()=>{
    axios.get(`https://backendmusclefit.onrender.com/users/${user?.email}`)
    .then(res=>setNewData(res.data.report))
  },[newData])

  return (
    <div >Exercises
      <Box border="1px solid blue" style={{borderRadius:"15px"}}>
      {newData?.map((el,i)=>(
        <Text key={i}>{el.exercise_name} <span style={{color:"red"}} >{i+1}</span>  </Text>
      ))}
      </Box>
    </div>
  )
}

export default Exercises