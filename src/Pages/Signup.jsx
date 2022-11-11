import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  Alert,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { AuthContext } from "../context/AppContext";
import { auth } from "./firebase-config";

export default function Signup() {
  const { googleSignIn, facebookSignIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateUser = useNavigate();

  const signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      console.log(user.email);
      console.log(username);
      navigateUser("/login");
      alert("Welcome ");
    } catch (err) {
      alert(err.message);
    }
    if (password.length <= 5) {
      alert("Please enter a strong password");
    }
  };

  const handleSubmit = (e) => {
    alert("SIGN UP SUCCESSFULL");
  };
  const handlegoogleSignUp = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigateUser("/login");
    } catch (err) {
      Alert(err.message);
    }
  };
  const handleFacebookSignUp = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigateUser("/profile");
    } catch (err) {}
  };

  return (
    <Box
      bgColor="#dbe8f4"
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
        h={50}
        display="block"
      >
        <img
          style={{ height: "95px" }}
          src="https://i.ibb.co/ygdmsq6/musclefit.png"
          alt=""
        />
      </Box>
      <br />
      <br />
      <br />
      <Flex align="center" w="40%" justify="center" m={"auto"} h="100vh">
        <Box bg="#ebf7ff" p={39} rounded="md" textAlign={"center"}>
          <Heading variant={"solid"}>CREATE ACCOUNT</Heading>
          <Text variant={"ghost"}>Continue with</Text>
          <br />
          <Box>
            <Flex gap={4} justifyContent="center">
              <Box>
                <Button
                  variant="outline"
                  colorScheme={"#50b6ff"}
                  onClick={handlegoogleSignUp}
                >
                  <FcGoogle />
                </Button>
                {/* <Image w={50} borderRadius="10px" src="https://www.jefit.com/images/rg_google.svg"></Image> */}
              </Box>
              <Button variant="outline" colorScheme={"#50b6ff"}>
                <BsFacebook />
                {handleFacebookSignUp}
              </Button>
              <Box>
                {/* <Image w={50} borderRadius="10px"  src="https://www.jefit.com/images/rg_fb.svg"></Image> */}
              </Box>
              <Button variant="outline" colorScheme={"#50b6ff"}>
                <BsApple />
              </Button>
              <Box>
                {/* <Image w={50} borderRadius="10px"  src="https://www.jefit.com/images/rg_apple.svg"></Image> */}
              </Box>
            </Flex>
            <br />
            <Text variant={"ghost"}>Or</Text>
          </Box>

          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="username" variant={"smooth"}>
                  Username
                </FormLabel>
                <Input
                  isInvalid
                  errorBorderColor="#50b6ff"
                  id="username"
                  name="username"
                  type="username"
                  placeholder="Enter a username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email" variant={"smooth"}>
                  Email
                </FormLabel>
                <Input
                  isInvalid
                  errorBorderColor="#50b6ff"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password" variant={"smooth"}>
                  Password
                </FormLabel>
                <Input
                  isInvalid
                  errorBorderColor="#50b6ff"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button bg="#50b6ff" width="full" onClick={signup}>
                CREATE ACCOUNT
              </Button>
              <Box alignSelf="center">
                <Text fontSize="lg">
                  Already a member? <Link to="/login">Sign in</Link>
                </Text>
              </Box>
              <Box alignSelf="center">
                <Text variant={"outline"}>
                  By signing up, you agree to the MuscleFit Terms of Use and
                  Privacy Policy. We respect and protect your information and
                  privacy.
                </Text>
              </Box>
              <br />
            </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
