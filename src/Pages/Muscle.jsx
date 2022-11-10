import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useMedia } from "../MediaQuery/UseMedia";
import SingleExercise from "../components/SingleExercise";
import Pagination from "../components/Pagination";
import FilterTable from "./exercise/FilterTable";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";

const Muscle = () => {
  const { smallScreen, mediumScreen, largeScreen } = useMedia();
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);

  const location = useLocation();
  const [searchParams] = useSearchParams();

  const getExercise = (param) => {
    return axios
      .get("https://mockserver-uzrw.onrender.com/biceps",param)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    let getResult;
    if (location.search || data.length === 0) {
      // console.log("hi route changes")
      getResult = {
        params: {
          type: searchParams.getAll("type"),
        },
      };
    }
    getExercise(getResult);
  }, [location.search]);

  return (
    <Box bg="gray.50" mt="0px">
      <FilterTable />
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
