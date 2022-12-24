import { Box, Flex, Image, Text } from "@chakra-ui/react";




export default function SingleBlog({poster, heading, link, others}) {


    return (
        <Flex 
            w="100%"
            flexDirection="column"
            gap="20px"
            textAlign="left"
            p="50px" borderBottom="1px solid #ccc"
        >
            <Image src={poster} w="100%"/>
            <Text 
                fontSize="30px" 
                as="b" 
                textDecoration="underline" 
                _hover={{textDecoration:"none"}}
            >
                {heading}
            </Text>
            <Text
                color="blue.500"
                textDecoration="underline" 
                _hover={{textDecoration:"none", color:"black"}}
            >
                {link}
            </Text>
            <Text
                color="#ccc"
            >
                {others}
            </Text>
        </Flex>
    )
}