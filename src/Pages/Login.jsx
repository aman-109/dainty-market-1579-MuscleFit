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
    
    Heading
    
  } from "@chakra-ui/react";
  import React, { useState } from "react"
  import{signInWithEmailAndPassword} from "firebase/auth"
  import {FcGoogle}from "react-icons/fc"
  import{BsFacebook}from"react-icons/bs"
  import {BsApple} from "react-icons/bs"
  
import { Link,useNavigate } from "react-router-dom";
import { auth, signInwithGoogle } from "./firebase-config";
import{signInFacebook} from "./firebase-config"
  
  
  
  export default function Login() {
    const[u_login_email,setLogin_email]=useState("")
    const[u_login_password,setLogin_password]=useState("")
  const navigate=useNavigate()
    const login=async ()=>{
      try{
        const user=await signInWithEmailAndPassword(auth,u_login_email,u_login_password)
        console.log(user)
        navigate("/profile")
      }catch(err){
        alert(err)
      }
    }
    
    const handleSubmit=(e)=>{
      e.preventDefault()
      
     
      
  }
  
    
    return (
      <Box
        bgImage="url('https://www.jefit.com/images/loginbg.jpg')"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="100%"
        Size="100%"
      >
        <Box align="center"
          color="white"
          fontFamily="Montserrat - 700"
          fontSize="36px"
          fontWeight="700"
          fontStyle="normal"
          h={50}
          display="block">
          <img
                style={{  height: "100px" }}
                src="https://i.ibb.co/ygdmsq6/musclefit.png"
                alt="musclefit logo"
              />
              
        </Box>
        <br/>
              <br/>
        <Flex align="center"  justify="center" m={"auto"} pb={140} h="100vh">
        <Box bg="#ebf7ff" w={400} p={39} rounded="md" textAlign={"center"}>
            <Heading variant={"solid"}>LOG IN</Heading>
            <br />
            <Box>
            </Box>
            <form onSubmit={handleSubmit} >
              <VStack spacing={4} align="flex-start">
                
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    onChange={(e)=>setLogin_email(e.target.value)}
                    
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    onChange={(e)=>setLogin_password(e.target.value)}
                  />
                </FormControl>
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  Remember me?
                </Checkbox>
                <Button type="submit" bg="#50b6ff" width="full" onClick={login}>
                  Login
                </Button>
                <Box alignSelf={"center"}>
                <Text  variant={"ghost"}>Or</Text>
                </Box>
                <Box>
              <Flex gap={5} ml="60px" align={"center"}>
                <Box >
                  <Button onClick={signInwithGoogle} ><FcGoogle/></Button>
                  {/* <Image w={50} borderRadius="10px" src="https://www.jefit.com/images/rg_google.svg"></Image> */}
                </Box>
                <Box>
                  <Button onClick={signInFacebook}><BsFacebook/></Button>
                  {/* <Image w={50} borderRadius="10px"  src="https://www.jefit.com/images/rg_fb.svg"></Image> */}
                </Box>
                <Box>
                  <Button><BsApple/></Button>
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
  
  
  