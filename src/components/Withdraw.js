import React, {useContext} from "react";
import {MyContext} from "../myContext/MyContext";
import Card from "././Card";


function Withdraw() {
  const {
    //state:
    balance,
    //functions:
    withdrawAmount,
    withdrawHandleChange,
    withdrawError,
    submitWithdrawal,
    showSuccessMessageWithdraw
  } = useContext(MyContext);

  return (
    <Card
			bgcolor="warning"
			header="Withdraw"
			body={
				<>  
           	{(() => {
              if (withdrawError) {
                return (
                  <div className="error">{withdrawError}</div>
                  );
              }
            })()}

            {showSuccessMessageWithdraw()}

					{/* <h5 className="deposit mb-4">Skip extra trips to the bank and withdraw your money online!</h5> */}
					<h6 className="withdraw-text mt-4 mb-5 font-weight-bolder">Your current balance is: ${balance}</h6>
					<h6 className="withdraw-text mt-4 font-weight-bolder">The amount you wish to withdraw:</h6>
					<input type="input" className="form-control" id="email" placeholder="Amount" onChange={withdrawHandleChange}/>
					{/* <div>
						<div className="error mb-3">{withdrawError}</div>
					</div> */}
					<br/>
					<button type="submit" disabled={!withdrawAmount} id="withdraw" className="submitBtn btn btn-light" onClick={() => submitWithdrawal(withdrawAmount)}>Withdraw</button>
				</>
      }
    />
  )
}

export default Withdraw;
