import { Box, Button, Divider, Flex, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Photos = () => {
  return (
    <Flex w={["96%","90%","75%"]} m="auto"  direction={["column","row"]} mt="50px" gap="10px">
      <Box w="80%"  m="auto" textAlign="left">
       <Text color="#2f9dd8"> <span>SUJEETKUMAR5 </span> &gt; <span> Album List</span> </Text>
        <Divider mt="3px" mb="3px"  orientation='horizontal'  />
        <hr color="black"  />
        <SimpleGrid textAlign={"center"} mt="15px" columns={[4]} w="100%" h="400px">
           
        </SimpleGrid>
      </Box>
      <Spacer/>
      {/* second */}
      <Box w={["50%","25%","15%"]} >
        <Button bgColor="#2f9dd8" >Create New Album</Button>
      </Box>

    </Flex>
  )
}

export default Photos