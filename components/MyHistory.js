import React from "react";
import HistoryCard from "./HistoryCard";
import { Button } from "native-base";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import GetAddress from "./GetAddress";

const sampleDoneeData = [
  {
    requestId: 1234,
    bloodGroup: "A+",
    city: "Bangalore",
    area: "Nagwara",
    phone: "1234567890",
    amount: 300,
  },
  {
    requestId: 5678,
    bloodGroup: "B+",
    city: "Bangalore",
    area: "Nagwara",
    phone: "1234567890",
    amount: 100,
  },
  {
    requestId: 4563,
    bloodGroup: "O+",
    city: "Bangalore",
    area: "Nagwara",
    phone: "1234567890",
    amount: 700,
  },
];

console.log(ethers);

const History = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onPress={() => navigate("/home")}>Go back</Button>
      <GetAddress />
      <HistoryCard data={sampleDoneeData} />
    </>
  );
};

export default History;
