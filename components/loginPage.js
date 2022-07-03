import { Button, Box, Input, VStack, Heading } from "native-base";
import { ethers } from "ethers";
import HomePage from "./HomePage";
import InitializeEthers from "./InitializeEthers";
import React from "react";

const Login = () => {
  const [homePage, setHomePage] = React.useState(false);
  const [validate, setValidate] = React.useState(false);
  const [aadhar, setAadhar] = React.useState();

  const handleClick = async (data) => {
    console.log("hello");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    // const isExist = await redPetalsData().aadharExists("123");
    // console.log(isExist);
    // isExist ? console.log("hi", isExist) : console.log("bye");
    setHomePage(true);
    redPetalsData().then((data) => console.log(data));
  };

  const getInputValue = (event) => {
    // show the user input value to console
    const userValue = event.target.value;
    setAadhar(userValue);
  };

  const redPetalsData = async (data) => {
    // const isExist = await data.aadharExists("123");
    // console.log(isExist);
    // isExist ? console.log("hi", isExist) : console.log("bye");
    // setReadPetalsDetails(data);
    return data;
  };

  return (
    <>
      <InitializeEthers func={redPetalsData} />
      <Box alignItems="center">
        {!homePage && (
          <>
            <VStack space={4} alignItems="center" width="300px">
              <Heading>Verify yourself</Heading>
              <Input
                mx="3"
                placeholder="Aadhar number"
                w="100%"
                onChange={getInputValue}
              />
              <Button onPress={() => handleClick()}>Login/Register</Button>
            </VStack>
          </>
        )}
        {homePage && <HomePage />}
      </Box>
    </>
  );
};

export default Login;
