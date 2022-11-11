import { Box, Button, Flex, Grid, Input } from "@chakra-ui/react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function FilterTable({ getData }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, settype] = useState(searchParams.getAll("type") || []);
  const [difficulty, setDifficulty] = useState(
    searchParams.getAll("difficulty") || []
  );
  const [equipment, setEquipment] = useState(
    searchParams.getAll("equipment") || []
  );

  const handleChange = (e) => {
    const option = e.target.value;
    let newtypeOptions = [...type];
    if (type.includes(option)) {
      newtypeOptions.splice(newtypeOptions.indexOf(option), 1);
    } else {
      newtypeOptions.push(option);
    }
    settype(newtypeOptions);
  };

  const handleChangediff = (e) => {
    const option = e.target.value;
    let newtypeOptions = [...difficulty];
    if (difficulty.includes(option)) {
      newtypeOptions.splice(newtypeOptions.indexOf(option), 1);
    } else {
      newtypeOptions.push(option);
    }
    setDifficulty(newtypeOptions);
  };

  const handleChangeEquipe = (e) => {
    const option = e.target.value;
    let newtypeOptions = [...equipment];
    if (equipment.includes(option)) {
      newtypeOptions.splice(newtypeOptions.indexOf(option), 1);
    } else {
      newtypeOptions.push(option);
    }
    setEquipment(newtypeOptions);
  };

  useEffect(() => {
    if (type && difficulty && equipment) {
      setSearchParams({ type, difficulty, equipment });
    }
  }, [type, difficulty, equipment, setSearchParams]);

  return (
    <Box
      fontSize="12px"
      w={{ base: "80%", md: "70%", lg: "60%" }}
      margin="auto"
    >
      <Flex paddingTop="20px" justifyContent="center">
        <Button
          backgroundColor="rgb(33, 144, 199)"
          color="white"
          fontSize="12px"
          h="35px"
          _hover={{ backgroundColor: "rgb(33, 110, 199)" }}
        >
          View All Exercise
        </Button>
      </Flex>
      <Flex>
        <Grid
          w="50%"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3,1fr)",
          }}
          alignItems="center"
        >
          <Box>Muscles</Box>
          <Flex flexDirection="column" alignItems="flex-start">
            <NavLink>All</NavLink>
            <NavLink onClick={() => getData("abs")}>Abs</NavLink>
            <NavLink onClick={() => getData("back")}>Back</NavLink>
            <NavLink onClick={() => getData("biceps")}>Biceps</NavLink>
            <NavLink onClick={() => getData("chest")}>Chest</NavLink>
            <NavLink onClick={() => getData("forearm")}>Forearm</NavLink>
          </Flex>
          <Flex flexDirection="column" alignItems="flex-start">
            <NavLink onClick={() => getData("glutes")}>Glutes</NavLink>
            <NavLink onClick={() => getData("shoulders")}>Sholders</NavLink>
            <NavLink onClick={() => getData("triceps")}>Triceps</NavLink>
            <NavLink onClick={() => getData("upperlegs")}>Upper Legs</NavLink>
            <NavLink onClick={() => getData("lowerlegs")}>Lower Legs</NavLink>
            <NavLink onClick={() => getData("cardio")}>Cardio</NavLink>
          </Flex>
        </Grid>
        <Grid
          w="50%"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3,1fr)",
          }}
          alignItems="center"
        >
          <Box>Equipment</Box>
          <Flex flexDirection="column" alignItems="flex-start">
            {/* <Box>
                            <input type="checkbox" name="All" className="all" value="All" onChange={()=>changetogl()}/>
                            <label htmlFor="All">All</label>
                        </Box> */}
            <Box>
              <input
                type="checkbox"
                name="Bands"
                checked={equipment.includes("bands")}
                className="equipment"
                value="bands"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Bands">Bands</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Barbell"
                checked={equipment.includes("barbell")}
                className="all"
                value="barbell"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Barbell">Barbell</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Bench"
                checked={equipment.includes("bench")}
                className="all"
                value="bench"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Bench">Bench</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Body Only"
                checked={equipment.includes("bodyonly")}
                className="all"
                value="bodyonly"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Body Only">Body Only</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Dumbell"
                checked={equipment.includes("dumbbell")}
                className="all"
                value="dumbbell"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Dumbbell">Dumbbell</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Exercise Ball"
                checked={equipment.includes("exerciseball")}
                className="all"
                value="exerciseball"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Exercise Ball">Exercise Ball</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Ez - Bar"
                checked={equipment.includes("ezbar")}
                className="all"
                value="ezbar"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Ez - Bar">Ez - Bar</label>
            </Box>
          </Flex>
          <Flex flexDirection="column" alignItems="flex-start">
            <Box>
              <input
                type="checkbox"
                name="Foam Roll"
                checked={equipment.includes("foamroll")}
                className="all"
                value="foamroll"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Foam Roll">Foam Roll</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Kettlebell"
                checked={equipment.includes("kettlebell")}
                className="equipment"
                value="kettlebell"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Kettlebell">Kettlebell</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Machine - Cardio"
                checked={equipment.includes("machinecardio")}
                className="all"
                value="machinecardio"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Machine - Cardio">Machine - Cardio</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Machine - Strength"
                checked={equipment.includes("machinestrength")}
                className="all"
                value="machinestrength"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Machine - Strength">Machine - Strength</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Other"
                checked={equipment.includes("other")}
                className="all"
                value="other"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Other">Other</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Pull Bar"
                checked={equipment.includes("pullbar")}
                className="all"
                value="pullbar"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Pull Bar">Pull Bar</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Weight Plate"
                checked={equipment.includes("weightplate")}
                className="all"
                value="weightplate"
                onChange={handleChangeEquipe}
              />
              <label htmlFor="Weight Plate">Weight Plate</label>
            </Box>
          </Flex>
        </Grid>
      </Flex>
      <Flex>
        <Grid
          w="33%"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2,1fr)",
          }}
          alignItems="center"
        >
          <Box>Type</Box>
          <Flex flexDirection="column" alignItems="flex-start">
            <Box>
              <input
                type="checkbox"
                name="Strength"
                className="all"
                value="strength"
                checked={type.includes("strength")}
                onChange={handleChange}
              />
              <label htmlFor="Strength">Strength</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Stretching"
                className="all"
                value="stretching"
                checked={type.includes("stretching")}
                onChange={handleChange}
              />
              <label htmlFor="Stretching">Stretching</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Powerlifting"
                className="all"
                value="powerlifting"
                checked={type.includes("powerlifting")}
                onChange={handleChange}
              />
              <label htmlFor="Powerlifting">Powerlifting</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Olympic Weight Lifting"
                className="all"
                value="olympicweightLifting"
                checked={type.includes("olympicweightLifting")}
                onChange={handleChange}
              />
              <label htmlFor="Olympic Weight Lifting">Olympic Weight</label>
            </Box>
          </Flex>
        </Grid>
        <Grid
          w="33%"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2,1fr)",
          }}
          alignItems="center"
        >
          <Box>Difficulty</Box>
          <Flex flexDirection="column" alignItems="flex-start">
            <Box>
              <input
                type="checkbox"
                name="Beginner"
                className="all"
                value="beginner"
                checked={difficulty.includes("beginner")}
                onChange={handleChangediff}
              />
              <label htmlFor="Beginner">Beginner</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Intermediate"
                className="all"
                value="intermediate"
                checked={difficulty.includes("intermediate")}
                onChange={handleChangediff}
              />
              <label htmlFor="Intermediate">Intermediate</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="Expert"
                className="all"
                value="expert"
                checked={difficulty.includes("expert")}
                onChange={handleChangediff}
              />
              <label htmlFor="Expert">Expert</label>
            </Box>
          </Flex>
        </Grid>
        <Flex w="33%" alignItems="center">
          <Input type="text" h="25px" />
          <Button
            fontSize="12px"
            h="35px"
            backgroundColor="rgb(33, 144, 199)"
            color="white"
            _hover={{ backgroundColor: "rgb(33, 110, 199)" }}
          >
            Search
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
