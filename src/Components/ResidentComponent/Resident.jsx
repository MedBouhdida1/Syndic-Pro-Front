import { Input, Flex, Button, Wrap } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react';
import resident from '../../Types/resident';
import useFetch from '../../Hooks/useFetch';
import axios from 'axios';
import ModalModifierResident from './ModalModifierResident';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

import {
  useDisclosure,

} from '@chakra-ui/react'
import ModalAjouterResident from './ModalAjouterResident';




const Resident = () => {
  const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure();
  const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();

  const toast = useToast()
  const initialRef = useRef(null)
  const [res, setResident] = useState(new resident());
  const { data } = useFetch("http://localhost:8080/resident")
  const [LstResident, setLstResident] = useState([]);
  const [search, setSearch] = useState("")


  const openModalWithObject = (object) => {
    setResident(object);
    onOpenModal2();
  };
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const SearchedList = LstResident.filter(function (res) {
    return res.firstName.toLowerCase().includes(search.toLowerCase()) || res.lastName.toLowerCase().includes(search.toLowerCase())
  })



  const handleDelete = async (id) => {
    console.log(id)
    await axios.delete("http://localhost:8080/resident/" + id)
      .then(() => {
        toast({
          title: 'Resindent Deleted.',
          description: "Resident has been deleted successfully!",
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
                  <input type="text" onChange={handleSearch} className="form-control product-search ps-5" id="input-search" placeholder="Search Residents..." />
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

                  <Button href="javascript:void(0)" id="btn-add-contact" onClick={onOpenModal1} >
                    <i className="ti ti-users text-black me-1 fs-5" /> Ajouter Resident
                  </Button>

                </Flex>

              </div>
            </div>
          </div>

          <div className="card card-body">
            <div className="table-responsive">
              <table className="table search-table align-middle text-nowrap">
                <thead className="header-item">
                  <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr></thead>
                <tbody>
                  {/* start row */}
                  {SearchedList.map((res) => (
                    <tr key={res.id} className="search-items">

                      <td>
                        <div className="d-flex align-items-center">
                          <Wrap>
                            <Avatar name={res.firstName + " " + res.lastName} src='https://bit.ly/tioluwani-kolawole' />
                          </Wrap>
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
                          <Button onClick={() => openModalWithObject(res)} className="text-info edit">
                            <i className="ti ti-edit fs-5" />
                          </Button>
                          <button className="text-danger delete ms-2">
                            <i className="ti ti-trash fs-5" data-bs-toggle="modal"
                              data-bs-target="#al-warning-alert" onClick={() => setResident(res)} />
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
      <div
        className="modal fade"
        id="al-warning-alert"
        tabIndex="-1"
        aria-labelledby="vertical-center-modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div
            className="modal-content modal-filled bg-light-warning"
          >
            <div className="modal-body p-4">
              <div className="text-center text-warning">
                <i className="ti ti-hexagon-letter-x fs-7"></i>
                <h4 className="mt-2">Delete Resident</h4>
                <p className="mt-3">
                  Are you certain abour deleting the resident {res.firstName} {res.lastName}
                </p>
                <button
                  type="button"
                  className="btn btn-light my-2"
                  data-bs-dismiss="modal"
                  onClick={() => handleDelete(res.id)}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalModifierResident
        initialRef={initialRef}
        isOpenModal2={isOpenModal2}
        onCloseModal2={onCloseModal2}
        res={res}
        setResident={setResident}></ModalModifierResident>

      <ModalAjouterResident
        initialRef={initialRef}
        isOpenModal1={isOpenModal1}
        onCloseModal1={onCloseModal1}
        res={res}
        setResident={setResident}
        LstResident={LstResident}
        setLstResident={setLstResident}>

      </ModalAjouterResident>


    </>

  );
}

export default Resident;