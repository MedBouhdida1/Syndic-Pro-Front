
import facture from "../../Types/facture";
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
import { useParams } from "react-router-dom";



const ModalAjouterFacture = ({ lstFacture, setLstFacture, initialRef, isOpenModal1, onCloseModal1, fac, setFacture }) => {
    const toast = useToast()
    const { idres } = useParams()
    const currentDate = new Date()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // ress.id = ""
            fac.state = "Pending"
            const formattedDate = currentDate.toISOString().split('T')[0];
            fac.creationDate = formattedDate
            console.log(fac.deadline)
            console.log(formattedDate)
            if (fac.deadline < formattedDate) {
                toast({
                    title: 'Deadline',
                    description: `vou devez choisir une deadline superieur`,
                    status: 'warning',
                    duration: 3000,
                    isClosable: true,
                })
            }
            else {
                const newFacture = await HandlePostRequest(`http://localhost:8080/facture/${idres}`, fac);
                setLstFacture([...lstFacture, newFacture.data]);

                //......................
                console.log(lstFacture)
                onCloseModal1();

                toast({
                    title: 'Facture Added.',
                    description: `Facture has been added successfully!`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }

        } catch (err) {
            toast({
                title: 'Sever error',
                description: "Error:" + err,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }

    }
    return (
        <Modal
            initialFocusRef={initialRef}

            isOpen={isOpenModal1}
            onClose={onCloseModal1}
        >
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={handleSubmit}>
                    <ModalHeader>Ajouter Facture</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <FormControl isRequired>
                            <FormLabel>Amount</FormLabel>
                            <Input type="number" placeholder='Amount' onChange={(event) => setFacture({ ...fac, amount: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Deadline</FormLabel>
                            <Input type="date" placeholder='Deadline' onChange={(event) => setFacture({ ...fac, deadline: event.target.value })} />
                        </FormControl>
                        {/* <FormControl isRequired>

                            <FormLabel >Email</FormLabel>
                            <Input placeholder='Email' onChange={(event) => setResident({ ...fac, email: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Address</FormLabel>
                            <Input placeholder='Address' onChange={(event) => setResident({ ...fac, address: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Phone</FormLabel>
                            <Input placeholder='Address' onChange={(event) => setResident({ ...fac, phone: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' placeholder='Password' onChange={(event) => setResident({ ...res, password: event.target.value })} />
                        </FormControl> */}
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

export default ModalAjouterFacture;