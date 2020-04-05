import React, {Component, useEffect, useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link, BrowserRouter as Router, Route} from 'react-router-dom'
import ShowProductList from "./ShowProductList";
import CreateProduct from "./CreateProduct";
import NavDropdown from "react-bootstrap/NavDropdown";
import Axios from "axios";

var styles = require("../stylesheets/Navmenu.module.css");


const Navmenu = () => {
    const [prodTypes, setProdTypes] = useState([]);
    useEffect(() => {
        /* getProdTypes();*/
    }, []);
    const getProdTypes = () => {
        Axios
            .get('http://localhost:3000/catalog//products')
            .then(res => {
                console.log("Print-showProdTypeList-API-response: " + JSON.stringify(res.data["product_list"][0]["name"]));
                setProdTypes(res.data["product_list"][0]["name"]);
            })
            .catch(err => {
                console.log("Error from prod_type_list");
            })

    };
    let prodTypeList = "";
    if (!prodTypes) {
        prodTypeList = "there is no record!";
    } else {
        prodTypeList = prodTypes.map((k) =>

            <NavDropdown.Item className="text-black" href={k}>{k}</NavDropdown.Item>
        );
    }
    return (
        <React.Fragment>
            <Navbar fluid className={styles.navbar}>
                <Navbar.Brand href="#home"><h2 className={styles.headerText}>Pooja</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link className="text-white" exact to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link className="text-white" to='/products'>Products</Link></Nav.Link>
                        <Nav.Link><Link className="text-white" to='/products#create'>Create Products</Link></Nav.Link>
                        <NavDropdown className={styles.whiteText} title="Product Type" id="basic-nav-dropdown"
                                     onClick={getProdTypes}>
                            {prodTypeList}
                            <hr/>
                            <NavDropdown.Item className="text-black" href="/products">All Products</NavDropdown.Item>
                        </NavDropdown>
                        {/* <NavDropdown className="text-white"  className={styles.whiteText}title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item className="text-white" href="#action/${prodTypeList}">Action</NavDropdown.Item>
                                <NavDropdown.Item className="text-white" href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item className="text-white" href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="text-white" href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </React.Fragment>
    );
};
export default Navmenu;
