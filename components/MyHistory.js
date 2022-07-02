import { HStack } from "native-base";
import React from "react";
import HistoryCard from "./HistoryCard";
import { ethers } from "ethers";

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
  return <HistoryCard data={sampleDoneeData} />;
};

export default History;
