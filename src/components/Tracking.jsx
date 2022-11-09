import { Box, Container,Flex,Text,Image } from "@chakra-ui/react"


export const Tracking=()=>{
    return <>
             <Container  maxW='100%'  pt={20} >
                <Text
                 fontFamily="Montserrat, sans-serif"
                
                 fontWeight='700'
                 fontSize='33px'
                 
                 color='#2F373D'
                >JEFIT COVERS ALL OF YOUR WORKOUT NEEDS</Text>


<Flex  direction={{ base: 'column', md: 'column',lg:'row' }} w='100%' mt={6}>
<Box  w={{ base: '100%', md: '90%', lg: '50%' ,xl:'50%' ,'2xl':'50%'}} mt={12} ml={6}>
    <Image src='https://www.jefit.com/wp/wp-content/uploads/2022/08/web1-1536x1536.png' alt='tracking' />
</Box>
<Box  w={{ base: '100%', md: '100%', lg: '50%' ,xl:'50%' ,'2xl':'50%' }}  mr='0px' mt={10} ml={6} >
    <Text 
    fontFamily='Barlow Semi Condensed, sans-serif'
    color='#8BC9DE'
    fontSize='15px'
    fontWeight='400'
    lineHeight='20px'
    mt={12}
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
</Box>
    </Flex>

                </Container>

    </>
}