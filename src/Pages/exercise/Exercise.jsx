
import Avatar from "./Avatar"
import FilterTable from "./FilterTable"
import { Box, Text } from "@chakra-ui/react"
import CreateExercise from "./CreateExcercise"
import { useNavigate } from "react-router-dom"
import { useMedia } from "../../MediaQuery/UseMedia"


export default function Exercise(){
    const navigate=useNavigate()

    const {smallScreen}=useMedia()

    return (
        <Box backgroundColor="rgb(252, 252, 252)">
            <Text fontSize={{base:"20px",md:"24px", lg:"28px"}} marginTop="50px" marginBottom="20px">JEFIT Exercise Database</Text>
            <Text fontSize={{base:"16px",md:"20px", lg:"24px"}}>Exercises By Muscle Group</Text>
            <Text fontSize={{base:"14px",md:"18px", lg:"22px"}} marginBottom="30px" color="rgb(131, 136, 143)">Find exercises that work out the muscle groups you're targeting.</Text>
            <Avatar/>
            <Box w="100%" position="relative">
                <FilterTable/>
                <Box w="100%" h="100%" position="absolute" top="0" onClick={()=>navigate("/exercise/muscle")}></Box>
            </Box>
            <CreateExercise/>
        </Box>
    )
}