import { Box, Container,Flex,Text,Image,Button } from "@chakra-ui/react"
import {AiFillCheckCircle} from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
export const SmartWatchIntegration=()=>{
const navigate=useNavigate()
    const HandleClick=()=>{
        navigate("/signup")
     }

    return <Container maxW='100%'  pt={20}>

<Flex  direction={{ base: 'column-reverse', md: 'column-reverse',lg:'row-reverse' }} w='100%' mt={6}>
<Box  w={{ base: '100%', md: '90%', lg: '50%' ,xl:'50%' ,'2xl':'50%'}} mt={12} ml={{ base: '0', md: '0', lg: '6' ,xl:'6' ,'2xl':'6' }}>
    <Image src='https://www.jefit.com/wp/wp-content/uploads/2022/08/web2-1536x1536.png' alt='tracking' />
</Box>
<Box  w={{ base: '100%', md: '100%', lg: '45%' ,xl:'40%' ,'2xl':'40%' }}   mt={10} ml={{ base: '0', md: '0', lg: '4' ,xl:'6' ,'2xl':'6' }}  pl={{base:'16'}} >
    <Text 
    fontFamily='Barlow Semi Condensed, sans-serif'
    color='#8BC9DE'
    fontSize='15px'
    style={{fontWeight:'700'}} 
    lineHeight='20px'
    mt={12}
    textAlign='left'
    >
        SMART WATCH INTEGRATION
    </Text>
    <Text
    fontFamily="Montserrat, sans-serif"
    style={{fontWeight:'700'}} 
    fontSize='35px'
    lineHeight='50px'
    mt={6}
    textAlign='left'

    >
   TRAIN & LOG SEAMLESSLY IN GYM AND HOME
    </Text>
    <Box mt={10} >
       <Flex gap={3}>
       <AiFillCheckCircle style={{color:"#2C94FE",marginTop:"3%"}} />
        <Text
        fontFamily='"DM Sans", sans-serif'
        fontSize='17px'
        style={{fontWeight:'700'}} 
        lineHeight='40px'
        >
        Log training with one-click
        </Text>
       </Flex>
       <Flex gap={3}>
       <AiFillCheckCircle style={{color:"#2C94FE",marginTop:"3%"}} />
        <Text
        fontFamily='"DM Sans", sans-serif'
        fontSize='17px'
        style={{fontWeight:'700'}} 
        lineHeight='40px'
        >
        Control rest time easily
        </Text>
       </Flex>
       <Flex gap={3}>
       <AiFillCheckCircle style={{color:"#2C94FE",marginTop:"3%"}} />
        <Text
        fontFamily='"DM Sans", sans-serif'
        fontSize='17px'
        style={{fontWeight:'700'}} 
        lineHeight='40px'
        >
        Available on mobile and watch
        </Text>
       </Flex>
       <Flex gap={3}>
       <AiFillCheckCircle style={{color:"#2C94FE",marginTop:"3%"}} />
        <Text
        fontFamily='"DM Sans", sans-serif'
        fontSize='17px'
        style={{fontWeight:'700'}} 
        lineHeight='40px'
        >
        Available on mobile and watch
        </Text>
       </Flex>
       <Box mt={6} style={{display:'flex',justifyContent:'flex-start'}}>
       <Button onClick={HandleClick} pl={6} pr={6}  variant='solid' bg='#39B7FF' color='white' fontFamily='Montserrat, sans-serif' fontSize='20px'  style={{fontWight:'700',borderRadius:"20px"}}>JOIN NOW</Button>

       </Box>
</Box>




        
    </Box>



    </Flex>
    </Container>
}