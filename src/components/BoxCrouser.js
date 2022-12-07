import { Box, Button ,Image,Heading,Text} from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"
import { useMedia } from '../MediaQuery/UseMedia';

let varForCrouser = true;

const BoxCrouser = () => {
    const {smallScreen} =  useMedia() 
    const navigate = useNavigate();
    const hstyle = {
        display:"flex",
        overflowX:"hidden",
        scrollBehavior:"smooth",
        borderRadius:"15px",
        
        width:"80%",
        height:"auto",
        margin:"auto",
        position:"relative",
        /* justifyContent:"space-around", */
        gap:"20px"
       }

       const boxRef = useRef()
       let box = boxRef.current 

       const paraMeter = !smallScreen?"1600":"683"

    function doIt(){
        if(box.scrollLeft<"170"){
            box.scrollLeft = 870
        } else{
            box.scrollLeft = box.scrollLeft - 170
        }
    }
    function doIt2(){
        if(box.scrollLeft>paraMeter){
            box.scrollLeft = 0
        } else {
            box.scrollLeft = box.scrollLeft + 170
        }
        console.log(box.scrollLeft)
    }

    function runIt(){
        if(varForCrouser){
        setInterval(() => {
                doIt2()
        }, 1500);
        varForCrouser = false
    }
    }
    
    // useEffect(()=>{
    //     if(varForCrouser){
    //         setInterval(() => {
    //                 doIt2()
    //         }, 3500);
    //         varForCrouser = false
    //     }
    // },[])

    //ffggzxszd sadfsssasasdsdsadv sdsadsc asd

    const handleClick1=()=>{
        window.open(
            "https://www.jefit.com/community/",
            '_blank' // <- This is what makes it open in a new window.
          );

    }

    const HandleClick2=()=>{
       navigate("/signup")
    }


  return (
    <Box mt={16}>
        {/* <Button onClick={doIt} >left</Button>
        <Button onClick={doIt2}>right</Button> */}
                <Heading as='h3' size='xl' color='#2F373D'>CONNECT WITH OVER 10 MILLION MUSCLEFIT MEMBERS</Heading>

                <Text 
        fontFamily='"DM Sans", sans-serif'
        fontSize='18px'
        fontWeight='600'
        lineHeight='25px'
        color='#2f373d'
        mt={6}
        ml={8}
        mr={10}
        mb={4}
        >As the most active workout community, we invite you and your friends to join us and support each other.</Text>

        <Box id="hello" onMouseEnter={runIt}  ref={boxRef} style={hstyle}>
            <Box className="look" style={{width:"20%",height:"100%" }} >
                <Image  borderRadius="8px" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/15members-150x150.png.webp" alt="1"></Image>
            </Box>
            <Box className="look" style={{width:"20%",height:"100%" }} >
                <Image  borderRadius="8px" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/20members-150x150.png.webp" alt="2"></Image>
            </Box>
            <Box className="look" style={{width:"20%",height:"100%" }} >
                <Image  borderRadius="8px" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/7members-150x150.png.webp" alt="3"></Image>
            </Box>
            <Box className="look" style={{width:"20%",height:"100%" }} >
                <Image  borderRadius="8px" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/12members-150x150.png.webp" alt="4"></Image>
            </Box>
            <Box className="look" style={{width:"20%",height:"100%" }} >
                 <Image borderRadius="8px"  src="https://www.jefit.com/wp/wp-content/uploads/2021/11/18members-150x150.png.webp" alt="5"></Image>

            </Box>
            <Box className="look" style={{width:"20%",height:"100%" }} >
                 <Image borderRadius="8px"  src="https://www.jefit.com/wp/wp-content/uploads/2021/11/8members-150x150.png.webp" alt="6"></Image>

            </Box>
            <Box className="look" style={{width:"20%",height:"100%" }} >
                   <Image borderRadius="8px" ge src="https://www.jefit.com/wp/wp-content/uploads/2021/11/19members-150x150.png.webp" alt="7"></Image>

            </Box>
            <Box className="look" style={{width:"20%",height:"100%" }} >
                <Image  borderRadius="8px" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/15members-150x150.png.webp" alt="8"></Image>

            </Box>
            <Box className="look" style={{width:"20%",height:"100%" }} >
                <Image  borderRadius="8px" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/20members-150x150.png.webp" alt="9"></Image>

            </Box>
            <Box className="look" style={{width:"20%",height:"100%" }} >
                 <Image borderRadius="8px"  src="https://www.jefit.com/wp/wp-content/uploads/2021/11/7members-150x150.png.webp" alt="10"></Image>

            </Box>
            <Box className="look" style={{width:"20%",height:"100%" }} >
                <Image  borderRadius="8px" src="https://www.jefit.com/wp/wp-content/uploads/2021/11/12members-150x150.png.webp" alt="4"></Image>
            </Box>
            <Box className="look" style={{width:"20%",height:"100%" }} >
                 <Image borderRadius="8px"  src="https://www.jefit.com/wp/wp-content/uploads/2021/11/18members-150x150.png.webp" alt="5"></Image>

            </Box>
        </Box>
        <Box>
        <Button onClick={handleClick1} mt={4} mr={4}  pl={6} pr={6}  variant='solid' bg='#39B7FF' color='white' fontFamily='Montserrat, sans-serif' fontSize='20px'  style={{fontWight:'700',borderRadius:"20px"}}>TRENDING TOPICS</Button>
        <Button onClick={HandleClick2} mt={6} ml={4} pl={8} pr={8}  variant='solid' bg='#39B7FF' color='white' fontFamily='Montserrat, sans-serif' fontSize='20px'  style={{fontWight:'700',borderRadius:"20px"}}>JOIN NOW</Button>

        </Box>

    </Box>
  )
}

export default BoxCrouser