import { Button, Box, Input, VStack, Heading } from "native-base";
import { ethers } from "ethers";
import HomePage from "./HomePage";
import InitializeEthers from "./InitializeEthers";
import React from "react";

const Login = () => {
  const [homePage, setHomePage] = React.useState(false);
  const [aadhar, setAadhar] = React.useState();
  const handleClick = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();
    if (signer) {
      setHomePage(true);
    }
  };

  const getInputValue = (event) => {
    // show the user input value to console
    const userValue = event.target.value;
    setAadhar(userValue);
  };

  console.log(aadhar);

  return (
    <>
      <InitializeEthers />
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
