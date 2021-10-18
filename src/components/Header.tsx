import {Flex, Heading, Spacer, useColorMode, Button, Box, Badge, Image } from '@chakra-ui/react'
import WalletConnect from './WalletConnect'
import {MoonIcon} from '@chakra-ui/icons'

export default function Header() {

    const {toggleColorMode} = useColorMode()
    return(
        <Flex height='75px' align='center' px='30px' borderBottom='0.2px solid'>
            <Image src='./defipedia.svg' h='30' w='30' />
            <Heading fontSize='2xl' mx={2}>DeFiPedia</Heading>
            <Badge colorScheme='purple'>Beta</Badge>
            <Spacer />
            <Box>
            <Button onClick={toggleColorMode} mr={2} variant='outline'>
                <MoonIcon />
            </Button>
            <WalletConnect/>
            </Box>
        </Flex>
    )
}