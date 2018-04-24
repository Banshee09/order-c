import React from "react";
import { Table } from "react-bootstrap";

import OrderRow from "./OrderRow";


const OrderTable = ({ orders }) => {

    return (
        <div>
            <Table responsive >
                <thead>
                </thead>
                <tbody>
                    {orders.map((order) => {
                        return <OrderRow key={order.id} order={order} />
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default OrderTable;