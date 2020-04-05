import React from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import ShowProductList from "./components/ShowProductList";
import Navmenu from "./components/navmenu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Home from "./components/Home";
import Switch from "react-bootstrap/cjs/Switch";
import FloatingMenu from "./components/FloatingButton"
function App() {

  return (

    <Container fluid className="App">
      <Row className={"fluid"}>
        <Navmenu/>
      </Row >
            <Row className={"rowDiv"}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/products' component={ShowProductList}/>
                    <Route path='/products#create' component={CreateProduct}/>
                </Switch>
            </Row>
        <div className={"float-button"}>
          <FloatingMenu/>
        </div>
    {/* <Switch>
        <div>
          <Route path='/' component={Home} />
          <Route exact path='/products' component={ShowProductList} />
            <Route path='/products#create' component={CreateProduct}/>
          <Route path='/edit-book/:id' component={UpdateProductInfo} />
            <Route path='/show-book/:id' component={ShowProductDetails} />
        </div>
      </Switch>*/}

    </Container>

  );
}

export default App;
