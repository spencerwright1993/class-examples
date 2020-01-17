import React from "react";
import './Product.css';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
   
    };
  }

  render() {
    return (
      <div className="product-container">
        { this.props.product.name }
      </div>
    );
  }
}

export default Product;
