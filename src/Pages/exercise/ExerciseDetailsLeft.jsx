import { Box, Flex, Text } from "@chakra-ui/react";


export default function ExerciseDetailsLeft() {


    return (
        <Box w="100%">
            <Flex flexDirection="column" border="1px solid rgb(128, 95, 105)" backgroundColor="white">
                    <Box color="rgb(128, 95, 105)" padding="5px" borderBottom="1px solid rgb(128, 95, 105)" fontSize="18px" textAlign="left" >Exercise Database</Box>
                    <Flex fontFamily="DM Sans" color="rgb(128, 95, 105)" flexDirection="column" padding="15px">
                        <Flex justifyContent="space-between">
                            <Text fontSize="13px" cursor="pointer" _hover={{color:"blue"}}>Abs</Text>
                            <Text fontSize="13px">(284)</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text fontSize="13px" cursor="pointer" _hover={{color:"blue"}}>Back</Text>
                            <Text fontSize="13px">(138)</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text fontSize="13px" cursor="pointer" _hover={{color:"blue"}}>Biceps</Text>
                            <Text fontSize="13px">(116)</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text fontSize="13px" cursor="pointer" _hover={{color:"blue"}}>Chest</Text>
                            <Text fontSize="13px">(139)</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text fontSize="13px" cursor="pointer" _hover={{color:"blue"}}>Forearm</Text>
                            <Text fontSize="13px">(51)</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text fontSize="13px" cursor="pointer" _hover={{color:"blue"}}>Glutes</Text>
                            <Text fontSize="13px">(26)</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text fontSize="13px" cursor="pointer" _hover={{color:"blue"}}>Shoulders</Text>
                            <Text fontSize="13px">(207)</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text fontSize="13px" cursor="pointer" _hover={{color:"blue"}}>Triceps</Text>
                            <Text fontSize="13px">(109)</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text fontSize="13px" cursor="pointer" _hover={{color:"blue"}}>Upper Legs</Text>
                            <Text fontSize="13px">(176)</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text fontSize="13px" cursor="pointer" _hover={{color:"blue"}}>Lower Legs</Text>
                            <Text fontSize="13px">(43)</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text fontSize="13px" cursor="pointer" _hover={{color:"blue"}}>Cardio</Text>
                            <Text fontSize="13px">(19)</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text fontSize="13px" cursor="pointer" _hover={{color:"blue"}}>All</Text>
                            <Text fontSize="13px">(1309)</Text>
                        </Flex> 
                    </Flex>
                </Flex>
                <Flex mt="10px" flexDirection="column" border="1px solid rgb(128, 95, 105)" backgroundColor="white">
                    <Box color="rgb(128, 95, 105)" padding="5px" borderBottom="1px solid rgb(128, 95, 105)" fontSize="18px" textAlign="left" >People are also discussing</Box>
                    <Flex fontFamily="DM Sans" textAlign="left" gap="10px" color="rgb(128, 95, 105)" flexDirection="column" padding="15px">
                        <Text fontSize="13px" as="u" cursor="pointer" _hover={{color:"blue"}}>What are people's thoughts on working out twice a day?</Text>
                        <Text fontSize="13px" as="u" cursor="pointer" _hover={{color:"blue"}}>If I'm looking at bulking, is it good to do light cardio on the rest days?</Text>
                        <Text fontSize="13px" as="u" cursor="pointer" _hover={{color:"blue"}}>Simple advice for nutrition to lose fat.</Text>
                        <Text fontSize="13px" as="u" cursor="pointer" _hover={{color:"blue"}}>Anyone have a good way to tell if you are gaining muscle or fat?</Text>
                        <Text fontSize="13px" as="u" cursor="pointer" _hover={{color:"blue"}}>Doing strength training, bulking. Do you take a week off?</Text>
                        <Text fontSize="13px" as="u" cursor="pointer" _hover={{color:"blue"}}>If you lift less weight for a muscle group one day of the week, does that make the workout pointless in terms of muscle hypertrophy?</Text>
                        <Text fontSize="13px" as="u" cursor="pointer" _hover={{color:"blue"}}>I've been on creatine before.</Text>
                        <Text fontSize="13px" as="u" cursor="pointer" _hover={{color:"blue"}}>I need help finding a successful routine.</Text>
                        <Text fontSize="13px" as="u" cursor="pointer" _hover={{color:"blue"}}>Anyone have any tips on recognizing they need a deload before your body makes it clear?</Text>
                        <Text fontSize="13px" as="u" cursor="pointer" _hover={{color:"blue"}}>So I've been back in the gym for 5 months (after a few years of not going).</Text>
                    </Flex>
                </Flex>
        </Box>
    )
}