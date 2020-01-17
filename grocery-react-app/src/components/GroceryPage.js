import React from 'react';
import Product from './Product';
import './GroceryPage.css';

class GroceryPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            products: []
        };
    }
    
    async componentDidMount  () { 

        const response = await fetch('https://floating-lake-27126.herokuapp.com/api/products');
        const products = await response.json();

        this.setState({ products: products }) 
    

    
    }
    

    render() {

        return(
            <div className="product-list">
                { this.state.products.map((product, index) => {
                    return(
                    <Product key={ index } product={ product } />
                    )

                } ) }
            </div>
        )
    }
}

export default GroceryPage



