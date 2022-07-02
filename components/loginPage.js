import react from 'react'
import { Button, Box } from "native-base";
import { ethers } from "ethers";


const Login = () => {
    const handleClick = async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", []);
        
        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner()
        console.log('helloo', signer);
    }

    return (
        <>
            <Box alignItems="center">
                <Button onPress={() => handleClick()}>Click Me</Button>
            </Box>
        </>
    )
}

export default Login