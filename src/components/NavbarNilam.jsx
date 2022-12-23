
import React, { useContext, useState} from 'react'
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import{ChevronDownIcon, HamburgerIcon} from "@chakra-ui/icons"
import { AuthContext,user } from '../context/AppContext';


const stikc={
  position:'-webkit-sticky',
  position:'sticky',
  zIndex:100,
   top:'0'
}

const Navbar = () => {
  
  
  const {user,logOut}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
  
  return (
    <Box style={stikc} zIndex="10000">
    <Box 
    bg="#257CFF" 
    h="auto" 
    p={0} >
      <Flex 
      w="90%" 
      m="auto" 
      p={2} 
      gap={{base:'20',md:'20',lg:'10'}} 
        sx={{
          '@media all and (min-width:0px) and (max-width:987px)':{
           justifyContent:'space-around'
          }
  
  
         }}
      >
         <Box  
         ml={{base:'12',md:'12','lg':'0'}}
         display={{'base':'visible','md':'visible','lg':'none'}}
         >
      <Menu >
  <MenuButton 
  as={Button} 
  w="1px" 
  mt="30%" 
  bg="#257CFF" 
  p={0}>
    <HamburgerIcon ml="0px" w={6} h={6} style={{color:"white"}} />
  </MenuButton>
  <MenuList bg="#257CFF" style={{color:"white"}}>
    <MenuItem>
    <Menu > 
          <MenuButton 
          colorScheme='white' 
          fontFamily='"DM Sans", sans-serif;' 
          fontSize={"13px"} 
          backgroundColor="#257CFF"   as={Button} rightIcon={<ChevronDownIcon />}>
   Get App
  </MenuButton>
  <MenuList bg="#257CFF">
    <MenuItem><Link href={"https://apps.apple.com/app/apple-store/id449810000"}>Workout App(ios)</Link></MenuItem>
    <MenuItem><Link href={"https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail&pli=1"}>Workout App(Android)</Link></MenuItem>
    </MenuList>
            </Menu> 
    </MenuItem>
    <MenuItem>
    <Menu>
            <MenuButton 
            colorScheme='white' 
            fontFamily='"DM Sans", sans-serif;' 
            fontSize={"13px"} 
            backgroundColor="#257CFF"   as={Button} rightIcon={<ChevronDownIcon />}>
   Workout Plans
  </MenuButton>
  <MenuList bg="#257CFF">
    <MenuItem><Link to="/prodesignedplans">Pro-designed Plans</Link></MenuItem>
    <MenuItem><Link to="/createmyplan">Create My Plan</Link></MenuItem>
    </MenuList>   
            </Menu>
    </MenuItem>
    <MenuItem>
    <Box fontFamily='"DM Sans", sans-serif;' fontSize={"15px"} mt={2}  ml={2} mr={2}>
            <Link to="/exercise" >Excercise</Link>

            </Box>
    </MenuItem>
    <MenuItem>
    <Menu>
            <MenuButton 
            colorScheme='white' 
            fontFamily='"DM Sans", sans-serif;'
             fontSize={"13px"} 
             backgroundColor="#257CFF"   as={Button} rightIcon={<ChevronDownIcon />}>
   Community
  </MenuButton>
  <MenuList bg="#257CFF">
    <MenuItem><Link to="/community">MuscleFit Community</Link></MenuItem>
    <MenuItem><Link to="/blog">Blog</Link></MenuItem>
    </MenuList>   
            </Menu>
    </MenuItem>
    <MenuItem>
            <Box  fontSize={"15px"} mt={2} ml={2} mr={4} mb={2}
            fontFamily='"DM Sans", sans-serif'
            >

        <Link to="/coach">Coach</Link>
        </Box>
    
    </MenuItem>
    <MenuItem>
    <Box 
    mt={2} 
    ml={2} 
    mr={4} 
    mb={2} 
    fontFamily='"DM Sans", sans-serif;' fontSize={"15px"} >

<Link to="/profile">Profile</Link>
</Box>
    </MenuItem>
    <MenuItem>
    <Box mt={2}  ml={2} mr={2}
    fontFamily='"DM Sans", sans-serif;' fontSize={"15px"}  >

{!user?<Link to="/login" >Login</Link>:<Button colorScheme='white' variant='ghost' onClick={handleLogout}>Logout</Button>}
</Box>
    </MenuItem>
    
  </MenuList>
</Menu>
      </Box>
        <Box w='10%'>
          <Link to="/">
            <img
              style={{ backgroundColor: "#257CFF", height: "auto" }}
              src="https://i.ibb.co/ygdmsq6/musclefit.png"
              alt=""
            />
          </Link>
        </Box>
       <Box w='70%' alignSelf="center"
       sx={{
        '@media all and (min-width:0px) and (max-width:987px)':{
          display:'none'
        }


       }}
       >
        <Flex
          alignSelf="center"
         gap={2}
          fontFamily="DM Sans"
          fontWeight="400"
          fontSize="18px"
          color="white"
         w='100%'
        >
          <Menu > 
          <MenuButton colorScheme='white' fontFamily='"DM Sans", sans-serif;' fontSize={"13px"} backgroundColor="#257CFF"   as={Button} rightIcon={<ChevronDownIcon />}>
   Get App
  </MenuButton>
  <MenuList bg="#257CFF">
    <MenuItem><Link href={"https://apps.apple.com/app/apple-store/id449810000"}>Workout App(ios)</Link></MenuItem>
    <MenuItem><Link href={"https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail&pli=1"}>Workout App(Android)</Link></MenuItem>
    </MenuList>
            </Menu> 
            <Menu>
            <MenuButton colorScheme='white' 
            fontFamily='"DM Sans", sans-serif;' 
            fontSize={"13px"} 
            backgroundColor="#257CFF"   as={Button} rightIcon={<ChevronDownIcon />}>
   Workout Plans
  </MenuButton>
  <MenuList bg="#257CFF">
    <MenuItem><Link to="/prodesignedplans">Pro-designed Plans</Link></MenuItem>
    <MenuItem><Link to="/createmyplan">Create My Plan</Link></MenuItem>
    </MenuList>   
            </Menu>
            <Box mt={2}  ml={2} mr={2}
             fontFamily='"DM Sans", sans-serif;'
              fontSize={"15px"} >
            <Link to="/exercise" >Excercise</Link>

            </Box>
          <Menu>
            <MenuButton colorScheme='white' 
            fontFamily='"DM Sans", sans-serif;'
             fontSize={"13px"} 
             backgroundColor="#257CFF"   as={Button} rightIcon={<ChevronDownIcon />}>
   Community
  </MenuButton>
  <MenuList bg="#257CFF">
    <MenuItem><Link to="/community">MuscleFit Community</Link></MenuItem>
    <MenuItem><Link to="/blog">Blog</Link></MenuItem>
    </MenuList>   
            </Menu>
            <Box 
            mt={2} 
            ml={2} 
            mr={4} 
            mb={2} 
            fontFamily='"DM Sans", sans-serif;' 
            fontSize={"15px"} >

          <Link to="/coach">Coach</Link>
          </Box>
          <Box mt={2} ml={2} mr={4} mb={2} fontFamily='"DM Sans", sans-serif;' fontSize={"15px"} >

          <Link to="/profile">Profile</Link>
          </Box>
          
        
         <Box mt={2}  ml={2} mr={2} fontFamily='"DM Sans", sans-serif;' fontSize={"15px"}  >

         {!user?<Link to="/login" >Login</Link>:<Button colorScheme='white' variant='ghost' onClick={handleLogout}>Logout</Button>}
         </Box>
        
          
        </Flex>
        </Box>
       
        <Box ml={{base:'0',md:'12',lg:'0'}} alignSelf="center"    >
        
        <Link to="/signup">
          
          <Button  color="#3CB8FF" w="120px"  m="auto" fontFamily='"DM Sans", sans-serif;' fontSize={"13px"} disabled={user}>
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

