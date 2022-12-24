import { Container, Heading, Text, Flex, Box } from "@chakra-ui/react";
export const Coach = () => {
  return (
    <>
      <Container maxW="100%" p={0} mb={8}>
        <Heading
          mt={16}
          fontSize="40px"
          color="#3B3C3F"
          fontFamily="Montserrat, sans-serif"
          fontStyle="italic"
        >
          Personal Coach Mode
        </Heading>
        <Text
          w="65%"
          m="auto"
          mt={6}
          lineHeight="30px"
          fontFamily='"DM Sans", sans-serif'
          fontStyle="normal"
        >
          Expand your personal training business with Personal Coach Mode.
          Reduce your average time spent per client by connecting with fitness
          savvy clients remotely to provide personal workout plans, track their
          workout progress, and provide feedback.
        </Text>
        <button
          style={{
            backgroundColor: "#39B7FF",
            padding: "6px 3%",
            fontFamily: "#Montserrat, sans-serif",
            fontSize: "14px",
            color: "white",
            marginTop: "2%",
          }}
        >
          START 14-DAY FREE TRIAL
        </button>

        <Container maxW="100%" mt={14} p={0}>
          <Flex
            m="auto"
            w={["100%", "100%", "70%", "70%"]}
            justifyContent="space-around"
            alignItems="center"
            flexDirection={["column", "column", "row", "row"]}
          >
            <Box w={["90%", "80%", "45%", "45%"]}>
              <Text fontSize="18px" lineHeight="30px">
                Lower Your Time Spent On Each Client
              </Text>
              <Text
                color="#7E86AA"
                fontFamily='"DM Sans", sans-serif'
                fontStyle="normal"
                lineHeight="30px"
              >
                Quickly and efficiently coach clients via JEFIT allowing you to
                expand your client base without increasing your time invested.
              </Text>
              <Text fontSize="18px" lineHeight="30px">
                Easily Build and Sell Workout Plans
              </Text>
              <Text
                color="#7E86AA"
                fontFamily='"DM Sans", sans-serif'
                fontStyle="normal"
                lineHeight="30px"
              >
                Develop and distribute your premium workout plan with JEFIT’s
                robust exercise and workout plan libraries
              </Text>
              <Text fontSize="18px" lineHeight="30px">
                Build Your Brand
              </Text>
              <Text
                color="#7E86AA"
                fontFamily='"DM Sans", sans-serif'
                fontStyle="normal"
                lineHeight="30px"
              >
                Build a profile that highlights your experience, client results,
                or certifications and attracts future clients.
              </Text>
              <button
                style={{
                  border: "2px solid #39B7FF",
                  color: "#39B7FF",
                  padding: "1px 4px",
                }}
              >
                START HERE
              </button>
            </Box>
            <Box
              w={["90%", "80%", "45%", "45%"]}
              m={["auto", "auto", "", ""]}
              mt={["8", "8", "", ""]}
            >
              <video width="320" height="240" controls>
                <source
                  src="https://www.jefit.com/wp/wp-content/uploads/2020/12/Screen-Recording-2020-12-08-at-1.23.10-PM.mov"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Flex>
        </Container>
      </Container>
    </>
  );
};
