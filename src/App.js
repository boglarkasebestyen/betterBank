import React from "react";
import {HashRouter, Route} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Navbar from "./components//Navbar";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/AllData";

function App() {
	return (
		<HashRouter>
			<Navbar/>
			<div className="container"> 
				<Route path="/" exact component={Login} />
				<Route path="/CreateAccount" component={CreateAccount} />
				<Route path="/Deposit/" component={Deposit} />
				<Route path="/Withdraw/" component={Withdraw} />
				<Route path="/AllData/" component={AllData} />
			</div>
		</HashRouter>
	);
}

reportWebVitals();

export default App;