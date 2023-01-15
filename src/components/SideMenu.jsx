import React from "react";
import { Container } from "../styled/Sidemenu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Person2Icon from "@mui/icons-material/Person2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../apiCalls/userApi";
import { Badge } from '@mui/material';


const SideMenu = ({ isChecked }) => {
  const {isLoggedIn} = useSelector(state=>state.user)
  const {quantity} = useSelector(state=>state.cart)

  const dispatch = useDispatch()
  const handleLogout =()=>{
    logout(dispatch)
  }

  const fontColor = "inherit";
  return (
    <Container
      style={{
        right: "30px",
        opacity: isChecked && "1",
        pointerEvents: !isChecked && "none",
        zIndex: "22",
        top: isChecked && "120px",
        
      }}
    >
      <Link className="nav-links"  to="/all"> 
        <ShoppingBagIcon
          style={{
            fontSize: "2vmax",
            color: fontColor,
            marginLeft: "1vmax",
            marginRight: "3px",
          }}
        />{" "}
        Shop All
      </Link>
      { !isLoggedIn &&
      <Link to="/login"  className="nav-links">
        <Person2Icon
          style={{
            fontSize: "2vmax",
            color: fontColor,
            marginLeft: "1vmax",
            marginRight: "3px",
          }}
        />{" "}
        Account
      </Link>}
      <Link to="/contact"   className="nav-links">
        {" "}
        <ContactMailIcon
          style={{
            fontSize: "2vmax",
            color: fontColor,
            marginLeft: "1vmax",
            marginRight: "3px",
          }}
        />{" "}
        Contact
      </Link>
      <Link to="/cart"  className="nav-links">
        {" "}
      <Badge badgeContent={quantity} color="primary">
        <ShoppingCartIcon
          style={{
            fontSize: "2vmax",
            color: fontColor,
            marginLeft: "1vmax",
            marginRight: "3px",
          }}
          />{" "}
          </Badge>
        <span></span> Cart
      </Link>
      {
        isLoggedIn &&
      <button onClick={handleLogout} style={{color:"black",cursor:'pointer'}} to="/"  className="nav-links">
        {" "}
        <LogoutIcon
          style={{
            fontSize: "2vmax",
            color:"black",
            marginLeft: "1vmax",
            marginRight: "3px",
            
          }}
        />{" "}
        LOGOUT
      </button>}
    </Container>
  );
};

export default SideMenu;
