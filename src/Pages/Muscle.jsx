import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useMedia } from "../MediaQuery/UseMedia";
import SingleExercise from "../components/SingleExercise";
import db from "../db.json";
import Pagination from "../components/Pagination";

const Muscle = () => {
  const { smallScreen, mediumScreen, largeScreen } = useMedia();
  const [data, setData] = useState(db.biceps);
  const [page, setpage] = useState(1);

  return (
    <Box bg="gray.50" mt="300px">
      <Box
        // border={"1px solid"}
        m="auto"
        w={mediumScreen ? "70%" : "100%"}
        // h="90vh"
      >
        <Box borderBottom={"1px solid"} pt={4} pb={1} w="60%">
          <Text fontSize="md" fontWeight="bold" textAlign={"start"}>
            Biceps Exercise Database
          </Text>
        </Box>
        {/* result here */}
        {data &&
          data.map((ele, i) => (
            <SingleExercise
              key={i}
              id={i}
              name={ele.name}
              type={ele.type}
              equipment={ele.equipment}
              image={ele.image_urls}
              muscle_group={ele.muscle}
            />
          ))}
        <Pagination
          current={page}
          onChange={(value) => setpage(value)}
          total={3}
        />
      </Box>
    </Box>
  );
};

export default Muscle;
