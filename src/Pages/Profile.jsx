import { Box, Divider, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import { useMedia } from "../MediaQuery/UseMedia"

export const Profile = () => {
    const {smallScreen,mediumScreen,largeScreen} = useMedia()
   


    return (
        <>
        <Box m="auto" w={mediumScreen?"75%":"100%"}  >
            <Flex mt="100px" direction={!smallScreen?"column":"row"}  >

                <Box m="auto"  w={!smallScreen?"80%":"20%"}>
                    <Image m="auto" borderRadius="50%" src="https://www.jefit.com/images/noProfilePic220.png" alt="profilePic" />
                <Flex>
                    <Image w="20px" mr="5px" src="https://www.jefit.com/images/routine_icon_64_64.png" />
                    <Text fontSize="sm"  > My Routines </Text>
                </Flex>
                <Divider mt="3px" mb="3px"  orientation='horizontal'/>
                <Flex>
                    <Image w="20px" mr="5px" src="https://www.jefit.com/images/routine_icon_64_64.png" />
                    <Text fontSize="sm"  >My Logs </Text>
                </Flex>
                <Divider mt="3px" mb="3px"  orientation='horizontal'/>
                <Flex>
                    <Image w="20px" mr="5px" src="https://www.jefit.com/images/routine_icon_64_64.png" />
                    <Text fontSize="sm"  > My Reports </Text>
                </Flex>
                <Divider mt="3px" mb="3px"  orientation='horizontal'/>
                <Flex>
                    <Image w="20px" mr="5px" src="https://www.jefit.com/images/routine_icon_64_64.png" />
                    <Text fontSize="sm"  > My Photos</Text>
                </Flex>
                <Divider mt="3px" mb="3px"  orientation='horizontal'/>
                <Flex>
                    <Image w="20px" mr="5px" src="https://www.jefit.com/images/routine_icon_64_64.png" />
                    <Text fontSize="sm"  > My Custom Exercises </Text>
                </Flex>
                <Divider mt="3px" mb="3px"  orientation='horizontal'/>
                <Flex>
                    <Image w="20px" mr="5px" src="https://www.jefit.com/images/routine_icon_64_64.png" />
                    <Text fontSize="sm"  > My Messages </Text>
                </Flex>
                </Box>
                {/* second */}
                <Spacer/>
                <Box  w="55%" >dsfsdfsdfj</Box>

                {/* third */}
                {smallScreen && <><Spacer/>
                <Box  w="20%" >k</Box>
                </> 
                }

            </Flex>
        </Box>
        </>
    )
}