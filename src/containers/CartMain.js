import React, { Component } from "react";
import { FormControl, FormGroup, ControlLabel, Glyphicon, Button, DropdownButton, MenuItem, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import CartTable from "../components/cart/CartTable";

class CartMain extends Component {

    handleRemove = (index) => {
        this.props.cartDispatcher.removeProductFromCart(index);
    }

    handleConfirmOrderOpen = () => {
        this.props.cartDispatcher.confirmOrderOpen();
    }

    handleConfirmOrderClose = () => {
        this.props.cartDispatcher.confirmOrderClose();
    }

    handleSubmitOrder = (order) => {
        this.props.cartDispatcher.submitOrder(order);
    }


    render() {

        let order = {};
        let orderDetails = "";

        if (this.props.cartReducer.isConfirming) {
            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const note = document.getElementById("note").value.trim();
            const total = document.getElementById("total").innerHTML;
            order = { name: name, phone: phone, products: this.props.cartReducer.cart, note: note, total: total };
            orderDetails = (
                <Table responsive>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Name: </td>
                            <td>{order.name}</td>
                        </tr>
                        <tr>
                            <td>Phone: </td>
                            <td>{order.phone}</td>
                        </tr>
                        <tr>
                            <td>Items: </td>
                            <td align='right'>
                                <Table responsive>
                                    <thead></thead>
                                    <tbody>
                                        {order.products.map((product, index) => (
                                            <tr key={index}>
                                                <td>{product.name}</td>
                                                <td align='right'>{product.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                            </td>
                        </tr>
                        <tr>
                            <td>Total: </td>
                            <td>{order.total}</td>
                        </tr>
                        <tr>
                            <td>Note: </td>
                            <td>{order.note}</td>
                        </tr>
                    </tbody>
                </Table>
            )
        }

        return (
            <div id="main">
                <h1>Cart</h1>
                <br />
                <CartTable cart={this.props.cartReducer.cart} handleRemove={this.handleRemove} />

                <FormGroup controlId="name">
                    <ControlLabel>Customer Name</ControlLabel>
                    <FormControl type="text" placeholder="Enter name"></FormControl>
                </FormGroup>

                <FormGroup controlId="phone">
                    <ControlLabel>Customer Phone</ControlLabel>
                    <FormControl type="text" placeholder="Enter phone"></FormControl>
                </FormGroup>

                <FormGroup controlId="note">
                    <ControlLabel>Additional Note</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Enter note"></FormControl>
                </FormGroup>

                <Link to="/products"><Glyphicon glyph="chevron-left" />Menu</Link>

                <div style={{ float: "right" }}>
                    <DropdownButton title="Pay" id="pay" bsStyle="primary" pullRight>
                        <MenuItem eventKey="1" onClick={this.handleConfirmOrderOpen}>By Cash</MenuItem>
                        <MenuItem eventKey="2">By Card</MenuItem>
                        <MenuItem eventKey="3">By WeChat</MenuItem>
                        <MenuItem eventKey="4">By AliPAy</MenuItem>
                    </DropdownButton>
                </div>

                <Modal className="large-modal" show={this.props.cartReducer.isConfirming} onHide={this.handleConfirmOrderClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please confirm your order</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {orderDetails}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className="btn-std" onClick={this.handleConfirmOrderClose}>Close</Button>
                        <Button bsStyle="primary" onClick={() => this.handleSubmitOrder(order)}>Submit</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }

};

export default CartMain;