import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ExerciseDetailsLeft from "./ExerciseDetailsLeft"


export default function ExerciseDetails() {
    let k="->"

    return (
        <Box w="100%" backgroundColor="rgb(248, 251, 254)">
        <Flex w={{base:"90%", md:"85%"}} margin="auto" gap="20px" flexDirection={{base:"column", md:"column",lg:"row"}}>
            <Box w={{base:"90%",md:"90%",lg:"20%"}} order={{base:"1", md:"1",lg:"0"}}>
                <ExerciseDetailsLeft/>
            </Box>
            <Box w={{base:"100%", md:"100%", lg:"75%"}}>
                <Flex flexDirection="column">
                    <Flex textAlign="left" fontSize="14px">
                        <Text color="rgb(68, 188, 231)">Upper Legs Exercise Database <span style={{color:"rgb(136, 136, 136)"}}>{k} 90/90 Hamstring Stretch</span> </Text>
                        <Text></Text>
                    </Flex>
                    <Box textAlign="left" borderBottom="1px solid rgb(222, 226, 230)">
                        <Text fontSize="24px" color="rgb(14, 112, 154)">90/90 Hamstring Stretch Images</Text>
                    </Box>
                    <Flex mt="10px" gap="10px" flexDirection={{base:"column", md:"column", lg:"row"}}>
                        <Flex flexDirection="column" w={{base:"90%", md:"90%", lg:"45%"}} gap="10px">
                            <Box border="10px solid rgb(0, 174, 239)">
                                <Text>1</Text>
                                <Image padding="0px 20px" src="https://www.jefit.com/images/exercises/1080_664/2072.jpg"/>
                                <Text>Click to Enlarge</Text>
                            </Box>
                            <Box border="10px solid rgb(0, 174, 239)">
                                <Text>2</Text>
                                <Image src="https://www.jefit.com/images/exercises/1080_664/2073.jpg"/>
                                <Text>Click to Enlarge</Text>
                            </Box>
                        </Flex>
                        <Flex textAlign="left"  flexDirection="column" w={{base:"90%", md:"90%", lg:"50%"}} gap="10px">
                            <Box w="100%" borderBottom="1px solid rgb(222, 226, 230)">
                                <Text color="rgb(119, 119, 119)" fontSize="22px" as="b">Exercise Details</Text>
                            </Box>
                            <Flex textAlign="left" flexDirection="column" fontSize="14px" gap="5px" fontSize="14px" padding="10px">
                                <Text color="rgb(85, 85, 85)"as="b">Main Muscle Group : <span style={{color:"rgb(132, 133, 134)", fontWeight:"400"}}>Abs</span></Text>
                                <Text color="rgb(85, 85, 85)"as="b">Detailed Muscle Group : <span style={{color:"rgb(132, 133, 134)", fontWeight:"400"}}>Back</span></Text>
                                <Text color="rgb(85, 85, 85)"as="b">Other Muscle Groups : <span style={{color:"rgb(132, 133, 134)", fontWeight:"400"}}>Back</span></Text>
                                <Text color="rgb(85, 85, 85)"as="b">Type : <span style={{color:"rgb(132, 133, 134)", fontWeight:"400"}}>Stretching</span></Text>
                                <Text color="rgb(85, 85, 85)"as="b">Mechanics : <span style={{color:"rgb(132, 133, 134)", fontWeight:"400"}}>N/A</span></Text>
                                <Text color="rgb(85, 85, 85)"as="b">Equipment : <span style={{color:"rgb(132, 133, 134)", fontWeight:"400"}}>Exercise Ball</span></Text>
                                <Text color="rgb(85, 85, 85)"as="b">Difficulty : <span style={{color:"rgb(132, 133, 134)", fontWeight:"400"}}>Beginner</span></Text>
                            </Flex>
                            <Button boxShadow='base' color="blue.500" fontWeight="" backgroundColor="white" outline="1px solid rgb(170, 170, 170)" w="fit-content" fontSize="14px" height="35px" _hover={{color:"white", backgroundColor:"rgb(170, 170, 170)", outline:"0px"}}>Track My Progress</Button>
                            <Button boxShadow='base' color="blue.500" fontWeight="" backgroundColor="white" outline="1px solid rgb(170, 170, 170)" w="fit-content" fontSize="14px" height="35px" _hover={{color:"white", backgroundColor:"rgb(170, 170, 170)", outline:"0px"}}>+ Add to Routine</Button>
                            <Button boxShadow='base' color="blue.500" fontWeight="" backgroundColor="white" outline="1px solid rgb(170, 170, 170)" w="fit-content" fontSize="14px" height="35px" _hover={{color:"white", backgroundColor:"rgb(170, 170, 170)", outline:"0px"}}>Record Logs</Button>
                        </Flex>
                    </Flex>
                    <Flex mt="10px" gap="10px" flexDirection={{base:"column", md:"column", lg:"row"}}>
                        <Flex flexDirection="column" w={{base:"90%", md:"90%", lg:"45%"}} gap="10px">
                            <Box textAlign="left" w="100%" borderBottom="1px solid rgb(222, 226, 230)">
                                <Text color="rgb(119, 119, 119)" fontSize="22px" as="b">Targeted Muscle Group</Text>
                            </Box>
                            <Image w="70%" margin="auto" src="https://www.jefit.com/images/exercises/b1.jpg"/>
                        </Flex>
                        <Flex color="rgb(119, 119, 119)" textAlign="left" fontSize="14px" flexDirection="column" w={{base:"90%", md:"90%", lg:"45%"}} gap="10px">
                            <Box textAlign="left" w="100%" borderBottom="1px solid rgb(222, 226, 230)">
                                <Text color="rgb(119, 119, 119)" fontSize="22px" as="b">How To Perform Exercise</Text>
                            </Box>
                            <Text>Steps :</Text>
                            <Text>1.) Start by rolling onto an exercise ball so that your hips are resting on top of the ball.</Text>
                            <Text>2.) Extend your feet out behind you and arms out in front of you on the floor.</Text>
                            <Text>3.) Squeeze with your lower back so that you feel a tension in the muscles.</Text>
                            <Text>4.) Hold onto this position for 15 to 30 seconds and then return back to the starting position.</Text>
                            <Text>5.) Repeat for as many reps and however long you desire.</Text>
                        </Flex>
                    </Flex>
                    <Box w="100%">
                        <Box textAlign="left" w="100%" borderBottom="1px solid rgb(222, 226, 230)">
                            <Text color="rgb(119, 119, 119)" fontSize="22px" as="b">More Back Exercises</Text>
                        </Box>
                        <Grid mt="10px" templateColumns={{base:"repeat(3,1fr)", md:"repeat(4,1fr)", lg:"repeat(6,1fr)"}} fontSize="12px" gap="10px" color="blue.400">
                            <Link>
                                <Box>
                                    <Image src="https://www.jefit.com/images/exercises/1080_664/1452.jpg"/>
                                    <Text>Stability Ball Weighted Hyperextension</Text>
                                </Box>
                            </Link>
                            <Link>
                                <Box>
                                    <Image src="https://www.jefit.com/images/exercises/1080_664/2788.jpg"/>
                                    <Text>Dumbbell One-Arm Pullover</Text>
                                </Box>
                            </Link>
                            <Link>
                                <Box>
                                    <Image src="https://www.jefit.com/images/exercises/1080_664/2248.jpg"/>
                                    <Text>Stability Ball Back Stretch</Text>
                                </Box>
                            </Link>
                            <Link>
                                <Box>
                                    <Image src="https://www.jefit.com/images/exercises/1080_664/3292.jpg"/>
                                    <Text>Mixed Grip Chin-Up</Text>
                                </Box>
                            </Link>
                            <Link>
                                <Box>
                                    <Image src="https://www.jefit.com/images/exercises/1080_664/5316.jpg"/>
                                    <Text>Dumbbell One-Arm Rear Row</Text>
                                </Box>
                            </Link>
                            <Link>
                                <Box>
                                    <Image src="https://www.jefit.com/images/exercises/1080_664/3820.jpg"/>
                                    <Text>Dumbbell Stiff-Leg Deadlift</Text>
                                </Box>
                            </Link>
                        </Grid>
                    </Box>
                    <Box w="100%" mt="20px">
                        <Box textAlign="left" w="100%" borderBottom="1px solid rgb(222, 226, 230)">
                            <Text color="rgb(119, 119, 119)" fontSize="22px" as="b">Most Popular Back Exercises</Text>
                        </Box>
                        <Grid mt="10px" templateColumns={{base:"repeat(3,1fr)", md:"repeat(4,1fr)", lg:"repeat(6,1fr)"}} fontSize="12px" gap="10px" color="blue.400">
                            <Link>
                                <Box>
                                    <Image src="https://www.jefit.com/images/exercises/1080_664/200.jpg"/>
                                    <Text>Barbell Deadlift</Text>
                                </Box>
                            </Link>
                            <Link>
                                <Box>
                                    <Image src="https://www.jefit.com/images/exercises/1080_664/12.jpg"/>
                                    <Text>Barbell Bent-Over Row</Text>
                                </Box>
                            </Link>
                            <Link>
                                <Box>
                                    <Image src="https://www.jefit.com/images/exercises/1080_664/84.jpg"/>
                                    <Text>Cable Seated Row</Text>
                                </Box>
                            </Link>
                            <Link>
                                <Box>
                                    <Image src="https://www.jefit.com/images/exercises/1080_664/332.jpg"/>
                                    <Text>Pull-Up</Text>
                                </Box>
                            </Link>
                            <Link>
                                <Box>
                                    <Image src="https://www.jefit.com/images/exercises/1080_664/344.jpg"/>
                                    <Text>Wide Grip Lat Pulldown</Text>
                                </Box>
                            </Link>
                            <Link>
                                <Box>
                                    <Image src="https://www.jefit.com/images/exercises/1080_664/44.jpg"/>
                                    <Text>Barbell Shrug</Text>
                                </Box>
                            </Link>
                        </Grid>
                    </Box>
                </Flex>
            </Box>
        </Flex>
        </Box>
    )
}