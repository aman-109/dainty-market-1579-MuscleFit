import { Box, Text } from "@chakra-ui/react"
import { useMedia } from "../MediaQuery/UseMedia"

export const Profile = () => {
    const {smallScreen,mediumScreen,largeScreen} = useMedia()
   


    return (
        <>
        <Box>
            <Text>{!smallScreen?"smaal":!mediumScreen?"mid":!largeScreen?"large":"other"} </Text>
            <Text>{!largeScreen?"large":!mediumScreen?"mid":!smallScreen?"smaal":"other"} </Text>
        </Box>
        </>
    )
}