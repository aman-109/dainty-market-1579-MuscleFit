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
  const [temp, setTemp] = useState("biceps"); //by default query
  const [tempData, setTempData] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [limit, setLimit] = useState(8);
  // let totalpages = Math.ceil(data.length / 8);
  // console.log(data);

  // console.log(searchParams.getAll("type"))
  const getExercise = (query, param) => {
    setTemp(query); //setting query for loop next operation
    if (query === "biceps") {
      return axios
        .get(`https://mockserver-uzrw.onrender.com/biceps`, param)
        .then((res) => setData(res.data));
    } else if (query === "chest") {
      return axios
        .get(`https://mockserver-uzrw.onrender.com/chest`, param)
        .then((res) => setData(res.data));
    } else if (query === "glutes") {
      return axios
        .get(`https://mockserver-uzrw.onrender.com/glutes`, param)
        .then((res) => setData(res.data));
    }
  };
  // console.log(page)

  useEffect(() => {
    let getResult;
    if (location.search || data.length === 0) {
      getResult = {
        params: {
          type: searchParams.getAll("type"),
          difficulty: searchParams.getAll("difficulty"),
          equipment: searchParams.getAll("equipment"),
        },
      };
    }

    getExercise(temp, getResult);
    console.log("hi 1st here");
  }, [location.search]);

  // useEffect(() => {
  //   let newData = [];
  //   for (let i = limit * page - limit; i < limit * page; i++) {
  //     if (data.length === i) {
  //       break;
  //     } else {
  //       newData.push(data[i]);
  //     }
  //   }
  //   console.log("hi 2nd here");
  //   setTempData([...newData]);
  // }, [page, location.search]);
  return (
    <Box bg="gray.50" mt="0px">
      <FilterTable getData={getExercise} />
      <Box
        // border={"1px solid"}
        m="auto"
        w={mediumScreen ? "70%" : "100%"}
        // h="90vh"
      >
        <Box borderBottom={"1px solid"} pt={4} pb={1} w="60%">
          <Text fontSize="md" fontWeight="bold" textAlign={"start"}>
           Exercise Database
          </Text>
        </Box>
        {/* result here */}

        {data &&
          data.map((ele, i) => (
            <SingleExercise
              key={ele.id}
              id={ele.id}
              name={ele.name}
              type={ele.type}
              equipment={ele.equipment}
              image={ele.image_urls}
              muscle_group={ele.main_group}
              link={ele.main_group}
            />
          ))}
        <Pagination
          page={page}
          changePage={(value) => setpage(value)}
          total={2}
        />
      </Box>
    </Box>
  );
};

export default Muscle;
