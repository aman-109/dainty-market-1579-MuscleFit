import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { useMedia } from "../MediaQuery/UseMedia"

export const Profile = () => {
    const {smallScreen,mediumScreen,largeScreen} = useMedia()
   


    return (
        <>
        <Box m="auto" w="75%" border="1px solid red" >
            <SimpleGrid columns={3} gap="2%">
                <Box border="1px solid red" w="100%">h</Box>
                <Box border="1px solid red" w="100%" >dsfsdfsdfj</Box>
                <Box border="1px solid red" w="100%" >k</Box>

            </SimpleGrid>
        </Box>
        </>
    )
}