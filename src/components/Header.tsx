import {Flex, Text, Spacer } from '@chakra-ui/react'
import WalletConnect from './WalletConnect'

export default function Header() {
    return(
        <Flex height='75px' width='100%' align='center' pl='30px' pr='30px' borderBottom='0.5px solid grey'>
            <Text fontSize='2xl'>DeFiPedia</Text>
            <Spacer />
            <WalletConnect/>
        </Flex>
    )
}