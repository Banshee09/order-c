import React from "react";
import { Table } from "react-bootstrap";

import CartRow from "./CartRow";

const CartTable = ({ cart, handleRemove }) => {

    let total = 0;

    return (
        <div>
            <Table hover striped>
                <thead>
                </thead>
                <tbody>
                    {cart.map((product, index) => {
                        total += product.price;
                        return <CartRow key={index} product={product} handleRemove={handleRemove} index={index} />
                    })}

                    <tr className="info">
                        <td colSpan="2">TOTAL</td>
                        <td id="total" className="price" align="right">{total}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default CartTable;