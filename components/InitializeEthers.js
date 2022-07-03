import React from "react";
import { ethers } from "ethers";
import RedPetalsArtiFact from "../contracts/RedPetals.json";
import ContractAddress from "../contracts/contract-address.json";

const InitializeEthers = (props) => {
  const [redPetalsData, setReadPetalsData] = React.useState({});
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const redPetals = new ethers.Contract(
    ContractAddress.RedPetals,
    RedPetalsArtiFact.abi,
    provider.getSigner(0)
  );

  React.useEffect(() => {
    setReadPetalsData(redPetals);
  }, []);

  props.func(redPetals);

  console.log(redPetalsData);
  return <div>Hello</div>;
};

export default InitializeEthers;
