import React, { Component } from 'react';
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from "./components/home/Home";
import About from "./components/about/About";
import CartMain from "./containers/CartMain";
import ProductMain from "./containers/ProductMain";
import OrderMain from "./containers/OrderMain";


import {
    addProductToCart, removeProductFromCart,
    confirmOrderOpen, confirmOrderClose
}
    from "./actions/cartActions";

import {
    selectCategory, selectProduct,
    setProductFilter,
    loadProducts
}
    from "./actions/productActions";

import {
    submitOrder,
    retrieveOrders
}
    from "./actions/orderActions";

class App extends Component {

    render() {

        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path='/' component={Home} />

                    <Route path='/products' render={() => (
                        <ProductMain productReducer={this.props.productReducer}
                            productDispatcher={this.props.productDispatcher} />
                    )} />

                    <Route path='/cart' render={() => (
                        <CartMain cartReducer={this.props.cartReducer}
                            cartDispatcher={this.props.cartDispatcher} />
                    )} />

                    <Route path='/orders' render={() => (
                        <OrderMain orderReducer={this.props.orderReducer}
                            orderDispatcher={this.props.orderDispatcher} />
                    )} />

                    <Route path='/about' component={About} />

                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartReducer: state.cartReducer,
        productReducer: state.productReducer,
        orderReducer: state.orderReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cartDispatcher: {
            removeProductFromCart: (index) => {
                dispatch(removeProductFromCart(index));
            },
            confirmOrderOpen: () => {
                dispatch(confirmOrderOpen());
            },
            confirmOrderClose: () => {
                dispatch(confirmOrderClose());
            },
            submitOrder: (order) => {
                dispatch(submitOrder(order));
            }
        },
        productDispatcher: {
            selectCategory: (categoryId) => {
                dispatch(selectCategory(categoryId));
            },
            selectProduct: (productId) => {
                dispatch(selectProduct(productId));
            },
            setProductFilter: (text) => {
                dispatch(setProductFilter(text));
            },
            loadProducts: () => {
                dispatch(loadProducts());
            },
            addProductToCart: (product) => {
                dispatch(addProductToCart(product));
            }
        },
        orderDispatcher: {
            retrieveOrders: (name, phone) => {
                dispatch(retrieveOrders(name, phone));
            }
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

