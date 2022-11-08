
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    useColorModeValue,
    Image,
  } from '@chakra-ui/react';
 
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Products</ListHeader>
              <Link href={'#'}>Elite Membership</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Coach</Link>
              </Stack>
              <Link href={'#'}>Signup</Link>
              <Link href={'#'}>Login</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Resource</ListHeader>
              <Link href={'#'}>Workout Plans</Link>
              <Link href={'#'}>Exercise Database</Link>
              <Link href={'#'}>Help Center</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Legal Press</ListHeader>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Use</Link>
              <Link href={'#'}>IP / DMCA Notices</Link>
              <Link href={'#'}>Press & Media</Link>
            </Stack>
            <Stack align={'flex-start'}>
               <ListHeader>Follow Us</ListHeader>
               <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Instagram</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
           <Image src='https://i.ibb.co/ygdmsq6/musclefit.png' width={32}  alt=""/>
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © Copyright © 2010 - 2022 Musclefit, Inc.
          </Text>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            All Rights Reserved.
          </Text>
        </Box>
      </Box>
    );
  }