import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';

const ShowProductList = (props) => {
    const [products, setProducts] = useState([]);
    console.log("props:"+JSON.stringify(props));
    useEffect(() => {
        getProducts();
    },[]);
    const getProducts = () => {
        Axios
            .get('http://localhost:3000/catalog/productcategory/')
            .then(res => {
                console.log("Print-showBookList-API-response: " + res.data);
                setProducts(res.data["productcategory_list"]);
            })
            .catch(err => {
                console.log("Error from ShowBookList");
            })
    };
    let productList = "";
    if (!products) {
        productList = "there is no book record!";
    } else {
        productList = products.map((k) =>
            <li key={k._id}> {k.productcategory}</li>
        );
    }
    return (
        <div>
            <h2>Product List</h2>
            <ol>
                {productList}
            </ol>
        </div>
    );
};
export default ShowProductList;