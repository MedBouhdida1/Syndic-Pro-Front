import { Input, Flex, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { HandlePostRequest } from '../../Helpers/HandlePostRequest';
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


const ModalAjouterResident = ({ initialRef, isOpenModal1, onCloseModal1, res, setResident, LstResident, setLstResident }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newResident = await HandlePostRequest("http://localhost:8080/resident/register", res);
            setLstResident([...LstResident, newResident.data]);

            onCloseModal1();
            //......................
            console.log(LstResident)

            toast({
                title: 'Resident Added.',
                description: `Resident ${res.firstName} ${res.lastName} has been added successfully!`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        } catch (err) {
            toast({
                title: 'Email already exist.',
                description: "Error:" + err,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }

    }

    const toast = useToast()

    return (
        <Modal
            initialFocusRef={initialRef}

            isOpen={isOpenModal1}
            onClose={onCloseModal1}
        >
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={handleSubmit}>
                    <ModalHeader>Add Resident</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <FormControl isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input placeholder='First name' onChange={(event) => setResident({ ...res, firstName: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder='Last name' onChange={(event) => setResident({ ...res, lastName: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>

                            <FormLabel >Email</FormLabel>
                            <Input placeholder='Email' onChange={(event) => setResident({ ...res, email: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Address</FormLabel>
                            <Input placeholder='Address' onChange={(event) => setResident({ ...res, address: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Phone</FormLabel>
                            <Input placeholder='Address' onChange={(event) => setResident({ ...res, phone: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' placeholder='Password' onChange={(event) => setResident({ ...res, password: event.target.value })} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onCloseModal1}>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}
export default ModalAjouterResident