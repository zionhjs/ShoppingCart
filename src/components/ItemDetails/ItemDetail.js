import React, {Component} from 'react';
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap';

class ItemDetail extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            open:false
        };
    }

    render() {
        return (
            <div>
                <Button
                    className="item-details-button"
                    bsStyle="link"
                    onClick={() => this.setState({open: !this.state.open})}
                >
                    {this.state.open === false ? `See` : "Hide"} item details
                    {this.state.open === false ? ` +` : ` -`}
                </Button>

                <Collapse in={this.state.open}>
                    <div>
                        <Media>
                            <img
                                width={100}
                                height={100}
                                alt={"thumbnail"}
                                src="https://images-na.ssl-images-amazon.com/images/I/71XnZP3ofCL._AC_SL1500_.jpg"
                            />
                            <Media.Body>
                                <p>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red</p>
                                <Row className="show-grid">
                                    <Col md={6}>
                                        <strong>{`$${this.props.price}`}</strong>
                                        <br />
                                        <strong className="price-strike" >{`$${this.props.price}`}</strong>
                                    </Col>
                                    <Col md={6}>
                                        Qty:1
                                    </Col>
                                </Row>
                            </Media.Body>
                        </Media>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default ItemDetail;
