import { Box, Container,Flex,Text,Image, Button } from "@chakra-ui/react"
import {AiFillCheckCircle} from "react-icons/ai"

export const Tracking=()=>{
    return <>
             <Container  maxW='100%'  pt={20} >
                <Text
                 fontFamily="Montserrat, sans-serif"
                
                 fontWeight='700'
                 fontSize='33px'
                 
                 color='#2F373D'
                >JEFIT COVERS ALL OF YOUR WORKOUT NEEDS</Text>


<Flex  direction={{ base: 'column', md: 'column',lg:'row' }} w='100%' mt={6} gap={6}>
<Box  w={{ base: '100%', md: '90%', lg: '50%' ,xl:'50%' ,'2xl':'50%'}} mt={12} ml={6} >
    <Image src='https://www.jefit.com/wp/wp-content/uploads/2022/08/web1-1536x1536.png' alt='tracking' />
</Box>
<Box  w={{ base: '100%', md: '100%', lg: '40%' ,xl:'40%' ,'2xl':'50%' }}  mr='0px' mt={10} ml={6}  >
    <Text 
    fontFamily='Barlow Semi Condensed, sans-serif'
    color='#8BC9DE'
    fontSize='15px'
    fontWeight='400'
    lineHeight='20px'
    mt={16}
    textAlign='left'
    >
        WORKOUT TRACKING
    </Text>
    <Text
    fontFamily="Montserrat, sans-serif"
    fontWeight='750'
    fontSize='35px'
    lineHeight='50px'
    mt={6}
    textAlign='left'

    >
    PERSONALIZE YOUR <br /> WORKOUT PLANS
    </Text>
    <Box mt={10} >
       <Flex gap={3}>
       <AiFillCheckCircle style={{color:"#2C94FE",marginTop:"3%"}} />
        <Text
        fontFamily='"DM Sans", sans-serif'
        fontSize='17px'
        fontWeight='500'
        lineHeight='40px'
        >
        1400+ exercises with instructions
        </Text>
       </Flex>
       <Flex gap={3}>
       <AiFillCheckCircle style={{color:"#2C94FE",marginTop:"3%"}} />
        <Text
        fontFamily='"DM Sans", sans-serif'
        fontSize='17px'
        fontWeight='500'
        lineHeight='40px'
        >
        Pro-designed workout plans
        </Text>
       </Flex>
       <Flex gap={3}>
       <AiFillCheckCircle style={{color:"#2C94FE",marginTop:"3%"}} />
        <Text
        fontFamily='"DM Sans", sans-serif'
        fontSize='17px'
        fontWeight='500'
        lineHeight='40px'
        >
        Support custom exercises
        </Text>
       </Flex>
       <Flex gap={3}>
       <AiFillCheckCircle style={{color:"#2C94FE",marginTop:"3%"}} />
        <Text
        fontFamily='"DM Sans", sans-serif'
        fontSize='17px'
        fontWeight='500'
        lineHeight='40px'
        >
        Flexible workout planning tool
        </Text>
       </Flex>
       <Box bg='green' style={{display:'flex',justifyContent:'flex-start'}}>
       <Button  variant='solid' bg='#39B7FF' color='white' fontFamily='Montserrat, sans-serif' fontSize='20px' fontWight='700' style={{borderRadius:'20px',padding:'1% 10%',}}>JOIN NOW</Button>

       </Box>
        
    </Box>
</Box>
    </Flex>

                </Container>

    </>
}