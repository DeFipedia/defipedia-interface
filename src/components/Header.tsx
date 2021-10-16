import {Flex, Heading, Spacer, useColorMode, Button, Box } from '@chakra-ui/react'
import WalletConnect from './WalletConnect'
import {MoonIcon} from '@chakra-ui/icons'

export default function Header() {

    const {toggleColorMode} = useColorMode()
    return(
        <Flex height='75px' align='center' px='30px' borderBottom='0.5px solid grey'>
            <Heading fontSize='2xl'>DeFiPedia</Heading>
            <Spacer />
            <Box>
            <Button onClick={toggleColorMode} mr={2}>
                <MoonIcon />
            </Button>
            <WalletConnect/>
            </Box>
        </Flex>
    )
}