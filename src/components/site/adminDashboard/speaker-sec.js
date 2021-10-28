import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import axiosInstance from '../../../utils/axiosConfig';
import Loader from './../../site/Loader';

function Speaker() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const headers = [
        { label: 'Title', key: 'title' },
        { label: 'Full Name', key: 'name' },
        { label: 'Phone Number', key: 'phone_no' },
        { label: 'Affiliation', key: 'affiliation' },
        { label: 'Address_1', key: 'address_1' },
        { label: 'Address_2', key: 'address_2' },
        { label: 'Postcode', key: 'postcode' },
        { label: 'City', key: 'city' },
        { label: 'State', key: 'state' },
        { label: 'Country', key: 'country' },
        { label: 'Speech_title', key: 'speech_title' },
        { label: 'Speech_time', key: 'speech_time' },
    ]
    const csvReport = {
        filename: 'Dinowex_Speaker_List.csv',
        headers: headers,
        data: data
    } 
    useEffect(() => {
        setLoading(true);
        axiosInstance.get("/api/speaker/readAll")
            .then(function (response) {
                setData(response.data.data);
                setLoading(false);
            }).catch(function (error) {
                console.log(error);
            })
    }, []);
    const columns = React.useMemo(
        () => [
            {
                Header: 'Profile',
                columns: [
                    {
                        Header: 'Speaker',
                        accessor: 'name',
                    },
                    {
                        Header: 'Email',
                        accessor: 'email',
                    },
                    {
                        Header: 'Contact Number',
                        accessor: 'phone_no',
                    },
                    {
                        Header: 'Edit',
                        Cell: data => (
                            <Link to={`admin_dashboard/${data.row.original.account_id}/edit_profile_speaker`}>
                                <button className="btn btn-success" >
                                    Edit
                                </button></Link>
                        )
                    },
                ],
            },
        ],
        []
    )
    return (
        <div className="App" id="competitor">
            {loading ? <Loader /> : null}
            <Table columns={columns} data={data} />
            <CSVLink {...csvReport}>
                <button className="btn btn-success" >Export to CSV</button></CSVLink>
        </div>
    );
}
export default Speaker;