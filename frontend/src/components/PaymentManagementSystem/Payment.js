import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [cardNo, setcardNo] = useState("");
  const [CVV, setCVV] = useState("");
  const [expDate, setexpDate] = useState("");

  function setData(e) {
    e.preventDefault();

    const newPayment = {
      name,
      phone,
      city,
      address,
      cardNo,
      CVV,
      expDate,
    };

    axios
      .post("http://localhost:8070/payment/add", newPayment)
      .then(() => {
        alert("Successfully Saved ✅");
      })
      .catch((err) => {
        alert("Not Saved ❗");
      });
  }

  return (
    <div className="container">
      <br></br>
      <div className="pay-title-edit">
        <h1>Easy Payment with Your credit card</h1>
      </div>
      <section className="pay-form-box">
        <div className="fullform">
          <form className="container" onSubmit={setData}>
            <div className="row">
              <div className="col-md-5 pay-address-edit">
                <h2>
                  <u>Select Address</u>
                </h2>
                <label>Enter City</label>
                <br></br>
                <input
                  type="text"
                  className="input-short"
                  placeholder="Enter your City"
                  onChange={(e) => {
                    setcity(e.target.value);
                  }}
                  required
                ></input>
                <br></br>
                <label>Address</label>
                <br></br>
                <input
                  type="text"
                  className="input-short"
                  placeholder="Enter Your Address"
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                  required
                ></input>
                <br></br>
                <label>Phone Number</label>
                <br></br>
                <input
                  type="tel"
                  className="input-short"
                  maxLength={10}
                  //pattern="[0-9]"
                  title="Only numbers (0-9) are allowed."
                  placeholder="Enter Phone"
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                  required
                ></input>

                <br></br>
                <br></br> 
                <br></br>
                <br></br>
                <br></br>
                <br></br>


<div className="col-md-12">
                <input
                  type="button"
                  className="btn btn-dark"
                  onClick={() => navigate(`/Paymentview`)}
                  value="VIEW PAYMENTS"
                />
                </div>
                <br></br>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 pay-address-edit">
                <h2>
                  <u>Add Card Details</u>
                </h2>
                <label>Card Number</label>
                <br></br>
                <input
                  type="number"
                  className="pay-input-short"
                  maxLength={16}
    
                  placeholder="Card Number"
                  onChange={(e) => {
                    setcardNo(e.target.value);
                  }}
                 
                  required
                ></input>
                <br></br>
                <label>Card Holder's Name</label>
                <br></br>
                <input
                  type="text"
                  className="pay-input-short"
                  maxLength={60}
                  placeholder="Enter name"
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  required
                ></input>
                <br></br>
                {/* Expiry Date */}
                <label>Expiry Date</label>
                <br></br>
                <div className="row">
                  <div className="col-md-7">
                    <input
                      type="text"
                      min="23"
                      className="pay-year-input-short"
                      pattern="(\)"
                      maxLength={2}
                      placeholder="year"
                      onChange={(e) => {
                        setexpDate(e.target.value);
                      }}
                      required
                    ></input>
                  </div>
                  <div className="col-md-2">
                    <input
                      type="text"
                      max="12"
                      className="pay-mon-input-short"
                      maxLength={2}
                      placeholder="month"
                      onChange={(e) => {
                        setexpDate(e.target.value);
                      }}
                      required
                    ></input>
                  </div>
                </div>

                <div className="row">

                <div className="col-md-12">
                  <br></br>
                  
                
                <label>C V V</label>
                <br></br>
               
                <input
                  type="password"
                  className="pay-cvv-input-short"
                  maxLength={3}
                  placeholder="cvv"
                  onChange={(e) => {
                    setCVV(e.target.value);
                  }}
                  required
                ></input>
                </div>
                </div>
                <br></br>

                <div className="row">
                <div className="col-md">
                <button type="submit" className="btn btn-dark">
                  SAVE DETAILS
                </button>
                </div>
                <br></br>
                <br></br>
                
              
              </div>
            </div>
            </div>
          </form>
          
        </div>
      </section>
      <hr></hr>
    </div>
  );
}
