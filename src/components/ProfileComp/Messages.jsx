import { Box, Button, Checkbox, Flex, Input, Spacer, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {AuthContext} from "../../context/AppContext"



const Messages = () => {
    const [userMessage,setUserMesssage] = useState("")
    const {user} = useContext(AuthContext)
    const [newData,setNewData]=useState([])

   async function saveMessage(mess){
      console.log(userMessage)
      await sentReport2(mess)
    }

    const sentReport2 = async (x) => {
      let userone1 = await axios.get(
        `https://backendmusclefit.onrender.com/users/${user.email}`
      );
      userone1 = userone1.data;
      let newUser = { ...userone1, message: [...userone1.message, x] };
  
      let updatedUser = await axios.patch(
        `https://backendmusclefit.onrender.com/users`,
        newUser
      );
      console.log("updatedUser:", updatedUser);
    };

    useEffect(()=>{
      axios.get(`https://backendmusclefit.onrender.com/users/${user.email}`)
      .then(res=>setNewData(res.data.message))
    },[newData])

  return (
    <Box>
      Messages
      <Flex>
        <Box w={"80%"}>
        <Input onChange={(e)=>setUserMesssage(e.target.value)} placeholder='Please sync with jefit app before posting messages' />
        </Box>
        <Spacer/>
        <Box>
          <Button onClick={()=>saveMessage(userMessage)} size={"sm"} variant='outline' colorScheme='teal' >Post</Button><br/>
          <Checkbox ><Text fontSize={"10px"} > Private</Text></Checkbox>
          
        </Box>

      </Flex>
      <Box border="1px solid blue" style={{borderRadius:"15px"}}>
          {newData?.map((el,i)=>(
            <Text fontSize={"lg"} /* border="1px solid yellow" */ style={{borderRadius:"15px",color:"#00ff2a"}}  key={i} >{el} </Text>
          ))}
      </Box>

    </Box>
  )
}

export default Messages