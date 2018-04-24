import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Image, Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap';

const Home = (props) => {
    return (
        <div id="main">
            <Carousel>
                <Carousel.Item>
                    <Image responsive src="/chinese-food.jpg" />
                    <Carousel.Caption>
                        <h1>Chinese Crusine</h1>
                        <Button bsStyle="primary" bsSize="lg" componentClass={Link}
                            href="/products" to="/products">Order Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image responsive src="/western-food.jpg" />
                    <Carousel.Caption>
                        <h1>Western Food</h1>
                        <Button bsStyle="primary" bsSize="lg" componentClass={Link}
                            href="/products" to="/products">Order Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image responsive src="/thai-food.jpg" />
                    <Carousel.Caption>
                        <h1>Thai Selection</h1>
                        <Button bsStyle="primary" bsSize="lg" componentClass={Link}
                            href="/products" to="/products">Order Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />

            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <Thumbnail src="/online.jpg" >
                            <h1>Make your orders Online and track your orders' status.</h1>
                        </Thumbnail>
                    </Col>

                    <Col xs={12} md={6}>
                        <Thumbnail src="/queue.jpg" >
                            <h1>No need to stand in a queue, and pick up as you come.</h1>
                        </Thumbnail>

                    </Col>

                </Row>
            </Grid>

            <br />

            <h1>Getting Here</h1>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.0260713269145!2d151.10300751504116!3d-33.96616938062952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b9bd5164b7bb%3A0xc4f0762ecf7abf51!2sWestfield+Hurstville!5e0!3m2!1sen!2sau!4v1524059394761"
                    width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            </div>
        </div>

    );
};

export default Home;