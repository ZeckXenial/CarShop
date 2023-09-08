import React from "react";
import "./nav.css";
import CartModal from "./cartmodal.jsx"
import { MDBNavbar, MDBNavbarBrand, MDBContainer, MDBBtn, MDBInputGroup, MDBDropdownToggle} from "mdb-react-ui-kit";


function navbar (){

    return (
      <div className="container">
        <MDBNavbar dark bgColor='Dark'>
          <header><h2>Mi carrito</h2></header>
          <MDBInputGroup tag="form" className='nav-input'>
            <input className='form-control' placeholder="Escribe aqui para buscar" aria-label="Search" type='Search' />
          </MDBInputGroup>
          <MDBBtn type="submit">Buscar</MDBBtn>
          <MDBNavbarBrand><a href="CartModal">
           <img src="/public/checkoutbtn.png"  onClick={CartModal} alt="" /> </a></MDBNavbarBrand>
          
        
      </MDBNavbar></div>
        
    )
}

export default navbar