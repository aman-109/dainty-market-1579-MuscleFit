import {
    Box,
    Flex,
    Text
  } from "@chakra-ui/react";
  import React from "react";
  import data from "./FooterData";
  
  const Footer = () => {
    return (
      <Box>
        <br />
        <br />
        <Box bgColor="#f6fbff" p="25" pt={20}>
        </Box>
        <Box>
          <Flex
            gap={6}
            align="center"
            justifyContent="space-between"
            w="60%"
            m="auto"
            pt={50}
            filter="auto"
            brightness="100%"
            color="white"
          >
            {data.map((e) => (
              <Flex direction="column" gap={2}>
                {e.arr.map((el) => (
                  <Text
                    fontSize="16px"
                    fontFamily="DM Serif  -700"
                    textAlign={"initial"}
                    
                    color="black"
                  >
                    {el.title}
                    </Text>
                ))}
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
    );
  };
  
  export default Footer;
  