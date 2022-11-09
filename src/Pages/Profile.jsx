import { Box, Button, Divider, Flex, Image, Input, position, Radio, Select, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import { useMedia } from "../MediaQuery/UseMedia"
/* import "../App.css" */
import BoxCrouser from "../components/BoxCrouser"

export const Profile = () => {
    const {smallScreen,mediumScreen,largeScreen} =  useMedia() 
  


    return (
        <>
        <Box  m="auto" w={mediumScreen?"75%":"90%"}  >
            <Flex mt="100px" direction={!smallScreen?"column":"row"}  >
            {/* first */}
                <Box m="auto"   w={["96%","40%","20%"]} mt="50px">
                    <Image m="auto" borderRadius="50%" src="https://www.jefit.com/images/noProfilePic220.png" alt="profilePic" />
                <Flex>
                    <Image w="20px" mr="5px" src="https://www.jefit.com/images/routine_icon_64_64.png" />
                    <Text fontSize="sm"  > My Routines </Text>
                </Flex>
                <Divider mt="3px" mb="3px"  orientation='horizontal'/>
                <Flex>
                    <Image w="20px" mr="5px" src="https://www.jefit.com/images/main_menu_logs_70_70.png" />
                    <Text fontSize="sm"  >My Logs </Text>
                </Flex>
                <Divider mt="3px" mb="3px"  orientation='horizontal'/>
                <Flex>
                    <Image w="20px" mr="5px" src="https://www.jefit.com/images/training_reports_icon_70_70.png" />
                    <Text fontSize="sm"  > My Reports </Text>
                </Flex>
                <Divider mt="3px" mb="3px"  orientation='horizontal'/>
                <Flex>
                    <Image w="20px" mr="5px" src="https://www.jefit.com/images/pictureicon.png" />
                    <Text fontSize="sm"  > My Photos</Text>
                </Flex>
                <Divider mt="3px" mb="3px"  orientation='horizontal'/>
                <Flex>
                    <Image w="20px" mr="5px" src="https://www.jefit.com/images/exercise_icon3_64_64.png" />
                    <Text fontSize="sm"  > My Custom Exercises </Text>
                </Flex>
                <Divider mt="3px" mb="3px"  orientation='horizontal'/>
                <Flex>
                    <Image w="20px" mr="5px" src="https://www.jefit.com/images/message_icon.png" />
                    <Text fontSize="sm"  > My Messages </Text>
                </Flex>
                </Box>
                {/* second */}
                <Spacer/>
                <Box m="auto"  w={["96%","55%","55%"]} style={{lineHeight:"40px"}} textAlign="left" mt="50px" fontSize="xl" >
                    <Text>Setup Your Profile</Text>
                    <Divider mt="3px" mb="3px"  orientation='horizontal'/>
                    <Text fontSize="md" >Date of Birth - <span  style={{fontSize:"10px",color:"#ab9392"}}> (Age is required to calculate your BMI) </span> </Text>
                    <Flex gap="2%" w="60%" >
                        <Select>
                            <option>January</option>
                        </Select>
                        <Select>
                            <option>1</option>
                        </Select>
                        <Select>
                            <option>1998</option>
                        </Select>
                    </Flex>
                    <Text mt="20px" fontSize="md" >Units of Measurement - <span style={{fontSize:"10px",color:"#ab9392"}}> (A specific unit of measurement is required to record your logs) </span> </Text>
                    <Flex w="40%" ><Radio>lb/inch</Radio> <Spacer/> <Radio>kg/cm</Radio></Flex>
                    <Text fontSize="md">Height</Text>
                    <Input placeholder="69" w="60px" /><br/>
                    <Flex gap="2%" fontSize="sm" color="#ab9392" ><Box>or pick from here</Box> 
                        <Flex gap="2%" >
                    <Select>
                            <option>5'</option>
                        </Select>
                        <Select>
                            <option>9''</option>
                        </Select>
                        </Flex>
                         </Flex>

                        <Text fontSize="md">Height</Text>
                        <Input placeholder="0" w="60px" /><br/>

                        <Text mt="30px" fontSize="md">Height</Text>
                        <Flex>
                            <Box>
                                <Image h="300px" src="https://www.jefit.com/images/male_setup1.jpg"/>
                                <Radio ml="50%"></Radio>
                            </Box>
                            <Box>
                                <Image h="300px" src="https://www.jefit.com/images/female_setup1.jpg"/>
                                <Radio ml="50%"></Radio>
                            </Box>
                        </Flex>
                </Box>

                {/* third */}
                {mediumScreen && <><Spacer/>
                <Box textAlign="left"  w="20%" mt="50px" >
                    <Text>Account</Text>
                    <Text style={{color:"#ab9392"}} fontSize="sm">On this page you will be able to change your profile settings and set the units of measurement used within the application.</Text>
                </Box>
                </> 
                }

            </Flex>
        </Box>
        <BoxCrouser/>
        </>
    )
}