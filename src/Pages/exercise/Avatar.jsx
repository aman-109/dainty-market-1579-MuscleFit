import { GridItem , Grid, Image, Box, Button } from "@chakra-ui/react";



export default function Avatar(){


    return (
        <Box  position="relative" w={{base:"90vw",md:"75vw",lg:"45vw"}} h={{base:"60vw",md:"50vw",lg:"30vw"}} margin="auto">
            <Grid style={{zIndex:"2"}} position="relative" templateColumns="repeat(4,1fr)" templateRows="repeat(5,1fr)" w="100%" h="100%">
                <GridItem display="flex" alignItems="center" justifyContent="center"><Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Triceps</Button></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center" colSpan={2}></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center"><Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Sholders</Button></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center"><Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Biceps</Button></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center" colSpan={2}></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center"><Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Chest</Button></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center"><Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Back</Button></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center" colSpan={2}></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center"><Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Forearms</Button></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center"><Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Glutes</Button></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center" colSpan={2}></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center"><Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Abs</Button></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center"><Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Lower Legs</Button></GridItem >
                <GridItem display="flex" alignItems="flex-end" justifyContent="center" colSpan={2}><Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Cardio</Button></GridItem >
                <GridItem display="flex" alignItems="center" justifyContent="center"><Button fontSize="12px" h="35px" backgroundColor="rgb(33, 144, 199)" color="white" _hover={{backgroundColor:"rgb(33, 110, 199)"}}>Upper Legs</Button></GridItem >
            </Grid>
            <Image style={{zIndex:"1"}} w="100%" top="0px" h="100%" position="absolute" src="https://i.ibb.co/7J6mGV1/stock-photo-d-rendering-muscle-galloping-body-builder-59708131-transformed.png"></Image>
        </Box>
    )
}