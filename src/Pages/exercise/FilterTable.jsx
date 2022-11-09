import { Box, Button, Checkbox, Flex, Grid, Input } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"



export default function FilterTable() {
    //equipment ############################################################
    const [equipment, setequipment]=useState({}) //equipment
    const [toggle, settoggle]=useState(false) //equipment-all
    function collectequipment(e) {
        if(e.target.checked) {
            setequipment({...equipment, [e.target.value]:true})
        } else {
            setequipment({...equipment, [e.target.value]:false})
        }
    }

    useEffect(()=> {
        deleteequipment()
    },[equipment])
    function deleteequipment(){
        let xx=equipment
        for (let a in xx) {
            if (xx[a]==false) {
                delete xx[a]
            }
        }
        setequipment(xx)
    }
    
    function changetogl() {
        settoggle(!toggle)
    }


    //type #################################################################
    const [type, settype]= useState({}) // types
    function collectetype(e) {
        if(e.target.checked) {
            settype({...type, [e.target.value]:true})
        } else {
            settype({...type, [e.target.value]:false})
            let xx=type
            delete xx[e.target.value]
            settype(type)
        }
    }

    // dificulty ############################################################
    const [diff, setdiff]=useState({}) //difficulty
    function collectdiff(e) {
        if(e.target.checked) {
            setdiff({...diff, [e.target.value]:true})
        } else {
            setdiff({...diff, [e.target.value]:false})
            let xx=diff
            delete xx[e.target.value]
            setdiff(diff)
        }
    }

    console.log(equipment, type, diff)



    return (
        <Box fontSize="12px" w={{base:"80%", md:"70%", lg:"60%"}} margin="auto">
            <Flex paddingTop="20px" justifyContent="center">
                <Button backgroundColor="rgb(33, 144, 199)" color="white" fontSize="12px" h="35px" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>View All Exercise</Button></Flex>
            <Flex>
                <Grid w="50%" templateColumns={{base:"repeat(1,1fr)", md:"repeat(2, 1fr)", lg:"repeat(3,1fr)"}} alignItems="center">
                    <Box>
                        Muscles
                    </Box>
                    <Flex flexDirection="column" alignItems="flex-start">
                        <NavLink>All</NavLink>
                        <NavLink>Abs</NavLink>
                        <NavLink>Back</NavLink>
                        <NavLink>Biceps</NavLink>
                        <NavLink>Chest</NavLink>
                        <NavLink>Forearm</NavLink>
                    </Flex>
                    <Flex flexDirection="column" alignItems="flex-start">
                        <NavLink>Glutes</NavLink>
                        <NavLink>Sholders</NavLink>
                        <NavLink>Triceps</NavLink>
                        <NavLink>Upper Legs</NavLink>
                        <NavLink>Lower Legs</NavLink>
                        <NavLink>Cardio</NavLink>
                    </Flex>
                </Grid>
                <Grid w="50%" templateColumns={{base:"repeat(1,1fr)", md:"repeat(2, 1fr)", lg:"repeat(3,1fr)"}} alignItems="center">
                    <Box>Equipment</Box>
                    <Flex flexDirection="column" alignItems="flex-start">
                        <Box>
                            <input type="checkbox" name="All" className="all" value="All" onChange={()=>changetogl()}/>
                            <label htmlFor="All">All</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Bands" checked={equipment.Bands==true || toggle} className="equipment" value="Bands" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Bands">Bands</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Barbell" checked={equipment.Barbell==true || toggle} className="all" value="Barbell" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Barbell">Barbell</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Bench" checked={equipment.Bench==true || toggle} className="all" value="Bench" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Bench">Bench</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Body Only" checked={equipment.BodyOnly==true || toggle==true} className="all" value="BodyOnly" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Body Only">Body Only</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Dumbell" checked={equipment.Dumbell==true || toggle==true} className="all" value="Dumbell" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Dumbell">Dumbell</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Exercise Ball" checked={equipment.ExerciseBall==true || toggle==true} className="all" value="ExerciseBall" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Exercise Ball">Exercise Ball</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Ez - Bar" checked={equipment.EzBar==true || toggle==true} className="all" value="EzBar" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Ez - Bar">Ez - Bar</label>
                        </Box>
                    </Flex>
                    <Flex flexDirection="column" alignItems="flex-start">
                        <Box>
                            <input type="checkbox" name="Foam Roll" checked={equipment.FoamRoll==true || toggle==true} className="all" value="FoamRoll" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Foam Roll">Foam Roll</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Kettlebell" checked={equipment.Kettlebell==true || toggle==true} className="equipment" value="Kettlebell" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Kettlebell">Kettlebell</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Machine - Cardio" checked={equipment.MachineCardio==true || toggle==true} className="all" value="MachineCardio" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Machine - Cardio">Machine - Cardio</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Machine - Strength" checked={equipment.MachineStrength==true || toggle==true} className="all" value="MachineStrength" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Machine - Strength">Machine - Strength</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Other" checked={equipment.Other==true || toggle==true} className="all" value="Other" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Other">Other</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Pull Bar" checked={equipment.PullBar==true || toggle==true} className="all" value="PullBar" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Pull Bar">Pull Bar</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Weight Plate" checked={equipment.WeightPlate==true || toggle==true} className="all" value="WeightPlate" onChange={(e)=>collectequipment(e)}/>
                            <label htmlFor="Weight Plate">Weight Plate</label>
                        </Box>
                    </Flex>
                </Grid>
            </Flex>
            <Flex>
                <Grid  w="33%" templateColumns={{base:"repeat(1,1fr)", md:"repeat(2, 1fr)", lg:"repeat(2,1fr)"}} alignItems="center">
                    <Box>Type</Box>
                    <Flex flexDirection="column" alignItems="flex-start">
                        <Box>
                            <input type="checkbox" name="Strength" className="all" value="Strength" onChange={(e)=>collectetype(e)}/>
                            <label htmlFor="Strength">Strength</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Stretching" className="all" value="Stretching" onChange={(e)=>collectetype(e)}/>
                            <label htmlFor="Stretching">Stretching</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Powerlifting" className="all" value="Powerlifting" onChange={(e)=>collectetype(e)}/>
                            <label htmlFor="Powerlifting">Powerlifting</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Olympic Weight Lifting" className="all" value="OlympicWeightLifting" onChange={(e)=>collectetype(e)}/>
                            <label htmlFor="Olympic Weight Lifting">Olympic Weight</label>
                        </Box>
                    </Flex>
                </Grid>
                <Grid  w="33%" templateColumns={{base:"repeat(1,1fr)", md:"repeat(2, 1fr)", lg:"repeat(2,1fr)"}} alignItems="center">
                    <Box>Difficulty</Box>
                    <Flex flexDirection="column" alignItems="flex-start">
                        <Box>
                            <input type="checkbox" name="Beginner" className="all" value="Beginner" onChange={(e)=>collectdiff(e)}/>
                            <label htmlFor="Beginner">Beginner</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Intermediate" className="all" value="Intermediate" onChange={(e)=>collectdiff(e)}/>
                            <label htmlFor="Intermediate">Intermediate</label>
                        </Box>
                        <Box>
                            <input type="checkbox" name="Expert" className="all" value="Expert" onChange={(e)=>collectdiff(e)}/>
                            <label htmlFor="Expert">Expert</label>
                        </Box>
                    </Flex>
                </Grid>
                <Flex w="33%" alignItems="center">
                    <Input type="text" h="25px"/>
                    <Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Search</Button>
                </Flex>
            </Flex>
        </Box>
    )
}