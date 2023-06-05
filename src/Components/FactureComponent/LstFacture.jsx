import { useParams } from "react-router-dom";
import { Input, Flex, Button, Wrap } from '@chakra-ui/react';
import useFetch from '../../Hooks/useFetch';
import { useState, useEffect, useRef } from 'react';
import resident from '../../Types/resident';
import axios from 'axios';
import { useToast } from '@chakra-ui/react'
import {
    useDisclosure,

} from '@chakra-ui/react'
import facture from "../../Types/facture";
import ModalAjouterFacture from "./ModalAjouterFacture";
import ModalModifierResident from "../ResidentComponent/ModalModifierResident";
import ModalModifierFacture from "./ModalModifierFacture";
const LstFacture = () => {

    const { data } = useFetch("http://localhost:8080/resident/183")
    const [ress, setres] = useState(new resident())
    const [lstFacture, setLstFacture] = useState([])
    const [fac, setFacture] = useState(new facture())
    const toast = useToast()
    const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure();
    const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();

    const initialRef = useRef(null)

    const openModalWithObject = (object) => {
        setFacture(object);
        onOpenModal2();
    };
    useEffect(() => {
        if (data) {
            setres(data)
            setLstFacture(data.factures)
        }

    }, [data]);

    useEffect(() => {
        const curentdate = new Date()
        const formattedCurrentDate = curentdate.toISOString().split('T')[0];
        lstFacture.map((fac, index) => {
            if (fac.state == "Pending") {
                if (formattedCurrentDate > fac.deadline) {
                    const updatedFac = { ...fac, state: "Expired" };
                    axios.put("http://localhost:8080/facture/" + fac.id, updatedFac)
                        .then(() => {
                            const updatedList = [...lstFacture];
                            updatedList[index] = updatedFac;
                            setLstFacture(updatedList);
                        })
                        .catch(() => {
                            console.log("error")
                        })
                }
            }
            if (fac.state == "Expired") {
                if (formattedCurrentDate < fac.deadline) {
                    const updatedFac = { ...fac, state: "Pending" };
                    axios.put("http://localhost:8080/facture/" + fac.id, updatedFac)
                        .then(() => {
                            const updatedList = [...lstFacture];
                            updatedList[index] = updatedFac;
                            setLstFacture(updatedList);
                        })
                        .catch(() => {
                            console.log("error")
                        })
                }
            }

        });
    }, [lstFacture])

    const handleDelete = async (id) => {
        await axios.delete("http://localhost:8080/facture/" + id)
            .then(() => {
                toast({
                    title: 'Facture Deleted.',
                    description: "Facrure has been deleted successfully!",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                const newList = lstFacture.filter(res => res.id !== id)
                setLstFacture(newList)
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
        <>
            <div className="container-fluid">

                <div className="card bg-light-info shadow-none position-relative overflow-hidden">
                    <div className="card-body px-4 py-3">
                        <div className="row align-items-center">
                            <div className="col-9">
                                <h4 className="fw-semibold mb-8">Factures {ress.firstName + " " + ress.lastName}</h4>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a className="text-muted" href="index.html">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item" aria-current="page">
                                            Basic Table
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-3">
                                <div className="text-center mb-n5">
                                    <img
                                        src="../images/breadcrumb/ChatBc.png"
                                        alt=""
                                        className="img-fluid mb-n4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------- start Contact ---------------- */}
                <div className="card card-body">
                    <div className="row">

                        <div className="col-md-8 col-xl-12 text-end d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
                            {/* <div className="action-btn show-btn" style={{display: 'none'}}>
            <a href="javascript:void(0)" className="delete-multiple btn-light-danger btn me-2 text-danger d-flex align-items-center font-medium">
              <i className="ti ti-trash text-danger me-1 fs-5" /> Delete All Row 
            </a>
          </div> */}

                            <Button id="btn-add-contact" onClick={onOpenModal1}  >
                                <i className="ti ti-users text-black me-1 fs-5" /> Ajouter Facture
                            </Button>

                        </div>
                    </div>
                </div>



                <div className="table-responsive rounded-2 mb-4">
                    <table className="table border text-nowrap customize-table mb-0 align-middle">

                        <thead className="text-dark fs-4">
                            <tr>
                                <th><h6 className="fs-4 fw-semibold mb-0">Amount</h6></th>
                                <th><h6 className="fs-4 fw-semibold mb-0">Creation Date</h6></th>
                                <th><h6 className="fs-4 fw-semibold mb-0">Deadline</h6></th>
                                <th><h6 className="fs-4 fw-semibold mb-0">State</h6></th>
                                <th><h6 className="fs-4 fw-semibold mb-0">Action</h6></th>
                            </tr>
                        </thead>
                        <tbody>
                            {lstFacture.map(facture => (
                                <tr key={facture.id}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <h6 className="fs-4 fw-semibold mb-0">{facture.amount} TND</h6>
                                            {/* <span class="fw-normal">@rhye</span> */}
                                        </div>
                                    </td>
                                    <td><p className="mb-0 fw-normal">{facture.creationDate}</p></td>

                                    <td><p className="mb-0 fw-normal">{facture.deadline}</p></td>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            {facture.state == "Pending" && <span className="badge bg-light-warning text-warning fw-semibold fs-2">{facture.state}</span>
                                            }
                                            {facture.state == "Payed" && <span className="badge bg-light-success text-success fw-semibold fs-2">{facture.state}</span>
                                            }
                                            {facture.state == "Expired" && <span className="badge bg-light-danger text-danger fw-semibold fs-2">{facture.state}</span>
                                            }
                                            {/* <span class="badge bg-secondary rounded-3 fw-semibold fs-2">Product</span> */}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown dropstart">
                                            <a href="#" className="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots fs-5"></i>
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                                <li>
                                                    <button className="dropdown-item d-flex align-items-center gap-3" onClick={() => openModalWithObject(facture)}><i className="fs-4 ti ti-edit"></i>Edit</button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item d-flex align-items-center gap-3" onClick={() => handleDelete(facture.id)}><i className="fs-4 ti ti-trash"></i>Delete</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
            <ModalAjouterFacture
                lstFacture={lstFacture}
                setLstFacture={setLstFacture}
                initialRef={initialRef}
                isOpenModal1={isOpenModal1}
                onCloseModal1={onCloseModal1}
                fac={fac}
                setFacture={setFacture}
            ></ModalAjouterFacture>
            <ModalModifierFacture
                lstFacture={lstFacture}
                setLstFacture={setLstFacture}
                initialRef={initialRef}
                isOpenModal2={isOpenModal2}
                onCloseModal2={onCloseModal2}
                fac={fac}
                setFacture={setFacture}>

            </ModalModifierFacture>

        </>
    )
}



export default LstFacture;

