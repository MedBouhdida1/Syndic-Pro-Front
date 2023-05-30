import { Input, Flex, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react';
import { HandlePostRequest } from '../../Helpers/HandlePostRequest';
import resident from '../../Types/Resident';
import useFetch from '../../Hooks/useFetch';
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


const Resident = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const initialRef = useRef(null)
  const [res, setResident] = useState(new resident());
  const { data } = useFetch("http://localhost:8080/resident")
  const [LstResident, setLstResident] = useState([]);

  const handleDelete = (id) => {
    axios.delete("http://localhost:8080/resident/" + id)
      .then(() => {
        toast({
          title: 'Book Deleted.',
          description: "Book has been deleted successfully!",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        const newList = LstResident.filter(res => res.id !== id)

        setLstResident(newList)
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
  useEffect(() => {
    if (data) {
      setLstResident(data);
      console.log(LstResident)
    }

  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newResident = await HandlePostRequest("http://localhost:8080/resident/register", res);
      setLstResident([...LstResident, newResident.data]);

      onClose();
      //......................
      console.log(LstResident)


      toast({
        title: 'Book Added.',
        description: `Resident ${res.firstName} ${res.lastName} has been added successfully!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      setResident(null)

    } catch (err) {
      toast({
        title: 'Server Error.',
        description: "Error:" + err,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }

  }

  return (
    <>
      <div className="container-fluid">
        <div className="card bg-light-info shadow-none position-relative overflow-hidden">
          <div className="card-body px-4 py-3">
            <div className="row align-items-center">
              <div className="col-9">
                <h4 className="fw-semibold mb-8">Residents</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="text-muted" href="index.html">Dashboard</a></li>
                    <li className="breadcrumb-item" aria-current="page">Residents</li>
                  </ol>
                </nav>
              </div>
              <div className="col-3">
                <div className="text-center mb-n5">
                  <img src="images/breadcrumb/ChatBc.png" alt className="img-fluid mb-n4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-content searchable-container list">
          {/* --------------------- start Contact ---------------- */}
          <div className="card card-body">
            <div className="row">
              <div className="col-md-4 col-xl-3">
                <form className="position-relative">
                  <input type="text" className="form-control product-search ps-5" id="input-search" placeholder="Search Residents..." />
                  <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                </form>
              </div>
              <div className="col-md-8 col-xl-9 text-end d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
                {/* <div className="action-btn show-btn" style={{display: 'none'}}>
            <a href="javascript:void(0)" className="delete-multiple btn-light-danger btn me-2 text-danger d-flex align-items-center font-medium">
              <i className="ti ti-trash text-danger me-1 fs-5" /> Delete All Row 
            </a>
          </div> */}
                <Flex justify="space-between" m="30">

                  <Button href="javascript:void(0)" id="btn-add-contact" onClick={onOpen} >
                    <i className="ti ti-users text-black me-1 fs-5" /> Ajouter Resident
                  </Button>

                </Flex>

              </div>
            </div>
          </div>
          {/* ---------------------
                    end Contact
                ---------------- */}
          {/* //!Modal */}
          {/* <div className="modal fade" id="addContactModal" tabIndex={-1} role="dialog" aria-labelledby="addContactModalTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-center">
            <h5 className="modal-title">Contact</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="add-contact-box">
              <div className="add-contact-content">
                <form id="addContactModalTitle">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3 contact-name">
                        <input type="text" id="c-name" className="form-control" placeholder="Name" />
                        <span className="validation-text text-danger" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 contact-email">
                        <input type="text" id="c-email" className="form-control" placeholder="Email" />
                        <span className="validation-text text-danger" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3 contact-occupation">
                        <input type="text" id="c-occupation" className="form-control" placeholder="Occupation" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 contact-phone">
                        <input type="text" id="c-phone" className="form-control" placeholder="Phone" />
                        <span className="validation-text text-danger" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3 contact-location">
                        <input type="text" id="c-location" className="form-control" placeholder="Location" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button id="btn-add" className="btn btn-success rounded-pill px-4">Add</button>
            <button id="btn-edit" className="btn btn-success rounded-pill px-4">Save</button>
            <button className="btn btn-danger rounded-pill px-4" data-bs-dismiss="modal"> Discard </button>
          </div>
        </div>
      </div>
    </div> */}
          <div className="card card-body">
            <div className="table-responsive">
              <table className="table search-table align-middle text-nowrap">
                <thead className="header-item">
                  <tr><th>
                    <div className="n-chk align-self-center text-center">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input primary" id="contact-check-all" />
                        <label className="form-check-label" htmlFor="contact-check-all" />
                        <span className="new-control-indicator" />
                      </div>
                    </div>
                  </th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr></thead>
                <tbody>
                  {/* start row */}
                  {LstResident.map((res) => (
                    <tr className="search-items">
                      <td>
                        <div className="n-chk align-self-center text-center">
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input contact-chkbox primary" id="checkbox1" />
                            <label className="form-check-label" htmlFor="checkbox1" />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="images/profile/user-1.jpg" alt="avatar" className="rounded-circle" width={35} />
                          <div className="ms-3">
                            <div className="user-meta-info">
                              <h6 className="user-name mb-0" data-name="Emma Adams">{res.firstName} {res.lastName}</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="usr-email-addr" data-email="adams@mail.com">{res.email}</span>
                      </td>
                      <td>
                        <span className="usr-location" data-location="Boston, USA">{res.address}</span>
                      </td>
                      <td>
                        <span className="usr-ph-no" data-phone="+1 (070) 123-4567">{res.phone}</span>
                      </td>
                      <td>
                        <div className="action-btn">
                          <a href="javascript:void(0)" className="text-info edit">
                            <i className="ti ti-eye fs-5" />
                          </a>
                          <button onClick={() => handleDelete(res.id)} className="text-dark delete ms-2">
                            <i className="ti ti-trash fs-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}


                </tbody>
              </table>
            </div>
          </div>
        </div>


      </div>

      <Modal
        initialFocusRef={initialRef}

        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>Add Resident</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder='First name' onChange={(event) => setResident({ ...res, firstName: event.target.value })} />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder='Last name' onChange={(event) => setResident({ ...res, lastName: event.target.value })} />
              </FormControl>
              <FormControl>

                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' onChange={(event) => setResident({ ...res, email: event.target.value })} />
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input placeholder='Address' onChange={(event) => setResident({ ...res, address: event.target.value })} />
              </FormControl>
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input placeholder='Address' onChange={(event) => setResident({ ...res, phone: event.target.value })} />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Password' onChange={(event) => setResident({ ...res, password: event.target.value })} />
              </FormControl>




            </ModalBody>


            <ModalFooter>
              <Button type="submit" colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>

  );
}

export default Resident;