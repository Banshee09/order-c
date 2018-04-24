import React from "react";
import { Glyphicon } from "react-bootstrap";

const CartRow = ({ product, handleRemove, index }) => {

    return (
        <tr>
            <td>
                <a onClick={() => handleRemove(index)}><Glyphicon glyph="remove" /></a>
            </td>
            <td>
                {product.name}
            </td>
            <td align='right' className="price">
                {product.price}
            </td>
        </tr>
    );
}

export default CartRow;