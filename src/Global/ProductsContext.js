import React,{createContext,useState} from "react";
import earbuds from "../assets/earbuds.jpg";
import headphone from "../assets/headphone.jpg";
import iphone from "../assets/iphone.jpg";
import phone from "../assets/phone.jpg";
import toy from "../assets/toy.jpg";
import microphone from "../assets/microphone.jpg";
import laptop from "../assets/laptop.jpg";
import tshirts from "../assets/t-shirts.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
        { id: 1,name: 'Earbuds',price :300,image: earbuds, status: 'hot'},
        { id: 2,name: 'Head Phones',price :30,image: headphone, status: 'new'},
        { id: 3,name: 'Iphone',price :400,image: iphone, status: 'hot'},
        { id: 4,name: 'Phone',price :3040,image: phone, status: 'hot'},
        { id: 5,name: 'Toy',price :20,image: toy, status: 'new'},
        { id: 6,name: 'Microphone',price :150,image: microphone, status: 'hot'},
        { id: 7,name: 'Laptop',price :200,image: laptop, status: 'hot'},
        { id: 8,name: 'T-Shirts',price :200,image: tshirts, status: 'hot'}
    ]);
    return(
        <ProductsContext.Provider value={{products:[...products]}}>
            {props.children}
        </ProductsContext.Provider>
    );   
}

export default ProductsContextProvider;