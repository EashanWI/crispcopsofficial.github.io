import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Link to={'/StockDashboard'}><button className="admn-btn-dash admn-btn-dash-stock">STOCK</button></Link>
                </div>
                <div className="col-md-6">
                    <Link to={'/genaratereportbidAdmin'}><button className="admn-btn-dash admn-btn-dash-bid">BIDS</button></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Link to={'/adminfarmerreport'}><button className="admn-btn-dash admn-btn-dash-farmer">FARMER</button></Link>
                </div>
                <div className="col-md-6">
                    <Link to={'/reportGenCus'}><button className="admn-btn-dash admn-btn-dash-customer">CUSTOMER</button></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Link to={'/adminDelreport'}><button className="admn-btn-dash admn-btn-dash-delevery">DELEVERY PERSON</button></Link>
                </div>
                <div className="col-md-6">
                    <Link to={'/report'}><button className="admn-btn-dash admn-btn-dash-payment">PAYMENT</button></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Link to={'/adminProfile'}><button className="admn-btn-dash admn-btn-dash-payment">ADMIN PROFILE</button></Link>
                </div>
                <div className="col-md-6">
                    <Link to={'/ManageAdmin'}><button className="admn-btn-dash admn-btn-dash-payment">MANAGE ADMIN</button></Link>
                </div>
            </div>
        </div>

    )

}