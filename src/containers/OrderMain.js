import React, { Component } from "react";
import { FormControl, FormGroup, ControlLabel, Button } from "react-bootstrap";

import Spinner from "../components/common/Spinner";
import OrderTable from "../components/order/OrderTable";

class OrderMain extends Component {

    handleRetrieve = () => {
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        this.props.orderDispatcher.retrieveOrders(name, phone);
    }

    render() {

        return (
            <div id="main">
                <h1>Orders</h1>

                <Spinner isLoading = {this.props.orderReducer.isLoading} />

                <FormGroup controlId="name">
                    <ControlLabel>Customer Name</ControlLabel>
                    <FormControl placeholder="Enter your name"></FormControl>
                </FormGroup>

                <FormGroup controlId="phone">
                    <ControlLabel>Customer Phone</ControlLabel>
                    <FormControl placeholder="Enter your phone"></FormControl>
                </FormGroup>

                <Button bsStyle="primary" onClick={this.handleRetrieve} >Retrieve</Button><br /><br />

                <OrderTable orders={this.props.orderReducer.orders} />

            </div>

        )

    };
}
export default OrderMain;