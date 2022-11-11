import { Box, Center, Container, Flex, Grid, GridItem, Square,Text,Image } from "@chakra-ui/react"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsFacebook,BsTwitter} from "react-icons/bs"
import BoxCrouser from "../components/BoxCrouser"
import { Plans } from "../components/Plans"
import { ProgressTracking } from "../components/ProgressTracking"
import { SmartWatchIntegration } from "../components/SmartWatchIntegration"
// import  Example  from "../components/Carousel"
import { WorkoutTracking } from "../components/WorkoutTracking"

export const Home=()=>{

    return <>
         <Container  maxW='100%' bg='#184FA3' pt={20} >
                    <Flex color='white' direction={{ base: 'column', md: 'column',lg:'row' }} w='100%' >
                            <Box  w={{ base: '100%', md: '90%', lg: '58%' ,xl:'60%' ,'2xl':'60%'}} bg='#184FA3'>
                                <Text fontFamily="Montserrat, sans-serif"
                                fontWeight="700"
                                fontSize="48px"
                                lineHeight="60px"
                                color="white"
                                textAlign='left'
                                ml={8}
                                >MANAGE & TRACK  <br /> ALL  YOUR WORKOUTS
                                IN ONE PLACE</Text>

                                <Text fontFamily="Montserrat, sans-serif"
                                fontWeight="700"
                                fontSize="25px"
                                lineHeight="30px"
                                color="white"
                                textAlign='left'
                                ml={8}
                                fontStyle='italic' 
                                mt={5}>
                                #1 Popular Workout Tracking Platform
                                Stay Strong Together
                                </Text>

                                <Grid
                                    h='auto'
                                    w='65%'
                                    templateRows='repeat(2, 1fr)'
                                    templateColumns={'54% 1fr'}
                                    gap={3}
                                    ml={8}
                                    mt={7}
                                    >
                                    <GridItem   >
                                    <a href="https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail" target="_blank">
                                    <Image src='https://www.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png.webp' alt='Google play' h='auto'></Image>

                                        </a>
                                    </GridItem>
                                    <GridItem rowSpan={2}  >
                                        <Image src='https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png.webp' alt='Barcode' w="95%"></Image>
                                    </GridItem>
                                    <GridItem   >
                                        <a href="https://apps.apple.com/app/apple-store/id449810000" target="_blank" >
                                        <Image src='https://www.jefit.com/wp/wp-content/uploads/2021/11/appstore.png.webp'  alt='App store'></Image>

                                        </a>
                                    </GridItem>

                                    </Grid>
                                    <Box bg='#184FA3' w={{ base: '50%', md: '60%', lg: '40%' ,xl:'40%' ,'2xl':'40%'}} height='auto' ml={8} mt={4} mb={12}>
                                        <Flex gap={8}>
                                            <a href='https://www.instagram.com/jefitapp/' target="_blank" style={{width:"10%",height:"auto"}}>
                                            <AiOutlineInstagram style={{width:"100%",height:"auto"}} />

                                            </a>
                                            <a href='https://www.facebook.com/jefitapp/' target='_blank' style={{width:"10%",height:"auto"}}>
                                            <BsFacebook style={{width:"100%",height:"auto"}}/>

                                            </a>
                                            <a href='https://twitter.com/jefitinc' target='_blank' style={{width:"10%",height:"auto"}}>
                                            <BsTwitter style={{width:"100%",height:"auto"}}/>

                                            </a>
                                        </Flex>
                                    </Box>

                            </Box>
                            <Box  w={{ base: '100%', md: '100%', lg: '40%' ,xl:'40%' ,'2xl':'40%' }}  mr='0px' mt={10}>
                               <Image src='https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-1536x1280.webp' alt='main image' w='100%' ></Image>
                            </Box>
            </Flex>
     </Container>
     {/* <Example /> */}

     <WorkoutTracking />
     <SmartWatchIntegration />
     <ProgressTracking/>
     <Plans />
    </>

}