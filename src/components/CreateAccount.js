import React, {useContext} from "react";
import {MyContext} from "../myContext/MyContext";
import Card from "././Card";

function CreateAccount() {

	const {
		//state
		firstName,
		lastName,
		userName,
		email,
		password,
		userNameError,
		firstNameError,
		lastNameError,
		emailError,
		passwError,
		successfullAccountMessageVisible,
		showSuccessMessageAccount,
		//functions
		handleClick,
		handleFirstNameChange,
		handleLastNameChange,
		handleUserNameChange,
		handleEmailChange,
		handlePasswordChange,
	} = useContext(MyContext);

	return (
		<Card
				bgcolor="warning"
				header="Open Account" 
				body={
				<>
						{(() => {
								if (userNameError) {
									return (
										<div className="error">{userNameError}</div>
										);
									} 
								})()}

							{(() => {
								if (firstNameError) {
									return (
										<div className="error">{firstNameError}</div>
										);
									} 
								})()}

								{(() => {
								if (lastNameError) {
									return (
										<div className="error">{lastNameError}</div>
										);
									} 
								})()}

								{(() => {
								if (emailError) {
									return (
										<div className="error">{emailError}</div>
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

						{showSuccessMessageAccount()}
			
					<h6 className="login-text mt-5">Username</h6>
					<input type="input" className="form-control" id="username" placeholder="Create a username." value={userName} onChange={handleUserNameChange}/>
					<h6 className="login-text mt-4">First Name</h6>
					<input type="input" className="form-control" id="name" placeholder="Your first name is..." value={firstName} onChange={handleFirstNameChange}/>
					<h6 className="login-text mt-4">Last Name</h6>
					<input type="input" className="form-control" id="name" placeholder="Your last name is..." value={lastName} onChange={handleLastNameChange}/><br/>
					<h6 className="login-text">Email address</h6>
					<input type="input" className="form-control" id="email" placeholder="Your email address is..." value={email} onChange={handleEmailChange}/><br/>
					<h6 className="login-text">Password</h6>
					<input type="password" className="form-control" id="password" placeholder="**********" value={password} onChange={handlePasswordChange}/>
					<br/>
					<button type="submit" disabled={!userName && !firstName && !lastName && !email && !password} id="create" className="submitBtn btn btn-light" onClick={e => handleClick()} >Create Account</button>
				</>
			}
		/>
	)
}

export default CreateAccount;