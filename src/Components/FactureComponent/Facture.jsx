import { Input, Flex, Button, Wrap } from '@chakra-ui/react';
import useFetch from '../../Hooks/useFetch';
import { useToast } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import LstFacture from './LstFacture';
import ModalAjouterFacture from './ModalAjouterFacture';
const Facture = () => {
    const { data } = useFetch("http://localhost:8080/resident/getresidentsbysyndic/1")
    const [LstResident, setLstResident] = useState([]);
    const [search, setSearch] = useState("")
    //change when getting id from localstorage
    const idsyndic = 1;
    const toast = useToast()


    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const SearchedList = LstResident.filter(function (res) {
        return res.firstName.toLowerCase().includes(search.toLowerCase()) || res.lastName.toLowerCase().includes(search.toLowerCase())
    })
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
                                <h4 className="fw-semibold mb-8">Basic Table</h4>
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
                                        src="images/breadcrumb/ChatBc.png"
                                        alt=""
                                        className="img-fluid mb-n4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-body">
                    <div className="row">
                        <div className="col-md-4 col-xl-3">
                            <form className="position-relative">
                                <input type="text" className="form-control product-search ps-5" id="input-search" placeholder="Search Residents..." onChange={handleSearch} />
                                <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />

                            </form>

                        </div>


                    </div>

                </div>


                <div className="card-body ">
                    <div className="table-responsive rounded-2 mb-4">
                        <table className="table border text-nowrap customize-table mb-0 align-middle">
                            <thead className="text-dark fs-4">
                                <tr>
                                    <th>
                                        <h6 className="fs-4 fw-semibold mb-0">Full Name</h6>
                                    </th>
                                    <th>
                                        <h6 className="fs-4 fw-semibold mb-0">Email</h6>
                                    </th>
                                    <th>
                                        <h6 className="fs-4 fw-semibold mb-0">Address</h6>
                                    </th>
                                    <th>
                                        <h6 className="fs-4 fw-semibold mb-0">Phone</h6>
                                    </th>
                                    <th>
                                        <h6 className="fs-4 fw-semibold mb-0">Invoices</h6>
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
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

                                                <Link to={`/facture/${res.id}`}
                                                    type="button"
                                                    className="btn mb-1 waves-effect waves-light btn-primary"
                                                >     <span>
                                                        <i className="ti ti-file-text"></i>
                                                    </span>
                                                    Consult invoices
                                                </Link>


                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Facture;