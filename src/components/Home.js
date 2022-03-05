import React from "react";
import Card from "././Card";

function Home(){
  return (
    <Card
      bgcolor="warning"
      txtcolor="#000"
      header="BetterBank® America"
      title="BetterBank® is here to help with your decisions along the way!"
      text="Get started by using the navigation bar above"
      body={(<img src="https://cdn.pixabay.com/photo/2020/02/18/11/03/bank-4859142_960_720.png" className="img-fluid" alt="bank"/>)}
    />    
  );  
}

export default Home;