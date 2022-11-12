import { Container, Heading,Text,Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export const WorkoutPlan=()=>{
const navigate=useNavigate()

const HandleClick=()=>{
    navigate("/exercise")
}

    return <>
     <Container maxW='100%'  pt={14} pb={14} mt={16} bg='#F8FBFE'>
        <Heading as='h3' size='xl' color='#2F373D'>WANT TO BUILD YOUR OWN WORKOUT PLAN?</Heading>
        <Text 
        fontFamily='"DM Sans", sans-serif'
        fontSize='20px'
        fontWeight='500'
        lineHeight='25px'
        color='#2f373d'
        mt={8}
        ml={8}
        mr={10}
        >Customize your workout plan with over 3000 free exercises in Jefit Workout Plan Builder. And easily share with friends.</Text>
        <Button onClick={HandleClick} mt={4}  pl={6} pr={6}  variant='solid' bg='#39B7FF' color='white' fontFamily='Montserrat, sans-serif' fontSize='20px'  style={{fontWight:'700',borderRadius:"20px"}}>CREATE WORKOUT PLAN</Button>

        </Container>
    </>
}