import { Box, Button, Heading, Input, VStack, Text } from 'native-base'
import React from 'react'

const HistoryCard = (data) => {
    const historyData = data.data;

    return (
        <>
            {historyData?.map((ele, index) => {
                return (
                    <div key={index}>
                        <Box alignItems="center" alignSelf="center" bg="gray.300" padding="30px" width="500px" borderRadius="lg" marginBottom="30px" _text={{
                          fontSize: "md",
                          fontWeight: "medium",
                          color: "warmGray.50",
                          letterSpacing: "lg"
                        }}>
                            <VStack space={4} alignItems="center">
                                <Heading mx="auto">History for {ele.requestId}</Heading>
                                <Text color="black.200" > Blood group: {ele.bloodGroup}</Text>
                                <Text color="black.200" > Amount: {ele.amount}</Text>
                                <Text color="black.200" >Area: {ele.area}</Text>
                                <Text color="black.200" >City: {ele.city}</Text>
                                <Button onPress={() => console.log("hello world")}>Start donation</Button>
                            </VStack>
                        </Box>
                    </div>
                )
            })}
        </>
    )
}

export default HistoryCard
