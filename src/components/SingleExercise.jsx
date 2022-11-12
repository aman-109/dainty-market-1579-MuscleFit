import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useMedia } from "../MediaQuery/UseMedia";

const SingleExercise = ({ id, name, equipment, type,link, image, muscle_group }) => {
  const { smallScreen, mediumScreen } = useMedia();
  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
  return (
    <Box
    //   border="1px solid blue"
      h="120px"
        mt={1}
      bg={id % 2 == 1 ? "#f4f4f4" : "gray.50"}
    >
      <Flex>
        <Box  ml={3} w="15%" h="120px">
          <Image
            boxSize="100%"
            objectFit="cover"
            src={image[0]}
            alt={name}
          />
        </Box>
        <Box  ml={3} w="15%" h="120px">
          <Image
            boxSize="100%"
            objectFit="cover"
            src={image[1]}
            alt={name}
          />
        </Box>
        <Box  w="40%" p="10px 20px" textAlign="start">
          <Link to={`/exercise/details/${link}-${id}`}>
            <Text
              fontSize={!smallScreen ? "md" : "xl"}
              color="#0E709A"
              mb="5px"
              mt="0px"
            >
              {name}
            </Text>
          </Link>
          <Text fontSize="sm">Main Muscle Group : {capitalizeFirstLetter(muscle_group)} </Text>
          <Text fontSize="sm">Type: {capitalizeFirstLetter(type)} </Text>
          <Text fontSize="sm">Equipement : {capitalizeFirstLetter(equipment)} </Text>
        </Box>
        <Box w="30%" py={10}>
          <Button colorScheme="messenger" size={mediumScreen ? "sm" : "xs"}>
            View History
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleExercise;
