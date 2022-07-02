import { Button, Box } from "native-base";
import { ethers } from "ethers";
import HomePage from "./HomePage";
import React from "react";

const Login = () => {
  const [homePage, setHomePage] = React.useState(false);
  const handleClick = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();
    console.log("helloo", signer);
    if (signer) {
      setHomePage(true);
    }
  };

  return (
    <>
      <Box alignItems="center">
        {!homePage && (
          <Button onPress={() => handleClick()}>Login/Register</Button>
        )}
        {homePage && <HomePage />}
      </Box>
    </>
  );
};

export default Login;
