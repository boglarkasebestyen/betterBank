import React, {createContext, useState} from "react";

const MyContext = createContext();

function MyContextProvider({children}) {

    //from CREATE ACCOUNT COMPONENT
    const [successfullAccountMessageVisible, setSuccessfullAccountMessageVisible] = useState(false); 
	const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
	// new
	const [userName, setUserName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
	const [lastNameError, setLastNameError] = useState("");

	// new
	const [userNameError, setUserNameError] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwError, setPasswError] = useState("");

    const [users, setUsers] = useState([]);

	// old: let nameErrorStr = "";
    let firstNameErrorStr = "";
	let lastNameErrorStr = "";
	// new
	let userNameErrorStr = "";

    let emailErrorStr = "";
    let passwordErrorStr = "";


    //NO INPUT + ADDITIONAL VALIDATION
	const [loginSuccessMessageVisible, setLoginSuccessMessageVisible] = useState(false); 

	const validateLogin = () => {
		setUserNameError("");
		setPasswError("");

		//username
		if (!userName) {
			userNameErrorStr = "Oops! Your username can't be blank.";
			} else if (userName.length == 1) {
			userNameErrorStr = "Username must be longer than that.";
		}

		//password
		if (!password) {
			passwordErrorStr = "Oops! Your password can't be blank.";
		}

		//username
		if (userNameErrorStr == "") {
			validateUserName(userName);
		}

		//password
		if (passwordErrorStr == "") {
			validatePassword(password);
		}

		setUserNameError(userNameErrorStr);
		setPasswError(passwordErrorStr);
		return userNameErrorStr === "" && passwordErrorStr === "";
		//returns true and validate() is executed

	};

	let showSuccessMessageLogin = () => {
		if (loginSuccessMessageVisible) {
			return (
				<div className="successMessage">
						<h5>Awesome, {firstName}!</h5>
						<p>You are logged in.</p>
						{/* show OK button */}
						<button type="submit" id="clearLogin" className="submitBtn btn btn-light" onClick={() => clearMsgLogin()}>Ok</button>             
				</div>

			)
		}
		return;
};


	// ------------------------------

    const validate = () => {
			setFirstNameError("");
			setLastNameError("");
			// setUserNameError("");
			setEmailError("");
			setPasswError("");

			//email
			if (!email) {
					emailErrorStr = "Oops! Your email can't be blank.";
					//additional: email length 
			} else if (email.length == 1) {
					emailErrorStr = "Email must be longer than that.";
			}

			//firstName
			if (!firstName) {
					firstNameErrorStr = "Oops! Your first name can't be blank.";
					//additional: name length 
			} else  if (firstName.length == 1) {
					firstNameErrorStr = "First name must be longer than that.";
			} 

			//lastName
			if (!lastName) {
				lastNameErrorStr = "Oops! Your last name can't be blank.";
				//additional: name length 
			} else  if (lastName.length < 2) {
				lastNameErrorStr = "Last name must be longer than that.";
			} 

			//password
			if (!password) {
					passwordErrorStr = "Oops! Your password can't be blank.";
			}

			//validate, if there's no error message 
			//firstName
			if (firstNameErrorStr == "") {
					// alert("first name")
					validateFirstName(firstName);
			}

			//lastName
			if (lastNameErrorStr == "") {
				// alert("last name")
				validateLastName(lastName);
			}

			//email
			if (emailErrorStr == "") {
				validateEmail(email);
			}
			
			//password
			if (passwordErrorStr == "") {
					validatePassword(password);
			}

			setFirstNameError(firstNameErrorStr);
			setLastNameError(lastNameErrorStr);
			setUserNameError(userNameErrorStr);
			setEmailError(emailErrorStr);
			setPasswError(passwordErrorStr);
			//changed here from nameErrorStr, guess it's fine?
			return firstNameErrorStr === "" && lastNameErrorStr === "" && emailErrorStr === "" && passwordErrorStr === ""; //returns true and validate() is executed
    }; 

	//-----------------------------------------------

	//changed it from validaName to validateFirstName
    const validateFirstName = newFirstName => {
		setFirstNameError("");
		//additonal: limiting input to the letters of the English alphabet, including capital letters
			if(!newFirstName.match(/^[a-zA-Z][a-zA-Z\s]*$/)) {
			//this ok?
				firstNameErrorStr = "Enter letters only";
				setFirstNameError(firstNameErrorStr);
				return false;
			}
			return true;
    	};

	const validateLastName = newLastName => {
		setLastNameError("");
		//additonal: limiting input to a mix of letters and numbers
		if(!newLastName.match( /^[a-zA-Z][a-zA-Z\s]*$/)) {
		//this ok?
			lastNameErrorStr = "Enter letters only";
			setLastNameError(lastNameErrorStr);
			return false;
		}
		return true;
	};

	const validateUserName = newUserName => {
		setUserNameError("");
		//additonal: limiting input to only Alphabets, Numbers and Underscore and between 3 to 10 characters
		if(!newUserName.match(/^[a-zA-Z0-9_]{4,10}$/)) {
		//this ok?
			userNameErrorStr = "Only letters, numbers and underscore, and between 3-10 characters.";
			setUserNameError(userNameErrorStr);
			return false;
		}
		return true;
	};

	// clear successful login for OK button
	let clearMsgLogin = () => {
		setLoginSuccessMessageVisible(false);
	}

// ----------------------------------

    //additional: email formatting
    const validateEmail = newEmail => {
			let emailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/; 
			let isValidFormat = str => {
					return str.match(emailFormat);
			}

			if (!isValidFormat(newEmail)) {
					emailErrorStr = "Oops! Invalid email.";
					return false;
			}
			return true;
    };

    const validatePassword = newPassword => {
			if (newPassword.length == 1 || newPassword.length < 8) {
					passwordErrorStr = "Password must be longer than that.";
					return false;
			}
			return true;
    };

	//---------------

    //validation on onClick / Create Account button
    const handleClick = e => {
			if (validate()) { 
					setSuccessfullAccountMessageVisible(true); 
					//adding all new users, for "All Data"
					let newUser = {
							"firstName": firstName,
							"lastName": lastName,
							"email": email,
							"password": password
					};
					setUsers(users => users.concat(newUser));
			} else {
			return;
			}
    };

	let showSuccessMessageAccount = () => {
		if (successfullAccountMessageVisible) {
			return (
				<div className="successMessage">
						<h5>Awesome, {firstName}!</h5>
						<p>Your account was created.</p>
						{/* show OK button */}
						<button type="submit" id="clearForm" className="submitBtn btn btn-light" onClick={() => clearForm()}>Ok</button>             
				</div>
			)
		}
		return;
	}


	//-----------------

	//validation on onClick / Login button
    const handleClickLogin = e => {
		if (validateLogin()) { 
			setLoginSuccessMessageVisible(true); 
			clearForm();
		} else {
		return;
		}
	};

    //FORM INPUT  
	const handleFirstNameChange = e => {
		// setName(e.currentTarget.value); //if there's no letter validation
		let newFirstName = e.currentTarget.value;
		if (!newFirstName || validateFirstName(newFirstName)) {
			setFirstName(newFirstName);
		}
	};

	const handleLastNameChange = e => {
		// setName(e.currentTarget.value); //if there's no letter validation
		let newLastName = e.currentTarget.value;
		if (!newLastName || validateLastName(newLastName)) {
			setLastName(newLastName);
		}
	};

	const handleUserNameChange = e => {
		setUserName(e.currentTarget.value);
	  };

	
    const handleEmailChange = e => {
      setEmail(e.currentTarget.value);
    };

    const handlePasswordChange = e => {        
      setPassword(e.currentTarget.value);
    };

    //firing when creating new account
    const clearForm = () => {
			setFirstName("");
			setLastName("");
			setUserName("");
			setEmail("");
			setPassword("");
			setSuccessfullAccountMessageVisible(false);
    };


    // ------------------------------------------------------

    //from DEPOSIT COMPONENT
	let [balance, setBalance] = useState(0.0);
	let [depositAmount, setDepositAmount] = useState(0.0);
    let [depositError, setDepositError] = useState("");
    let [depositArr, setDepositArr] = useState([]);
	const [depositSuccessMessageVisible, setDepositSuccessMessageVisible] = useState(false); 


    let depositErrorStr = "";

    //validating numbers for deposit and withdraw
    const validateNr = newValue => {
			//clear error when there's new input
			setDepositError("");
			setWithdrawError("");

			if(!newValue.match(/^([(0-9)]+\.)*([(0-9)]+)*$/)) { //this regex matches numbers from 0 to 9 and + decimal numbers
					depositErrorStr = "Enter numbers only.";
					//this was missing:
					withdrawErrorStr = "Enter numbers only.";
					setDepositError(depositErrorStr);
					//this was missing:
					setWithdrawError(withdrawErrorStr);
					return false; //didn't validate
			} 
			return true; //did validate
    };

    //input
    const depositHandleChange = e => {
			let newValue = e.target.value;
			if (validateNr(newValue) || !newValue) { 
					setDepositAmount(newValue);
			} else {
					e.target.value = newValue.slice(0, -1); //when we delete the numbers, it cuts off the last element if that's not a number
			}     
				// setSuccessMessageVisible(false);  
				setDepositSuccessMessageVisible(false);
    };

    //submit + additional validation 
    const submitDeposit = currentValue => {
			if (currentValue == 0.0) {
					depositErrorStr = "Amount must be higher than 0.";
					setDepositError(depositErrorStr);
					setDepositSuccessMessageVisible(false);
					return;
        }

			if (currentValue.length >= 7) {
				depositErrorStr = "Amount must be lower than that.";
				setDepositError(depositErrorStr);
				setDepositSuccessMessageVisible(false);
				return;
			}

			//total amount / balance
			balance += parseFloat(currentValue);
			setBalance(balance);
			setDepositSuccessMessageVisible(true);
			setDepositAmount(0.0);

			//all new deposits for "All Data"
			let newDeposit = {
				"depositAmount": depositAmount
			};

			setDepositArr(depositArr => depositArr.concat(newDeposit));
    };

	// clear successful deposit & withdraw message for OK button
	let clearMsgDeposit = () => {
		setDepositSuccessMessageVisible(false);
	}

    let showSuccessMessageDeposit = () => {
			if (depositSuccessMessageVisible) {
				return (
					<div className="successMessage">
							<h5>Awesome!</h5>
							<p>Your deposit was received!</p>
							{/* show OK button */}
							<button type="submit" id="clearDep" className="submitBtn btn btn-light" onClick={() => clearMsgDeposit()}>Ok</button>             
					</div>

				)
			}
			return;
    };

    // ------------------------------------------------------

    //from WITHDRAW COMPONENT
    let [withdrawAmount, setWithdrawAmount] = useState(0.0);
    let [withdrawError, setWithdrawError] = useState("");
    let [withdrawArr, setWithdrawArr] = useState([]);
	const [withdrawSuccessMessageVisible, setWithdrawSuccessMessageVisible] = useState(false); 

    let withdrawErrorStr = "";

    //input
    const withdrawHandleChange = e => {
			let newValue = e.target.value;
			if (validateNr(newValue) || !newValue) { 
				setWithdrawAmount(newValue);
			} else {
				e.target.value = newValue.slice(0, -1); //when we delete the numbers, it cuts off the last element if that's not a number
			} 
			setWithdrawSuccessMessageVisible(false);   
    };

    //submit + additional validation
     const submitWithdrawal = currentValue => {
			if (currentValue == 0.0) {
				withdrawErrorStr = "Amount must be higher than 0.";
				setWithdrawError(withdrawErrorStr);
				setWithdrawSuccessMessageVisible(false);
				return;
			}

			if (currentValue.length >= 7) {
				withdrawErrorStr = "Amount must be lower than that.";
				setWithdrawError(withdrawErrorStr);
				setWithdrawSuccessMessageVisible(false);
				return;
			}

			if (currentValue > balance) {
				withdrawErrorStr = "Amount higher than the account balance.";
				setWithdrawError(withdrawErrorStr);
				setWithdrawSuccessMessageVisible(false);
			} else {
				setBalance(balance - parseFloat(currentValue));
				setWithdrawError("");
				setWithdrawSuccessMessageVisible(true);
				setWithdrawAmount(0.0);
				
				//all withdrawals, for "All Data"
				let newWithdraw = {
					"withdrawAmount": withdrawAmount
				};

				setWithdrawArr(withdrawArr => withdrawArr.concat(newWithdraw));
			}
  	};

	let clearMsgWithdraw = () => {
		setWithdrawSuccessMessageVisible(false);
	}
	
    let showSuccessMessageWithdraw = () => {
			if (withdrawSuccessMessageVisible) {
					return (
						<div className="successMessage">
							<h5>Awesome!</h5>
							<p>Your withdrawal was succesful.</p>
							{/* show OK button */}
							<button type="submit" id="clearWith" className="submitBtn btn btn-light" onClick={() => clearMsgWithdraw()}>Ok</button>             
						</div>
					)
			}
			return;
    };


    const defaultContext = {
			//state:
			firstName,
			lastName,
			userName,
			email,
			password,
			firstNameError,
			lastNameError,
			userNameError,
			emailError,
			passwError,
			depositAmount,
			balance,
			depositError,
			successfullAccountMessageVisible,
			withdrawSuccessMessageVisible,
			depositSuccessMessageVisible,
			withdrawAmount,
			withdrawError,
			users,
			depositArr,
			withdrawArr,
			//functions:
			validate,
			handleClick,
			handleClickLogin,
			handleFirstNameChange,
			handleLastNameChange,
			handleUserNameChange,
			handleEmailChange,
			handlePasswordChange,
			validateNr,
			depositHandleChange,
			submitDeposit,
			showSuccessMessageDeposit,
			withdrawHandleChange,
			submitWithdrawal,
			showSuccessMessageWithdraw,
			showSuccessMessageLogin,
			showSuccessMessageAccount
    };

    return (
      <MyContext.Provider value={defaultContext}>
        {children}
      </MyContext.Provider>
    )
}

export {MyContext, MyContextProvider};
