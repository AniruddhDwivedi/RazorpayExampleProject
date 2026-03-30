import React from "react";

const GiveMoney = () => {
  return (
    <div className="give-money-page">
      <h2>CAN YOU PUT A PRICE ON PEACE OF MIND?</h2>
      
      <div className="money-text">
        <p>
          The Epsilon Program does not ask for much. We only ask for everything you have 
          and your total devotion to Kraff. In exchange, we offer you the 4th Paradigm 
          and a life free from the shackles of logic and red-haired influence.
        </p>
        
        <p>
          Generosity is the highest form of enlightenment. By clicking the button below, 
          you are not just spending money; you are investing in your own eternal 
          happiness and the eventual construction of our great learning center.
        </p>
        
        <p>
          <em>"The person who gives the most is the person who is the most happy."</em> 
          <br />— Cris Formage
        </p>
      </div>

      <div className="donation-container">
        <button 
          className="donate-btn" 
          onClick={() => alert("Redirecting to the spiritual payment gateway...")}
        >
          DONATE
        </button>
      </div>
    </div>
  );
};

export default GiveMoney;