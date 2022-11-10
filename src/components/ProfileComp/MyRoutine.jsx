import React from 'react'
import { Box, Button, Divider, Flex, Image, Input, position, Radio, RadioGroup, Select, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"


const MyRoutine = () => {

    const [gender,setGender] = useState("Male")
    const [units,setUnits] = useState(true)
    const [birth,setBirth] = useState({month:1,day:1,year:1990})


    function genderChange(e){
        setGender(e)
        console.log(gender)
    }

    function birthChange({target}){
      setBirth({...birth,[target.name]:target.value})
      console.log(birth)
    }


/* save profile button */
    const saveData = () => {
      console.log("done")
    }







  return (
        <Box>
            <Text>Setup Your Profile</Text>
            <Divider mt="3px" mb="3px"  orientation='horizontal' style={{color:"red",size:"20"}} />
            <hr color="black" size="50px" />
            <Text fontSize="md" >Date of Birth - <span  style={{fontSize:"10px",color:"#ab9392"}}> (Age is required to calculate your BMI) </span> </Text>
            <Flex gap="2%" w="60%" >
                <Select onChange={birthChange} name="month" defaultValue={1} >
                    <option value={1} >January</option>
                    <option value={2} >February</option>
                    <option value={3} >March</option>
                    <option value={4} >April</option>
                    <option value={5} >May</option>
                    <option value={6} >June</option>
                    <option value={7} >July</option>
                    <option value={8} >August</option>
                    <option value={9} >September</option>
                    <option value={10} >October</option>
                    <option value={11} >November</option>
                    <option value={12} >December</option>
                </Select>
                <Select onChange={birthChange}>
                    <option>1</option>
                </Select>
                <Select onChange={birthChange}>
                    <option>1998</option>
                </Select>
            </Flex>
            <Text mt="20px" fontSize="md" >Units of Measurement - <span style={{fontSize:"10px",color:"#ab9392"}}> (A specific unit of measurement is required to record your logs) </span> </Text>
            <RadioGroup onChange={(e)=>e=="1"?setUnits(true):setUnits(false)} defaultValue='1'>
              <Stack spacing={5} direction='row'>
                <Radio colorScheme='blue' value='1'>
                lb/inch
                </Radio>
                <Radio colorScheme='yellow' value='2'>
                kg/cm
                </Radio>
              </Stack>
            </RadioGroup>

            <Text fontSize="md">Height</Text>
            <Input placeholder={units?"69":"0"} w="60px" /> <span style={{fontSize:"14px",color:"#ab9392"}}>{units?"inches":"cm"} </span> <br/>
            <Flex gap="2%" fontSize="sm" h="40px" color="#ab9392" >
            {units && <>   <Box>or pick from here</Box> 
               <Flex gap="2%" >
                <Select>
                    <option>5'</option>
                </Select>
                <Select>
                    <option>9"</option>
                </Select>
                </Flex>
                </>
                }
                 </Flex>

                <Text fontSize="md">Current Weight</Text>
                <Input placeholder="0" w="60px" /><span style={{fontSize:"14px",color:"#ab9392"}}>{units?"lb":"kg"}</span> <br/><br/>

                <Text mt="30px" fontSize="md">Gender</Text>
                <RadioGroup onChange={(e)=>genderChange(e)} defaultValue='Male'>
                  <Stack spacing={5} direction='row'>
                    <Box>
                    <Image h="300px" src="https://www.jefit.com/images/male_setup1.jpg"/>
                    <Radio ml="40%" colorScheme='red' value='Male'>
                      Male
                    </Radio>
                    </Box>
                    <Box>
                    <Image h="300px" src="https://www.jefit.com/images/female_setup1.jpg"/>
                    <Radio ml="40%" colorScheme='green' value='Female'>
                      Female
                    </Radio>
                    </Box>
                  </Stack>
                </RadioGroup>
                <Button onClick={saveData} ml={["30%","110px","125px"]} size="sm" bgColor="blue" >Save Settings</Button>
        </Box>
  )
}

export default MyRoutine