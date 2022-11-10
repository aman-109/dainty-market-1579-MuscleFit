
import Avatar from "./Avatar"
import FilterTable from "./FilterTable"
import { Box, Text } from "@chakra-ui/react"
import CreateExercise from "./CreateExcercise"


export default function Exercise(){

    return (
        <Box backgroundColor="rgb(252, 252, 252)">
            <Text fontSize={{base:"20px",md:"24px", lg:"28px"}} marginTop="50px" marginBottom="20px">JEFIT Exercise Database</Text>
            <Text fontSize={{base:"16px",md:"20px", lg:"24px"}}>Exercises By Muscle Group</Text>
            <Text fontSize={{base:"14px",md:"18px", lg:"22px"}} marginBottom="30px" color="rgb(131, 136, 143)">Find exercises that work out the muscle groups you're targeting.</Text>
            <Avatar/>
            <FilterTable/>
            <CreateExercise/>
        </Box>
    )
}