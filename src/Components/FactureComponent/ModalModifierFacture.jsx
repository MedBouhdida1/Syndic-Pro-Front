
import { Input, Flex, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel, useDisclosure,

} from '@chakra-ui/react'
import LstFacture from './LstFacture';
const ModalModifierFacture = ({ lstFacture, setLstFacture, initialRef, isOpenModal2, onCloseModal2, fac, setFacture }) => {

    const toast = useToast()

    const handleModif = (id, data) => {
        console.log(LstFacture)
        const curentdate = new Date()
        const formattedCurrentDate = curentdate.toISOString().split('T')[0];
        if (data.deadline < formattedCurrentDate) {
            toast({
                title: 'Deadline',
                description: `vou devez choisir une deadline superieur`,
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        }
        else {
            axios.put("http://localhost:8080/facture/" + id, data)
                .then(() => {

                    toast({
                        title: 'Facture Modified',
                        description: "facture has been Modified successfully!",
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    })
                    onCloseModal2();
                    setFacture(fac)
                    const newList = lstFacture.filter(res => res.id !== id)
                    setLstFacture([...newList, fac])

                    // setTimeout(() => {
                    //     window.location.reload()
                    // }, 3500)
                })


                .catch(error => {
                    toast({
                        title: 'Server Error.',
                        description: "Error:" + error,
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                    })
                })
        }


    }
    return (
        <Modal
            initialFocusRef={initialRef}

            isOpen={isOpenModal2}
            onClose={onCloseModal2}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modifier Facture</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>

                    <FormControl isRequired>
                        <FormLabel>Amount</FormLabel>
                        <Input type='number' placeholder='Amount' value={fac.amount} onChange={(event) => setFacture({ ...fac, amount: event.target.value })} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Deadline</FormLabel>
                        <Input placeholder='Deadline' type='date' value={fac.deadline} onChange={(event) => setFacture({ ...fac, deadline: event.target.value })} />
                    </FormControl>






                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => handleModif(fac.id, fac)}>
                        Save
                    </Button>
                    <Button onClick={onCloseModal2}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )

}


export default ModalModifierFacture;