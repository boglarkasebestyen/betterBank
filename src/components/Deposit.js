import React, {useContext} from "react";
import {MyContext} from "../myContext/MyContext";
import Card from "././Card";

function Deposit() {

  const {
    //state:
    depositAmount,
    balance,
    depositError,
    //functions:
    depositHandleChange,
    submitDeposit,
    showSuccessMessageDeposit
    
  } = useContext(MyContext);

  return (
    <Card
        bgcolor="warning"
        header="Deposit"
        body= {
          <>  
          	{(() => {
              if (depositError) {
                return (
                  <div className="error">{depositError}</div>
                  );
              }
            })()}

            {showSuccessMessageDeposit()}
          
						{/* <h5 className="deposit mb-4">Skip extra trips to the bank and deposit your money online!</h5> */}
						<h6 className="deposit-text mt-4 mb-5 font-weight-bolder">Your current balance is: ${balance}</h6>
						<h6 className="deposit-text mt-4 font-weight-bolder">The amount you wish to deposit:</h6>
						<input type="input" className="form-control" id="depositAmount" placeholder="Amount" onChange={depositHandleChange}/>
						{/* <div>
							<div className="error mb-3">{depositError}</div>
						</div> */}
						<br/>                                                                              
						<button type="submit" disabled={!depositAmount} id ="deposit" className="submitBtn btn btn-light" onClick={() => submitDeposit(depositAmount)}>Deposit</button>            
          </>
        }  
    />
  )
}

export default Deposit;
