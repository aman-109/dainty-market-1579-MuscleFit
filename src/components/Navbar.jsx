import React, { useState } from 'react'
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import{ChevronDownIcon} from "@chakra-ui/icons"
import { auth } from '../Pages/firebase-config';
import{onAuthStateChanged,signOut}from "firebase/auth"

const Navbar = () => {
  const[user,setUser]=useState({})
  
  
  
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })
  
  const logout=async ()=>{
   try{
    await signOut(auth)
    
   }catch(err){
    alert("Failed To Logout")
   }
    
    
  }
  return (
    <Box >
    <Box bg="#257CFF" h="100" p="4px" >
      <Flex w="90%" m="auto">
        <Box>
          <Link to="/">
            <img
              style={{ backgroundColor: "#257CFF", height: "95px" }}
              src="https://i.ibb.co/ygdmsq6/musclefit.png"
              alt=""
            />
          </Link>
        </Box>
        <Spacer />
        <Flex
          alignSelf="center"
          gap="3.5rem"
          mr="5rem"
          fontFamily="DM Sans"
          fontWeight="400"
          fontSize="18px"
          color="white"
        >
          <Menu > 
          <MenuButton colorScheme='white'  fontSize={"17px"} backgroundColor="#257CFF"   as={Button} rightIcon={<ChevronDownIcon />}>
   Get App
  </MenuButton>
  <MenuList bg="#257CFF">
    <MenuItem><Link href={"https://apps.apple.com/app/apple-store/id449810000"}>Workout App(ios)</Link></MenuItem>
    <MenuItem><Link href={"https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail&pli=1"}>Workout App(Android)</Link></MenuItem>
    </MenuList>
            </Menu> 
            <Menu>
            <MenuButton colorScheme='white' fontSize={"17px"} backgroundColor="#257CFF"   as={Button} rightIcon={<ChevronDownIcon />}>
   Workout Plans
  </MenuButton>
  <MenuList bg="#257CFF">
    <MenuItem><Link to="/prodesignedplans">Pro-designed Plans</Link></MenuItem>
    <MenuItem><Link to="/createmyplan">Create My Plan</Link></MenuItem>
    </MenuList>   
            </Menu>
          <Link to="/exercise">Excercise</Link>
          <Menu>
            <MenuButton colorScheme='white' fontSize={"17px"} backgroundColor="#257CFF"   as={Button} rightIcon={<ChevronDownIcon />}>
   Community
  </MenuButton>
  <MenuList bg="#257CFF">
    <MenuItem><Link to="/musclefit">MuscleFit Community</Link></MenuItem>
    <MenuItem><Link to="/blog">Blog</Link></MenuItem>
    </MenuList>   
            </Menu>
          <Link to="/coach">Coach</Link>
          <Link to="/elite">Elite</Link>
          
         {user?.email}
          
         <Link to="/login" >Login</Link>
         
          
        </Flex>
        <Box alignSelf="center" mr="50px">
        <Button onClick={logout}>Logout</Button>
          <Link to="/signup">
            <Button color="#3CB8FF" w="120px"  m="auto">
              Signup
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
    </Box>
  )
}

export default Navbar

//random