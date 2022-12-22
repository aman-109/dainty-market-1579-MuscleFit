import { Box, Container, Flex, Heading ,Text,Button} from "@chakra-ui/react"
import {AiFillStar} from 'react-icons/ai'
import {TiStarburst} from 'react-icons/ti'
import {FaCrown} from 'react-icons/fa'
import { useNavigate } from "react-router-dom"


export const Plans=()=>{
    const navigate=useNavigate()
    const HandleClick=()=>{
        navigate("/signup")
     }

       const handleClick1=()=>{
        window.open(
            "https://www.jefit.com/elite/",
            '_blank' // <- This is what makes it open in a new window.
          );
       }

    return <>
    <Container maxW='100%'  pt={20} >
        <Heading as='h2' size='xl' color='#2F373D'>PLANS THAT SUIT YOU BEST</Heading>
        <Flex  mt={10} direction={{ base: 'column', md: 'column',lg:'row' }} style={{'justifyContent':'space-evenly'}} gap={{'base':'6','md':'6','lg':'0'}}>
            <Box  pr={6} pl={{ base: '12', md: '12',lg:'8' }} pt={16} bg='#404040' color='white' w={{ base: '90%', md: '50%',lg:'26%' }} style={{'textAlign':'start','borderRadius':'5px'}} m={{ base: 'auto', md: 'auto',lg:'0'}} >
                <AiFillStar style={{'height':'auto','width':'22%'}} />
                <Heading as='h2' size='xl' mt={8} fontFamily='Montserrat, sans-serif'>FREE</Heading>
                        <Text mt={8}
                        style={{'fontFamily':'"DM Sans", sans-serif','fontSize':'18px','lineHeight':'40px','fontWeight':'400'}}
                        >
                                            Basic
                                            <br />
                            Ads supported <br />
                            Flexible workout planner <br />
                            Top-notch log tracker <br />
                            1400+ exercises library <br />
                            Body stats tracking <br/> tools
                            <br />
                            Support interval training
                </Text>
                <Button onClick={HandleClick} pl={6} pr={6} mt={6} mb={4} variant='solid' bg='#404040' color='white' fontFamily='Montserrat, sans-serif' fontSize='16px'  style={{'fontWight':'400','borderRadius':"20px",'border':'2px solid white'}}>FREE DOWNLOAD</Button>


            </Box>
            <Box  pr={6} pl={{ base: '12', md: '12',lg:'8' }} pt={16} bg='#404040' color='white' w={{ base: '90%', md: '50%',lg:'26%' }} style={{'textAlign':'start','borderRadius':'5px'}} m={{ base: 'auto', md: 'auto',lg:'0'}} >
                <TiStarburst style={{'height':'auto','width':'22%'}} />
                <Heading as='h2' size='xl' mt={8} fontFamily='Montserrat, sans-serif'>Elite
                       <br /> Monthly</Heading>
                <Text mt={8}
                                        style={{'fontFamily':'"DM Sans", sans-serif','fontSize':'18px','lineHeight':'40px','fontWeight':'400'}}

                >
                            $12.99/month <br />
            All BASIC plan features <br />
            No ads <br />
            Comprehensive training reports <br />
            Advanced tracking features  <br />
            Compare records with friends  <br />
            Exercise tips from MUSCLEFIT experts  <br />
            Premium workout plans
            More...
                </Text>
                <Button onClick={handleClick1} pl={4} pr={4} pt={0} pb={0} mt={6} mb={4}  variant='solid' bg='#39B7FF' color='white' fontFamily='Montserrat, sans-serif' fontSize='14px'  style={{'fontWight':'400','borderRadius':"20px"}}>LEARN MORE</Button>
                <Text mt={8}
                    color='#7E8682'
                     style={{'fontFamily':'"DM Sans", sans-serif','fontSize':'18px','lineHeight':'40px','fontWeight':'400'}}

                >
                    $12.99 billed / month
                </Text>
            </Box>
            <Box  pr={6} pl={{ base: '12', md: '12',lg:'8' }} pt={16} bg='#404040' color='white' w={{ base: '90%', md: '50%',lg:'26%' }} style={{'textAlign':'start','borderRadius':'5px'}}  m={{ base: 'auto', md: 'auto',lg:'0'}} >
                <FaCrown style={{'height':'auto','width':'22%'}} />
                <Heading as='h2' size='xl' mt={8} fontFamily='Montserrat, sans-serif'>Elite <br/>
Yearly</Heading>
                <Text mt={8}
                                        style={{'fontFamily':'"DM Sans", sans-serif','fontSize':'18px','lineHeight':'40px','fontWeight':'400'}}

                >
                                    $5.83/month <br />
                    All BASIC plan features
                    No ads
                    <br />
                    Comprehensive training reports
                    <br />
                    Advanced tracking features
                    <br />
                    Compare records with friends
                    <br />
                    Exercise tips from MUSCLEFIT experts
                    <br />
                    Premium workout plans
                    <br/>
                    More...
                </Text>
                <Button onClick={handleClick1} pl={4} pr={4} mt={6} mb={4}  variant='solid' bg='#39B7FF' color='white' fontFamily='Montserrat, sans-serif' fontSize='14px'  style={{'fontWight':'400','borderRadius':"20px"}}>LEARN MORE</Button>
                <Text mt={8}
                mb={4}
                    color='#7E8682'
                     style={{'fontFamily':'"DM Sans", sans-serif','fontSize':'18px','lineHeight':'36px','fontWeight':'400'}}

                >
                    Save 55%, $69.99 billed / year
                </Text>
            </Box>
        </Flex>
    </Container>
    </>
}