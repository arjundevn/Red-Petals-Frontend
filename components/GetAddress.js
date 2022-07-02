import React from "react";
import HistoryCard from "./HistoryCard";
import { Text } from "native-base";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

const GetAddress = () => {
    const [address, setAddress] = React.useState([])

    const getAddress = async() => {
        const selectedAddress = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(selectedAddress[0]);
    }

    React.useEffect(() => {
        getAddress()
    }, [])

  return (
    <>
      <Text>{address}</Text>
    </>
  );
};

export default GetAddress;
