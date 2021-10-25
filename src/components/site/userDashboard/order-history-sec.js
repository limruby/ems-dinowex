import React, { useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';
function Order() {
    const [data, setData] = useState([]);
    const account_id = localStorage.getItem('user_id');
    const role = localStorage.getItem('role');
    useEffect(() => {
        if (role === "Competitor") {
            axiosInstance.get("/api/cart/userReadCart", { params: { account_id: account_id } })
                .then(function (response) {
                    setData(response.data.data);
                }).catch(function (error) {
                    console.log(error);
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account_id]);
    function displayName(input) {
        if (input[0]) {
            return input[0].name;
        }
    }
    function displayClass(input) {
        if (input[0]) {
            return "";
        }
        else {
            return "d-none"
        }
    }
    function imageBuffer(input) {
        if (input[0]) {
            const imageBuffer = Buffer.from(input[0].source.data);
            return imageBuffer;
        }
    }
    const columns = React.useMemo(
        () => [
            {
                Header: 'Order History',
                columns: [
                    {
                        Header: 'Order Date',
                        accessor: 'order_date'
                    },
                    {
                        Header: 'Medal Quantity',
                        accessor: 'medalQuantity',
                    },
                    {
                        Header: 'Certificate Quantity',
                        accessor: 'certQuantity',
                    },
                    {
                        Header: 'Total Price (RM)',
                        accessor: 'total_price',
                    },
                    {
                        Header: 'Payment Status',
                        accessor: 'bill_status'
                    },
                    {
                        Header: 'Bill ID',
                        accessor: 'bill_id'
                    },
                    {
                        Header: 'Receipt',
                        accessor: 'receipt',
                        Cell: ({ row, value }) => (
                            <a
                                className={displayClass(value)}
                                download={displayName(value)}
                                href={imageBuffer(value)}
                                title="Download">Download</a>
                        )
                    },
                ],
            },
        ],
        []
    )
    return (
        <div className="App">
            <Table columns={columns} data={data} />
        </div>
    );
}
export default Order;