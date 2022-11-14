import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  position,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useMedia } from "../MediaQuery/UseMedia";
/* import "../App.css" */
import { useContext, useEffect, useState } from "react";
import MyRoutine from "../components/ProfileComp/MyRoutine";
import Loading from "../components/Loading";
import LogsPage from "../components/ProfileComp/LogsPage";
import Reports from "../components/ProfileComp/Reports";
import Photos from "../components/ProfileComp/Photos";
import Exercises from "../components/ProfileComp/Exercises";
import Messages from "../components/ProfileComp/Messages";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AppContext";
import axios from "axios";

const init1 = {
  routines: false,
  logs: false,
  reports: false,
  photos: false,
  exercises: false,
  messages: false,
};

export const Profile = () => {
  const { smallScreen, mediumScreen } = useMedia();
  const [section, setSection] = useState({ ...init1, routines: true });
  const { routines, logs, reports, photos, exercises, messages } = section; 
  const [loading, setLoading] = useState(false);
  let photoURL = "https://www.jefit.com/images/noProfilePic220.png"
  let email = "123@gmail.com"
  let uid = "123456"
  const { signUp, user } = useContext(AuthContext);
  if(user){
   photoURL=user.photoURL
   email = user.email
   uid = user.uid
    console.log(user)
  }

  let val = {
    "email":email,
    "password":uid,
    "userDetail":{
        "height":0,
        "weight":0,
        "birth":{
        },
        
        "units":true
    },
    "message":[""],
    "photos":[""],
    "report":[{
    
    }]
}

  const changePages = (value) => {
    setSection({ ...init1 });
    setLoading(true);

    setTimeout(() => {
      setSection({ ...init1, [value]: true });
      setLoading(false);
    }, 2500);
  };
  /* console.log(user); */
  const createUser = async () => {
    let getUset = await axios.post("https://backendmusclefit.onrender.com/users",val)
    console.log("getUser",getUset)
  }

  useEffect(()=>{
    createUser()
  },[])

  return (
    <>
      <Box fontWeight="500" m="auto" w={mediumScreen ? "75%" : "90%"}>
        <Flex mt="100px" direction={!smallScreen ? "column" : "row"}>
          {/* first */}
          <Box m="auto" w={["96%", "40%", "20%"]} mt="50px">
            <Image
              m="auto"
              borderRadius="50%"
              w="100%"
              src={photoURL}
              alt="profilePic"
            />
            <Flex onClick={() => changePages("routines")}>
              <Image
                w="20px"
                mr="5px"
                src="https://www.jefit.com/images/routine_icon_64_64.png"
              />
              <Text fontSize="sm"> My Routines </Text>
            </Flex>
            <Divider
              mt="3px"
              mb="3px"
              orientation="horizontal"
              style={{ color: "red", size: "20" }}
            />

            <Flex onClick={() => changePages("logs")}>
              <Image
                w="20px"
                mr="5px"
                src="https://www.jefit.com/images/main_menu_logs_70_70.png"
              />
              <Text fontSize="sm">My Logs </Text>
            </Flex>
            <Divider mt="3px" mb="3px" orientation="horizontal" />
            <Flex onClick={() => changePages("reports")}>
              <Image
                w="20px"
                mr="5px"
                src="https://www.jefit.com/images/training_reports_icon_70_70.png"
              />
              <Text fontSize="sm"> My Reports </Text>
            </Flex>
            <Divider mt="3px" mb="3px" orientation="horizontal" />
            <Link to={"/profile/photos"}>
              {" "}
              <Flex>
                <Image
                  w="20px"
                  mr="5px"
                  src="https://www.jefit.com/images/pictureicon.png"
                />
                <Text fontSize="sm"> My Photos</Text>
              </Flex>{" "}
            </Link>
            <Divider mt="3px" mb="3px" orientation="horizontal" />
            <Flex onClick={() => changePages("exercises")}>
              <Image
                w="20px"
                mr="5px"
                src="https://www.jefit.com/images/exercise_icon3_64_64.png"
              />
              <Text fontSize="sm"> My Custom Exercises </Text>
            </Flex>
            <Divider mt="3px" mb="3px" orientation="horizontal" />
            <Flex onClick={() => changePages("messages")}>
              <Image
                w="20px"
                mr="5px"
                src="https://www.jefit.com/images/message_icon.png"
              />
              <Text fontSize="sm"> My Messages </Text>
            </Flex>
          </Box>
          {/* second */}
          <Spacer />
          <Box
            m="auto"
            w={["96%", "55%", "55%"]}
            style={{ lineHeight: "40px" }}
            textAlign="left"
            mt="50px"
            fontSize="xl"
          >
            {loading && <Loading />}
            {routines && <MyRoutine />}
            {logs && <LogsPage />}
            {reports && <Reports />}
            {photos && <Photos />}
            {exercises && <Exercises />}
            {messages && <Messages />}
          </Box>

          {/* third */}
          {mediumScreen && (
            <>
              <Spacer />
              <Box textAlign="left" w="20%" mt="50px">
                {!messages && (
                  <>
                    {" "}
                    <Text>Account</Text>
                    <Text style={{ color: "#ab9392" }} fontSize="sm">
                      On this page you will be able to change your profile
                      settings and set the units of measurement used within the
                      application.
                    </Text>
                  </>
                )}
              </Box>
            </>
          )}
        </Flex>
      </Box>
      {/* <BoxCrouser/>  */}
    </>
  );
};

//ghfghgf
