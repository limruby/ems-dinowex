import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import axiosInstance from '../../../utils/axiosConfig';

function Visitor() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosInstance.get("/api/visitors/readAll")
            .then(function (response) {
                setData(response.data.data);
            }).catch(function (error) {
                console.log(error);
            })
    }, []);

    const headers = [
        { label: 'Full Name', key: 'name' },
        { label: 'NRIC/ Passport', key: 'nric_passport_selection' },
        { label: 'NRIC/ Passport No.', key: 'nric_passport_no' },
        { label: 'Phone Number', key: 'contact' },
        { label: 'Address_1', key: 'address_1' },
        { label: 'Address_2', key: 'address_2' },
        { label: 'Postcode', key: 'postcode' },
        { label: 'City', key: 'city' },
        { label: 'State', key: 'state' },
        { label: 'Country', key: 'country' },
        { label: 'Bill ID', key: 'bill_id' },
        { label: 'Payment', key: 'bill_status' },
    ]
    const csvReport = {
        filename: 'Dinowex_Visitor_List.csv',
        headers: headers,
        data: data
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const columns = React.useMemo(
        () => [
            {
                Header: 'Profile',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'name',
                    },
                    {
                        Header: 'Contact Number',
                        accessor: 'contact',
                    },
                    {
                        Header: 'Bill ID',
                        accessor: 'bill_id'
                    },
                    {
                        Header: 'Edit',
                        Cell: data => (
                            <Link to={`admin_dashboard/${data.row.original.account_id}/edit_profile_visitor`}>
                                <button className="btn btn-success" >
                                    Edit
                                </button></Link>
                        )
                    },
                    {
                        Header: 'Upload Receipt & Cert',
                        Cell: data => (
                            <Link to={`admin_dashboard/${data.row.original.account_id}/upload_receipt_visitor`}>
                                <button className="btn btn-success" >
                                    Upload
                                </button></Link>
                        )
                    },
                    {
                        Header: 'Receipt Name',
                        accessor: 'receipt[0].name'
                    },
                    {
                        Header: 'Cert Name',
                        accessor: 'certificate[0].name'
                    },
                ],
            },
        ],
        // []
    )
    return (
        <div className="App" id="visitor">
            <Table columns={columns} data={data} />
            <CSVLink {...csvReport}>
                <button className="btn btn-success" >Export to CSV</button></CSVLink>
        </div>
    );

}
export default Visitor;