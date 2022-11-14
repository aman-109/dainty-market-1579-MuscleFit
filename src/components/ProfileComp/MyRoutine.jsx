import React, { useContext } from 'react'
import { Box, Button, Divider, Flex, Image, Input, position, Radio, RadioGroup, Select, SimpleGrid, Spacer, Stack, Text, useToast } from "@chakra-ui/react"
import { useState } from "react"
import axios from 'axios'
import { AuthContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

const MyRoutine = () => {
    const {user}=useContext(AuthContext)
    const [gender,setGender] = useState("Male")
    const [units,setUnits] = useState(true)
    const [birth,setBirth] = useState({month:1,day:1,year:1989})
    const [height,setHeight] = useState(0)
    const [weight,setWeight] = useState(0)
    const toast = useToast()
    


    function genderChange(e){
        setGender(e)
        console.log(gender)
    }

    function birthChange({target}){
      setBirth({...birth,[target.name]:+target.value})
      console.log(birth)
    }



/* save profile button */
    const saveData = async() => {
      let newUserData = {
        birth:birth,
        height:height,
        weight:weight,
        gender:gender,
        units:units,
      }
      console.log(newUserData)
      await sentReportOne(newUserData)
      toast({
        title: "Data save successfully",
        description: "Your all information updated successfully",
        status: 'success',
        duration: 6000,
        isClosable: true,
      })

    }





    const sentReportOne = async (x) => {
      let userone = await axios.get(
        `https://backendmusclefit.onrender.com/users/${user.email}`
      );
      userone = userone.data;
      let newUser = { ...userone, userDetail: x };
  
      let updatedUser = await axios.patch(
        `https://backendmusclefit.onrender.com/users`,
        newUser
      );
      console.log("updatedUser:", updatedUser);
    };

  

  return (
        <Box>
            <Text>Setup Your Profile</Text>
            <Divider mt="3px" mb="3px"  orientation='horizontal' style={{color:"red",size:"20"}} />
            <hr color="black" size="50px" />
            <Text fontSize="md" >Date of Birth - <span  style={{fontSize:"10px",color:"#ab9392"}}> (Age is required to calculate your BMI) </span> </Text>
            <Flex gap="2%" w={["70%","100%","60%"]} flexDirection={["column","row"]}>
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
                <Select onChange={birthChange} name="day" defaultValue={1}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                    <option value={21}>21</option>
                    <option value={22}>22</option>
                    <option value={23}>23</option>
                    <option value={24}>24</option>
                    <option value={25}>25</option>
                    <option value={26}>26</option>
                    <option value={27}>27</option>
                    <option value={28}>28</option>
                    {birth.month!=2 || birth.year%4==0  && <option value={29}>29</option>}
                    {birth.month!=2 && <option value={29}>29</option>}
                    {birth.month!=2 && <option value={30}>30</option>}
                    {birth.month!=2 && <option value={31}>31</option>}
                </Select>
                <Select onChange={birthChange} name="year" defaultValue={1989}>
                    <option value={1989} >1989</option>
                    <option value={1990} >1990</option>
                    <option value={1991} >1991</option>
                    <option value={1992} >1992</option>
                    <option value={1993} >1993</option>
                    <option value={1994} >1994</option>
                    <option value={1995} >1995</option>
                    <option value={1996} >1996</option>
                    <option value={1997} >1997</option>
                    <option value={1998} >1998</option>
                    <option value={1999} >1999</option>
                    <option value={2000} >2000</option>
                    <option value={2001} >2001</option>
                    <option value={2002} >2002</option>
                    <option value={2003} >2003</option>
                    <option value={2004} >2004</option>
                    <option value={2005} >2005</option>
                    <option value={2006} >2006</option>
                    <option value={2007} >2007</option>
                    <option value={2008} >2008</option>
                    <option value={2009} >2009</option>
                    <option value={2010} >2010</option>
                    <option value={2011} >2011</option>
                    <option value={2012} >2012</option>
                    <option value={2013} >2013</option>
                    <option value={2014} >2014</option>
                    <option value={2015} >2015</option>
                    <option value={2016} >2016</option>
                    <option value={2017} >2017</option>
                    <option value={2018} >2018</option>
                    <option value={2019} >2019</option>
                    <option value={2020} >2020</option>

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
            <Input onChange={(e)=>setHeight(+e.target.value)} placeholder={units?"69":"0"} w="60px" /> <span style={{fontSize:"14px",color:"#ab9392"}}>{units?"inches":"cm"} </span> <br/>
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
                <Input onChange={(e)=>setWeight(+e.target.value)} placeholder="0" w="60px" /><span style={{fontSize:"14px",color:"#ab9392"}}>{units?"lb":"kg"}</span> <br/><br/>

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