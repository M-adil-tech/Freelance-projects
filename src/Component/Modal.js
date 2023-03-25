import React from "react";
import "./Popup.css";




function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
         
        </div>
        <div className="title">
          <h2>Great! Let's get started with your</h2>
          <h2 id="heading">Digital Sahulat Sarmayakari</h2>
          <h2>Account Application</h2>
        </div>
        <div className="body">
        <h3>Eligibility:</h3>

        <ul>
  <li>18 years and above</li>
  <li>Resident / Non Resident Pakistani</li>
  <li>Salaried / Self-employed / Student / Housewife / Retired</li>
  
</ul>
<h3>Keep the following ready:</h3>
<ul>
  <li>NADRA ID Card</li>
  <li>Bank IBAN Number</li>
  
  
</ul>
<h3>Investment Limits:</h3>

<ul>
  <li>Life Time Limit - PKR 1,000,000</li>
  <li>Annual Limit - PKR 800,000</li>
  <li>Transaction Limit - PKR 400,000</li>
  
  
</ul>
<p>
Your progress will be automatically saved. You may resume your application whenever convenient.
</p>
        </div>
        <div className="footer">
       
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            PROCEED
          </button>
          
        
        </div>
      </div>
    </div>
  );
}

export default Modal;