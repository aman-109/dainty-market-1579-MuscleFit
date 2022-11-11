import { Box, Button, Checkbox, Flex, Input, Spacer, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import {AuthContext} from "../../context/AppContext"



const Messages = () => {
    const [userMessage,setUserMesssage] = useState("")
    const {signUp,user} = useContext(AuthContext)

    function saveMessage(){
      console.log(userMessage)
      console.log(user.photoURL)
    }

  return (
    <Box>
      Messages
      <Flex>
        <Box w={"80%"}>
        <Input onChange={(e)=>setUserMesssage(e.target.value)} placeholder='Please sync with jefit app before posting messages' />
        </Box>
        <Spacer/>
        <Box>
          <Button onClick={saveMessage} size={"sm"} variant='outline' colorScheme='teal' >Post</Button><br/>
          <Checkbox ><Text fontSize={"10px"} > Private</Text></Checkbox>
          
        </Box>

      </Flex>

    </Box>
  )
}

export default Messages