import { Modal, ModalBody , ModalHeader, ModalOverlay, ModalContent, Button, useDisclosure, Center, Stack } from "@chakra-ui/react"

export default function WalletConnectButton() {

    const {isOpen, onOpen, onClose} = useDisclosure()

    return(
        <>
        <Button onClick={onOpen}>Connect Wallet</Button>
        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
            <ModalContent mt='100' background='white' h='400px' w='360px'>
                <ModalHeader>
                    <Center>
                        Choose a Wallet
                    </Center>
                </ModalHeader>
                <ModalBody>
                    <Stack spacing={5} my={8} mx={2}>
                    <Button>
                    <img src='/metamask-fox.svg' height='25px' width='25px'/>Metamask</Button>
                    <Button>
                    <img src='/wallet-connect.png' height='25px' width='25px'/>Wallet Connect</Button>
                    <Button>
                    <img src='/fortmatic-logo.png' height='25px' width='25px' />Fortmatic</Button>
                    <Button>
                    <img src='/portis-icon.png' height='25px' width='25px' />Portis</Button>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}