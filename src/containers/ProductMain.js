import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, FormControl, FormGroup, Image, Button } from "react-bootstrap"

import Spinner from "../components/common/Spinner";
import SearchBar from "../components/common/SearchBar";
import ProductTable from "../components/product/ProductTable";


class ProductMain extends Component {

    componentDidMount() {
        this.props.productDispatcher.loadProducts();
    }

    handleSelectCategory = (event) => {
        this.props.productDispatcher.selectCategory(parseInt(event.target.value, 10));
    }

    handleSelectProduct = (productId) => {
        this.props.productDispatcher.selectProduct(productId);
    }

    handleAddToCartSubmit = (product) => {
        console.log(product);
        this.props.productDispatcher.addProductToCart(product);
        this.props.productDispatcher.selectProduct(0);
    };

    handleProductDetailClose = () => {
        this.props.productDispatcher.selectProduct(0);
    }

    handleAddSubmit = () => {
        const name = document.getElementById('addProductName').value.trim();
        const price = document.getElementById('addProductPrice').value.trim();
        const imageURL = document.getElementById('addProductImageURL').value.trim();
        const description = document.getElementById('addProductDescription').value.trim();
        const categoryId = this.props.productReducer.categoryId;
        const product = { name: name, price: price, imageURL: imageURL, description: description, category: { id: categoryId } };
        this.props.productDispatcher.addProduct(product);
        this.props.productDispatcher.addProductClose();
    }


    handleSearch = (event) => {
        this.props.productDispatcher.setProductFilter(event.target.value);
    };

    filterProducts(products, filter) {
        if (filter !== '') {
            products = products.filter((product) => {
                let name = product.name.toLowerCase().trim();
                if (name.indexOf(filter) > -1)
                    return true;
                else
                    return false;
            })
        }
        return products;
    }


    render() {

        let productTable = '';
        let productDetail = '';

        if (this.props.productReducer.categoryId > 0) {
            let products = this.props.productReducer.categories.find((category) => (category.id === this.props.productReducer.categoryId)).products;
            products = this.filterProducts(products, this.props.productReducer.filter)
            productTable = (<ProductTable products={products} handleSelectProduct={this.handleSelectProduct} />);

            if (this.props.productReducer.productId > 0) {
                const product = products.find(product => product.id === this.props.productReducer.productId);
                productDetail = (
                    <Modal className="large-modal" show={this.props.productReducer.productId > 0} onHide={this.handleProductDetailClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Product Details</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Image src={product.imageURL} responsive /><br />
                            <div>{product.name}</div>
                            <div className="description">{product.description}</div>
                            <h1 className="price">{product.price}</h1>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button className="btn-std" onClick={this.handleProductDetailClose}>Close</Button>
                            <Button bsStyle="primary" onClick={() => this.handleAddToCartSubmit(product)}>Add to Cart</Button>
                        </Modal.Footer>
                    </Modal>

                );
            }
        }



        return (
            <div id="main">
                <h1>Menu of </h1>
                <FormGroup>
                    <FormControl componentClass="select" onChange={this.handleSelectCategory}>
                        {this.props.productReducer.categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </FormControl>
                </FormGroup>

                <SearchBar handleChange={this.handleSearch} filter={this.props.productReducer.filter} />
                
                {productTable}
                {productDetail}

                <Button className="btn-checkout" bsStyle="primary"
                    componentClass={Link} href="/cart" to="/cart">Check out</Button>

                <Spinner isLoading={this.props.productReducer.isLoading} />


            </div >
        );


    };

};

export default ProductMain;