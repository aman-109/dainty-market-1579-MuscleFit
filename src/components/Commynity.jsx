import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";


export default function Community() {


    return (
        <Flex
            w={{base:"90%", md:"90%",lg:"70%"}} 
            justifyContent="center" 
            margin="auto"
            flexDirection="column"
            gap="10px"
        >
            <Text 
                fontSize="28px" 
                as="b"
            >
                Jefit Community Members
            </Text>
            <Text 
                fontSize="20px"
                color="rgb(101,108,117)"
            >
                Check out some of the latest posts from the community and stay strong together!
            </Text>
            <Flex
                w={{base:"90%",md:"90%",lg:"70%"}}
                border="1px solid #ccc"
                margin="auto"
                fontSize="22px"
                p="10px"
                flexDirection="column"
                // alignItems="flex-start"
                textAlign="left"
                gap="10px"
                color="rgb(101,108,117)"
            >
                <Text>
                    Question and Answers from the Jefit Community
                </Text>
                <Text
                    _hover={{color:"blue.400"}}
                    textDecoration="underline"
                >
                    What are people's thoughts on working out twice a day?
                </Text>
                <Text
                    _hover={{color:"blue.400"}}
                    textDecoration="underline"
                >
                    If I’m looking at bulking, is it good to do light cardio on the rest days?
                </Text>
                <Text
                    _hover={{color:"blue.400"}}
                    textDecoration="underline"
                >
                    Simple advice for nutrition to lose fat.
                </Text>
                <Text
                    _hover={{color:"blue.400"}}
                    textDecoration="underline"
                >
                    Anyone have a good way to tell if you are gaining muscle or fat?
                </Text>
                <Text
                    _hover={{color:"blue.400"}}
                    textDecoration="underline"
                >
                    Doing strength training, bulking. Do you take a week off?
                </Text>
                <Text
                    _hover={{color:"blue.400"}}
                    textDecoration="underline"
                >
                    If you lift less weight for a muscle group one day of the week, does that make the workout pointless in terms of muscle hypertrophy?
                </Text>
                <Text
                    _hover={{color:"blue.400"}}
                    textDecoration="underline"
                >
                    I’ve been on creatine before.
                </Text>
                <Text
                    _hover={{color:"blue.400"}}
                    textDecoration="underline"
                >
                    I need help finding a successful routine.
                </Text>
                <Text
                    _hover={{color:"blue.400"}}
                    textDecoration="underline"
                >
                    Anyone have any tips on recognizing they need a deload before your body makes it clear?
                </Text>

                <Text
                    _hover={{color:"blue.400"}}
                    textDecoration="underline"
                >
                    So I've been back in the gym for 5 months (after a few years of not going).
                </Text>
            </Flex>
            <Text
                fontSize="28px"
                color="rgb(101,108,117)"
            >
                Jefit Members Stories
            </Text>
            <Grid 
                templateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)", lg:"repeat(4,1fr)"}}
                w={{base:"90%",md:"80%",lg:"70%"}}
                margin="auto"
                gap="10px"
            >
                <Box
                    w="100%"
                    h="200px"
                >
                    <Image 
                        src="https://www.jefit.com/forum/attachment.php?attachmentid=772451"
                        w="100%"
                        h="90%"
                    />
                    <Text>Noels.journey</Text>
                </Box>
                <Box
                    w="100%"
                    h="200px"
                >
                    <Image 
                        src="https://www.jefit.com/forum/attachment.php?attachmentid=788113"
                        w="100%"
                        h="90%"
                    />
                    <Text>fitblitz123</Text>
                </Box>
                <Box
                    w="100%"
                    h="200px"
                >
                    <Image 
                        src="https://www.jefit.com/forum/attachment.php?attachmentid=772346"
                        w="100%"
                        h="90%"
                    />
                    <Text>Mighty.MellO</Text>
                </Box>
                <Box
                    w="100%"
                    h="200px"
                >
                    <Image 
                        src="https://www.jefit.com/forum/attachment.php?attachmentid=784248"
                        w="100%"
                        h="90%"
                    />
                    <Text>SteveGold</Text>
                </Box>
                <Box
                    w="100%"
                    h="200px"
                >
                    <Image 
                        src="https://www.jefit.com/forum/attachment.php?attachmentid=779935"
                        w="100%"
                        h="90%"
                    />
                    <Text>JeremyMcJunkin</Text>
                </Box>
                <Box
                    w="100%"
                    h="200px"
                >
                    <Image 
                        src="https://www.jefit.com/forum/attachment.php?attachmentid=783169"
                        w="100%"
                        h="90%"
                    />
                    <Text>mattyjm-hew</Text>
                </Box>
                <Box
                    w="100%"
                    h="200px"
                >
                    <Image 
                        src="https://www.jefit.com/forum/attachment.php?attachmentid=790457"
                        w="100%"
                        h="90%"
                    />
                    <Text>Shadowed_31</Text>
                </Box>
                <Box
                    w="100%"
                    h="200px"
                >
                    <Image 
                        src="https://www.jefit.com/forum/attachment.php?attachmentid=741563"
                        w="100%"
                        h="90%"
                    />
                    <Text>TammyRaeList</Text>
                </Box>
                <Box
                    w="100%"
                    h="200px"
                >
                    <Image 
                        src="https://www.jefit.com/forum/attachment.php?attachmentid=786156"
                        w="100%"
                        h="90%"
                    />
                    <Text>hrw</Text>
                </Box>
                <Box
                    w="100%"
                    h="200px"
                >
                    <Image 
                        src="https://www.jefit.com/forum/attachment.php?attachmentid=795768"
                        w="100%"
                        h="90%"
                    />
                    <Text>kcmmud</Text>
                </Box>
                <Box
                    w="100%"
                    h="200px"
                >
                    <Image
                        src="https://www.jefit.com/forum/attachment.php?attachmentid=778669"
                        w="100%"
                        h="90%"
                    />
                    <Text>BecD58</Text>
                </Box>
                <Box
                    w="100%" 
                    h="200px"
                >
                    <Image 
                        src="https://www.jefit.com/forum/attachment.php?attachmentid=786261"
                        w="100%"
                        h="90%"
                    />
                    <Text>JSadd87</Text>
                </Box>
            </Grid>
        </Flex>
    )
}