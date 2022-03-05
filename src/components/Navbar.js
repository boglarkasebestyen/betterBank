import React from "react";
import {useLocation} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "../myContext/MyContext";
import ReactTooltip from "react-tooltip";
import Login from "./Login";
import logo from "../images/logo.png";

function NavBar() {

  const {
    userName,
	} = useContext(MyContext);

  /* Highlighting: The navigation bar highlights the element of the current page the user is on. */
  /* Highlight the current page the user is on / active page, even on refresh */
  const location = useLocation();
  
  // an array of objects; pages[classIndex] is enough to access it
  const pages = [{id:"login", text: "Login", tooltipText: "Log in to your account", href:"#/"},
                {id:"createAccount", text: "Open Acount", tooltipText: "Open your BetterBank® account", href:"#/createAccount"},                
                {id:"deposit",text: "Deposit", tooltipText: "Deposit cash & checks on any device", href:"#/deposit"},
                {id:"withdraw",text: "Withdraw", tooltipText: "Withdraw cash & checks on any device", href:"#/withdraw"},
                {id:"allData",text: "All Data", tooltipText: "All your transactions and more", href:"#/alldata"},
  ];

  const getClass = (classIndex) => {
    const currentPage = location.pathname; //accessing pathname from the location object
    const renderedPage = pages[classIndex].href.split("#").pop(); //from which we'll get "withdraw", "deposit", etc.
    return renderedPage === currentPage ? "current" : "";
  }

  return (
    <>   
      <div className="blurr">
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* <div className="username">{userName}</div> */}
          <a href={{Login}} className="navbar-brand mt-1 ml-5">
            <img src={logo} className="banklogo" alt="BetterBank"/>
          </a>
          <div className="container">
            {/* BUTTON */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              {/* hamburger icon */}
              <span className="navbar-toggler-icon"></span> 
            </button>

            {/*  container containing nav items from item 1 till length of page */}
            <div className="collapse navbar-collapse nav-container" id="navbarNav">

              {/* container containing each nav item only */}
              {/* ml-auto will align the items to the right */}
              <ul className="navbar-nav navitem-container ml-auto">

                {/* nav items: */}
                {/* Highlighting: The navigation bar highlights the element of the current page the user is on. */}
                {/* Tooltip implementation:
                When a user hovers their cursor over a navigation bar element, they see a few words describing that page. */}
                
                {pages.map((item, index) => 
                  <li key={index} className="nav-item">
                    <a data-tip data-for={item.id} className={`nav-link pl-2 pr-2 m-1 ${getClass(index)}`} href={item.href}>{item.text}</a>
                    <ReactTooltip id={item.id} effect='solid'>
                      <span>{item.tooltipText}</span>
                    </ReactTooltip>
                    {/* note to self: data-for={item.id} and ReactTooltip id={item.id} need to be the same */}
                  </li>
                )}
              </ul>
              {/* end of container for nav items */}
            </div>
            {/* end of main container */}
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar;

