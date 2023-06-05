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
const ModalModifierResident = ({ initialRef, isOpenModal2, onCloseModal2, res, setResident, LstResident, setLstResident }) => {
    const toast = useToast()

    const handleModif = (id, data) => {
        console.log(LstResident)
        axios.put("http://localhost:8080/resident/" + id, data)
            .then(() => {

                toast({
                    title: 'Resident Modified',
                    description: "Resident has been Modified successfully!",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                onCloseModal2();
                setResident(data)
                const newList = LstResident.filter(res => res.id !== id)
                setLstResident([...newList, res])

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

    return (
        <Modal
            initialFocusRef={initialRef}

            isOpen={isOpenModal2}
            onClose={onCloseModal2}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modifier Resident</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>

                    <FormControl isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder='First name' value={res.firstName} onChange={(event) => setResident({ ...res, firstName: event.target.value })} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder='Last name' value={res.lastName} onChange={(event) => setResident({ ...res, lastName: event.target.value })} />
                    </FormControl>
                    <FormControl isRequired>

                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Email' value={res.email} onChange={(event) => setResident({ ...res, email: event.target.value })} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder='Address' value={res.address} onChange={(event) => setResident({ ...res, address: event.target.value })} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Phone</FormLabel>
                        <Input placeholder='Phone' value={res.phone} onChange={(event) => setResident({ ...res, phone: event.target.value })} />
                    </FormControl>





                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => handleModif(res.id, res)}>
                        Save
                    </Button>
                    <Button onClick={onCloseModal2}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )

}

export default ModalModifierResident