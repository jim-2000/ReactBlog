import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { Form, Navbar,Nav, Button,FormControl} from 'react-bootstrap'
//
import
 {
   selectSignedIn, 
   selectUserData, 
   setSignedIn,
   setUserDate,
   setSearchInput
  } from '../features/UserSlice';
import logo from '../styling/logo.png';
import '../styling/navbar.css'
import { GoogleLogout } from 'react-google-login';
//import { GoogleLogout } from 'react-google-login';

function NavbarDisk() {
const isSignedIn = useSelector(selectSignedIn);
const [inputValue, SetinputValue] = useState("tech");
const userData = useSelector(selectUserData);
const dispatch = useDispatch()
const logout = (response) => { 
dispatch(setSignedIn(false))
dispatch(setUserDate(null))
}
const handleClick = (e)=> {
  e.preventDefault();
  dispatch(setSearchInput(inputValue))
};
const FormSubmit =(e)=>{
  e.preventDefault();

}
/// style 

//>>>>>>>>>>>>>>>>>>>>>>>>
    return (
      
        <Navbar className="mybg" variant="light" fixed="top"  expand="lg">
  <Navbar.Brand href="#home" className="text-white">
  <img
        alt=""
        src={logo}
        width="60"
        height="30"
        className="d-inline-block align-top mx-2"
      /> 
    captaion</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto navbar_my">
      <Nav.Link href="#home" className="navitem_c">Home</Nav.Link>
      <Nav.Link href="https://github.com/jim-2000" className="navitem_c">About</Nav.Link>
      <Nav.Link href="https://www.facebook.com/Exceptional.jim404/" className="navitem_c">Contact</Nav.Link>
     
    
    </Nav>
    {
        isSignedIn &&
        (
          <Form inline onSubmit={FormSubmit}>
            <FormControl
            type="text" value={inputValue}
            placeholder="Search" className="mr-sm-2"
            onChange={(e)=> SetinputValue(e.target.value)}
            />
            <Button variant="outline-success" onClick={handleClick}>Search</Button>
          </Form>
        )
    }
    {
        isSignedIn ? (
           <>
            <Navbar.Text className="navbarText userName">
            {userData?.givenName}
          </Navbar.Text>
      
          <Avatar className="userimg" alt={userData?.givenName} src={userData?.imageUrl} />

          <GoogleLogout
        clientId = "345013306597-o6udqujhci826o0ssrm14sgo5me1pqa9.apps.googleusercontent.com"
            render={(renderProps) => (
                       
                <Button 
                size="sm"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logoutbtn"
                variant="danger"> Logout 😦</Button>
            )}
            onLogoutSuccess={logout}
          />
           </>
        ):(
            <>
            <Navbar.Text className="navbarText userName">
           user is not loged in
          </Navbar.Text>
             </>
        )
    }


  </Navbar.Collapse>
  
</Navbar>
    )
}

export default NavbarDisk;

