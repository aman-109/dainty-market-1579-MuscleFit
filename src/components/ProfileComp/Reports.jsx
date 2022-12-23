import { Box, Button, Container, Flex,Image ,Text} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import {TiPencil} from "react-icons/ti"
import {MdOutlineTrackChanges} from "react-icons/md"
import axios from 'axios'
import { AuthContext } from '../../context/AppContext'

const Reports = () => {
  const [newData,setNewData]=useState([])
  const {user}=useContext(AuthContext)

  
  
    // AMAN
    useEffect(()=>{
      axios.get(`https://backendmusclefit.onrender.com/users/${user.email}`)
      .then(res=>setNewData(res.data.report))
    },[newData])

  return (
    <Container  >
      <Box>
        <Flex style={{'justifyContent':'space-around'}}>
          <Box  mb={0} fontSize='xs' bg='#33B5E5' pt='0' pb={0} pl={2} pr={2} color='white' style={{'borderRadius':'3px'}}>Current Routine</Box>
          <Box color='#555555' mb={0} fontSize='xs' >Routine Manager</Box>
          <Box color='#555555' mb={0} fontSize='xs'>Shared with Me</Box>
          <Box color='#555555' mb={0} fontSize='xs'>My Submits</Box>
        </Flex>
        <hr  style={{'width':'100%',height:'1.5px',backgroundColor:'#33B5E5',marginTop:'0px'}}/>
      </Box>
      <Box  w='50%' mt={6}>
        <Flex style={{'alignItems':'center'}}>
          <Image mr={2} src="https://www.jefit.com/images/general_workout_100_100.png" alt='image' w='25%'></Image>
          <Text mr={2} fontSize='sm' color='#0E709A'>Masai</Text>
          <TiPencil style={{'color':'#E7DE1D'}}/>
          <Text  fontSize='xs' color='#33B5E5'><button>Edit</button></Text>
        </Flex>
      </Box>
      <Box color='#555555' mt={6} lineHeight='16px'>
        <Flex style={{'justifyContent':'space-around'}}>
          <Box>
            <Text  fontSize='xs'>Information</Text>
          </Box>
          <Box >
            <Text  fontSize='xs'>Frequency: <span style={{'fontSize':'10px'}}>1 day / week</span></Text>
            <Text fontSize='xs'>Type: <span style={{'fontSize':'10px'}}>Sport Specific</span></Text>
            <Text fontSize='xs'>Difficulty: <span style={{'fontSize':'10px'}}>Advanced</span></Text>
          </Box>
          <Box>
          <Text fontSize='xs'>Day Type: <span style={{'fontSize':'10px'}}>Day of the Week</span></Text>
            <Text fontSize='xs'>Tags: <span style={{'fontSize':'10px'}}>Sport Specific</span></Text>
          </Box>
        </Flex>
      </Box>
      <Box mt={6} mb={8} fontSize='xs' textAlign='center'>
                    <table style={{'width':'100%'}}>
                      <thead>
                          <tr style={{'backgroundColor':'#DEDEE0'}}>
                            <th>Monday</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><button style={{color:'#33B5E5'}}>Edit</button></th>
                            <th><button style={{color:'red'}}>Delete</button></th>
                          </tr>
                          <tr style={{"marginTop":'0px',backgroundColor:'#F5F5F5',"padding":'0px',"color":'#555555'}}>
                            <th>Muscle</th>
                            <th>Exercise</th>
                            <th>Timer</th>
                            <th>Reps</th>
                            <th>Sets</th>
                            <th>Track</th>
                          </tr>
                      </thead>
                      <tbody style={{"boxShadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
                        {
                          newData?.map((el,i)=>(
                            <tr >
                            <td style={{color:'#33B5E5'}}>{el.muscle_name}</td>
                            <td style={{color:'#33B5E5'}}>{el.exercise_name}</td>
                            <td style={{color:'#555555'}}>60 sec</td>
                            <td style={{color:'#555555'}}>8</td>
                            <td style={{color:'#555555'}}>3</td>
                            <td><button><MdOutlineTrackChanges style={{'margin':'auto','color':'#33B5E5'}}/></button></td>
                          </tr>
                          ))
                        }
                         
                      </tbody>

                    </table>
      </Box>
    </Container>
  )
}

export default Reports