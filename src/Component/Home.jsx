import React from 'react'
import  GoogleLogin  from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn,setUserDate,setSignedIn } from '../features/UserSlice'

//
import '../styling/home.css'
//>>>>>>>>>>>>>>>>>>
function Home() {
    const dispatch = useDispatch();
    const login = (response) => {
      
        dispatch(setSignedIn(true));
        dispatch(setUserDate(response.profileObj));
    }
    const isSignedIn = useSelector(selectSignedIn);

    return (
        <>
        <div className="home__page" style={{ display: isSignedIn ? "none": "" }}>
         
{
    !isSignedIn ? (
    //    <Container> 

        <div className="login__message">
        <h2>📗</h2>
            <h1> A Reducer Favourite place!</h1>
            <p>we prove High quality online resouce for reading blogs. just sign up and start reading some quality blogs</p>
        <GoogleLogin 
        clientId = "345013306597-o6udqujhci826o0ssrm14sgo5me1pqa9.apps.googleusercontent.com"
        render = { (renderProps ) => (
            <button 
            onClick = { renderProps.onClick }
            disabled = { renderProps.disabled}
            className = "logIn_google btn_my"
            >Login with google </button>
        )}
        onSuccess = {login}
        onFailure = {login} 
        isSignedIn ={true}
        cookiePolicy={"single_host_origin"}
        />

        </div>
        //   </Container>
       
    ): (
        // <div className="deselect">
        //     <h1>Hello</h1>
        // </div>
        ""
    )
  
}
        </div>
        </>
    )
}

export default Home;
// 2WK6fb37ZbWGR-yCVZd7H93d
//345013306597-o6udqujhci826o0ssrm14sgo5me1pqa9.apps.googleusercontent.com