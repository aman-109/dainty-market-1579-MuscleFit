import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Text,
    Alert,
    AlertIcon,

    Heading,
    
  } from "@chakra-ui/react";
  import React, { useContext, useState } from "react"
  
  import {FcGoogle}from "react-icons/fc"
  import{BsFacebook}from"react-icons/bs"
  import {BsApple} from "react-icons/bs"
  
import { Link,useNavigate } from "react-router-dom";


import { AuthContext } from "../context/AppContext";
// import { useMediaQuery } from "@chakra-ui/react";
  
  
  
  export default function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, facebookSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true);
      try {
        await logIn(email, password);
        setLoading(false);
        navigate("/profile");
      } catch (err) {
        setLoading(false);
        // if(password.length<=5){
        //   Alert("Password length is small");
        // }
        if (err.code === "User not Found!!!!Please use correct login Credentials") {
          setError(err.message);
          
        } else setError(err.message);
       
      }
    };
    const handleGoogleLogin = async (e) => {
      e.preventDefault();
      try {
     const user=   await googleSignIn();
     console.log(user);
        navigate("/profile");
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const handleFBlogin = async (e) => {
      e.preventDefault();
      try {
       const fbuser= await facebookSignIn();
       console.log(fbuser);
        navigate("/profile");
      } catch (error) {
        console.log(error.message);
      }
    };
  
    
    return (
      <Box 
        bgImage="url('https://www.jefit.com/images/loginbg.jpg')"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="100%"
        Size="100%"
      >
        <Box    
        align="center"
          color="white"
          fontFamily="Montserrat - 700"
          fontSize="36px"
          fontWeight="700"
          fontStyle="normal"
          h={25}
          display="block">
          <img
                style={{  height: "100px" }}
                src="https://i.ibb.co/ygdmsq6/musclefit.png"
                alt="musclefit logo"
              />
              
        </Box>
        <br/>
              <br/>
        <Flex align="center"  justify="center" m={"auto"} pb={140} h={"100vh"} w={["96%","65%","45%"]} >
        <Box bg="#ebf7ff" w={400} p={39} rounded="md" textAlign={"center"}>
            <Heading variant={"solid"}>LOG IN</Heading>
            <br />
            <Box>
            </Box>
            <form onSubmit={handleSubmit} >
            {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
              <VStack spacing={4} align="flex-start">
                
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input direction={["column","row"]}
                  placeholder={"Enter Email Address"}
                   isInvalid
                   errorBorderColor='#50b6ff'
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    onChange={(e) => setEmail(e.target.value)}
                    
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input 
                  placeholder={"Enter Password"}
                  isInvalid
                  errorBorderColor='#50b6ff'
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </FormControl>
                <Checkbox
                isInvalid
                errorBorderColor='#50b6ff'
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  Remember me?
                </Checkbox>
               
                <Button type="submit" bg="#50b6ff" width="full" isLoading={loading} >
                  Login
                </Button>
                <Box alignSelf={"center"}>
                <Text  variant={"ghost"}>Or</Text>
                </Box>
                <Box>
              <Flex gap={5} ml="60px" align={"center"} direction={{ base: 'column', md: 'column',lg:'row' }} >
                <Box >
                  <Button  onClick={handleGoogleLogin} variant='outline' colorScheme={"#50b6ff"}><FcGoogle/></Button>
                  {/* <Image w={50} borderRadius="10px" src="https://www.jefit.com/images/rg_google.svg"></Image> */}
                </Box>
                <Box >
                  <Button onClick={handleFBlogin} variant='outline' colorScheme={"#50b6ff"}><BsFacebook/></Button>
                  {/* <Image w={50} borderRadius="10px"  src="https://www.jefit.com/images/rg_fb.svg"></Image> */}
                </Box>
                <Box >
                  <Button variant='outline' colorScheme={"#50b6ff"}><BsApple/></Button>
                  {/* <Image w={50} borderRadius="10px"  src="https://www.jefit.com/images/rg_apple.svg"></Image> */}
                </Box>
              </Flex>
              <br />
              <Text>New to MuscleFit?{" "}<Link color="teal.500" to="/signup" >Create an account</Link></Text>
              
              </Box>
              
              </VStack>
            </form>
          </Box>
        </Flex>
      </Box>
    );
  }
  
  
  