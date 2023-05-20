import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";
import 'jspdf-autotable';
import './report';

export default function Ofertable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost:8070/payment/posts")
      .then((res) => {
        setUsers(res.data.existingPosts);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handlePdfGeneration() {
    const doc = new jsPDF();

    // Set company name
    const companyName = '                                                Crips Crops Payments';

    // Set table header
    const header = [["Name", "Phone", "Address", "City"]];

    // Add data rows
    const data = users.map(user => [user.name, user.phone, user.address, user.city]);

    // Add table to document
    doc.autoTable({ head: header, body: data });

    // Add company name and date/time to PDF
    doc.text(companyName, 10, 10);

    // Download the PDF document
    doc.save('payment_report.pdf');
  }

  return (
    <center>
      <br></br>
      <h1>Payment Report</h1>
     <br></br>
      
      <div className='box'>
        {Array.isArray(users) && users.length > 0 ? (
          <table className="table-striped" id="my-table" border={1} cellPadding={20}>
            <thead>
              <tr>
                <th><b>Name</b></th>
                <th><b>Phone Number</b></th>
                <th><b>Address</b></th>
                <th><b>City</b></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found.</p>
        )}

        <br></br>
        
        <button type='button' onClick={handlePdfGeneration} className="btn btn-primary">
          Generate PDF
        </button>
        <br></br><br></br>

        <a className="btn btn-dark" href="/paymentview" style={{background: 'linear-gradient(0deg, rgba(50,245,0,0.6503851540616247) 0%, rgba(0,130,5,1) 75%);'}}>
                                        <i className="far fa-info-alt"></i>&nbsp;Back
                                    </a>
      </div>
    </center>
  );
}
