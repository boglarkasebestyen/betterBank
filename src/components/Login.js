import React, {useContext} from "react";
import {MyContext} from "../myContext/MyContext";
import {useHistory} from "react-router-dom";
import Card from "././Card";

function Login() {

	const {
		//state
    userName,
		password,
		userNameError,
		passwError,
		successfullAccountMessageVisible,
		//functions
    handleClickLogin,
		handleUserNameChange,
		handlePasswordChange,
    showSuccessMessageLogin,
	} = useContext(MyContext);

	/*
	The useHistory hook allows us to access React Router's history object.

	Through the history object, we can access and manipulate the current state of the browser history.

	All we need to do is to call the useHistory hook inside a functional component.

	We can use this object to redirect the user to another page by calling history.push('/example-route').
	*/

	//redirects me to Create Account when clicking "Open Account" in Login 
	//but doesn't highlight on which nav tab I'm on
	const history = useHistory();
  const redirect = () => {
    // history.push('/createAccount');
		// using the href from Navigation, not the "path" I was thinking I need: {id:"createAccount", text: "Open Acount", tooltipText: "Open your BetterBank® account", href:"#/createAccount"}
		// I don't want to be able to go back in the browser:
		history.replace('/createAccount');
  }

	return (
		<Card
			bgcolor="warning"
			header="Account log in"
			body={
				<>
				{/* it can't be done with if/else or without else */} 
					{(() => {
						if (userNameError) {
							return (
								<div className="error">{userNameError}</div>
								);
						}
					})()}
					
					{(() => {
						if (passwError) {
							return (
								<div className="error">{passwError}</div>
							);
						}
					})()}


          {showSuccessMessageLogin()}
					
					<h6 className="login-text mt-5">Username</h6>
					<input type="input" className="form-control" id="username" placeholder="@" value={userName} onChange={handleUserNameChange}/>
					<h6 className="login-text mt-4">Password</h6>
					<input type="password" className="form-control" id="password" placeholder="**********" value={password} onChange={handlePasswordChange}/>
					<br/>
					<button type="submit" disabled={!userName && !password} id="login" className="submitBtn btn btn-light" onClick={e => handleClickLogin()} >Log in</button>
						<br/>
					<h6 className="account-text font-weight-bold mt-4">Don't have an account yet?</h6>
					<br/>
					<button type="submit" id="create" className="submitBtn btn btn-light" onClick={redirect} >Open Account</button>
				</>
				}
		/>
	)
}

export default Login;