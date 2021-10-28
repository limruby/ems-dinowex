/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';
import Loader from './../../../site/Loader';

function EditPaymentStatus() {
    localStorage.setItem("activeKeys", "Order")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({});
    const location = useLocation();
    const thePath = location.pathname;
    const cart_id = thePath.substring(thePath.indexOf('/', 2) + 1, thePath.lastIndexOf('/'));
    const string = '"' + cart_id + '"'

    useEffect(() => {
        setLoading(true);
        axiosInstance.get("/api/cart/readOrder", { params: { _id: string } })
            .then(function (response) {
                setData(response.data.data[0]);
                setLoading(false);
            }).catch(function (error) {
                console.log(error);
            })
    }, [string]);

    const inputChange = input => e => {
        setData({
            ...data,
            [input]: e.target.value
        });
    };
    //////action performed//////
    var obj = [];
    const deleteFile = (element, index) => e => {
        if ((window.confirm('Are you sure you wish to delete this item?'))) {
            if (element === 'receipt') {
                let obj = data.receipt;
                obj.splice(index, 1);
            }
            setData({
                ...data,
            });
        }
    }
    const uploadReceiptHandler = (element, index) => e => {
        let selectedFile = e.target.files;
        let file = null;
        let fileName = "";
        if (selectedFile.length > 0) {
            let fileToLoad = selectedFile[0];
            fileName = fileToLoad.name;
            let fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                file = fileLoadedEvent.target.result;
                var stringLength = file.length;
                var result = parseFloat(4 * Math.ceil(stringLength / 3))
                //Limit File Size
                if (result > 1048576) {
                    alert("File size must under 1MiB!");
                    return;
                } else {
                    data.receipt = {
                        'name': fileName,
                        'source': fileReader.result
                    }
                }
            };
            // Convert data to base64
            var baseFile = fileReader.readAsDataURL(fileToLoad);
        }
    }
    function displayReceiptForm() {
        var section = [];
        if (data.receipt == null || data.receipt[0] == null) {
            section.push(
                <div className="form-group" style={{ paddingBottom: "5%" }}>
                    <h1 className="mb-5">Upload Receipt<span>*</span></h1>
                    <span>*Limit to file size 1MB</span><br></br>
                    <input type="file" onChange={uploadReceiptHandler('receipt', 0)} accept="image/png, image/jpeg, application/pdf" />
                </div>
            );
        }
        else {
            section.push(
                <div className="member-box">
                    <h1 className="mb-5">Receipt</h1>
                    <p>{data.receipt[0].name}</p>
                    <button className="deleteBtn" type="button" onClick={deleteFile('receipt', 0)}> <FaTrashAlt /></button>
                </div>
            )
        }
        return section;
    }
    const handleForm = (e) => {
        e.preventDefault();
        setLoading(true);
        var postData = {
            _id: cart_id,
            bill_status: data.bill_status,
            bill_id: data.bill_id,
            receipt: data.receipt
        }
        axiosInstance.post("/api/cart/updateCart", postData)
            .then(function (response) {
                setLoading(false);
                window.location.href = '/admin_dashboard';
            }).catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>
            <form onSubmit={handleForm}>
                {loading ? <Loader /> : null}
                <div className="edit-form-container">
                    <div className="form-group">
                        <label htmlFor="bill_status"><span>*</span>Payment Verify</label>
                        <select className="form-control" id="bill_status" required
                            onChange={inputChange('bill_status')} value={data.bill_status} >
                            <option value="">Please select</option>
                            <option value="N/A">N/A</option>
                            <option value="Fail">Payment Fail</option>
                            <option value="Pending">Payment Pending</option>
                            <option value="Success">Payment Success</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bill_id">Bill ID</label>
                        <input className="form-control" type='text' name='bill_id' id="bill_id"
                            placeholder='Bill ID' onChange={inputChange('bill_id')} value={data.bill_id}
                        />
                    </div>
                    {displayReceiptForm()}
                    <br />
                    <div className="btn-group">
                        <Link to="/admin_dashboard">
                            <button className="btn btn-danger back-btn">Back</button>
                        </Link>
                        <input className="btn btn-primary" type="submit" value="Update" />
                    </div>
                </div>
            </form>
        </>
    )
}
export default EditPaymentStatus;