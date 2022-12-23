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
    <Box p={4} >
      <table  
      style={{
        'backgroundColor':"#96D4D4",
        borderCollapse:' collapse',
        'width':'100%',
        "border":'2px solid white'}}
      >
        <thead>
          <tr >
            <th   style={{
              'backgroundColor':"#96D4D4",
              borderCollapse:' collapse',
              border:"2px solid white",
              marginLeft:'5px'}}>
                Exercise Name</th>
            <th   style={{
              'backgroundColor':"#96D4D4",
              borderCollapse:' collapse',
              border:"2px solid white",
              marginLeft:'5px'}}>
                Sr.No.</th>
          </tr>
        </thead>
        <tbody>
    {newData?.map((el,i)=>(
      <tr>
             <td  style={{
              'backgroundColor':"#96D4D4",
              borderCollapse:' collapse',
              border:"2px solid white",'marginLeft':'5px'}}>
             <Text 
             pl={4}  
             key={i}>
              {el.exercise_name}  
               </Text>
             
              </td>   
              <td style={{
                'backgroundColor':"#96D4D4",
                borderCollapse:' collapse',
                border:"2px solid white"}}  >
                  <span style={{
                    color:"red",
                    marginLeft:'5px'}} >
                      {i+1}</span>
                      </td>

      </tr>
    ))}
    </tbody>
    </table>
    </Box>
  </div>
  )
}

export default Exercises