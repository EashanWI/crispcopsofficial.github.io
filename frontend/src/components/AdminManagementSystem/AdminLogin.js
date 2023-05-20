//import react
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


//export function navbar
export default function AdminLogin(){
    

    const navigate = useNavigate ();

    const[showPassword, setShowPassword] = React.useState (false)
    const[credentials, setCredentials] = React.useState({
        email:"",
        password:""
    })

    console.log(credentials)

    function onchange(e){
        setCredentials(prevData => {
            const {name, value} = e.target;
            return{
                ...prevData,
                [name] : value
            }
        })
    }

    function login(e){
        e.preventDefault();
        axios.post("http://localhost:8070/admin/login",credentials)
        .then((res)=>{
            if(res.status == 200){
                localStorage.setItem('customer',res.data.data)
                console.log(res.data.data)
                navigate('/AdminDashboard')
            }
            
        })
        .catch((err) => {
            alert(err);
        })
        console.log("logged")
        }
    
        console.log(showPassword)
    

    return(
        <div className="container">
            <div className="row">
                <div className="admn-log-title"><h2>ADMIN LOG-IN<br></br></h2></div>
            </div>
            <div className="row admn-log-box">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={login}>
                        <div className="">
                            <div className="row">
                                <input className="admn-login-input" type="email" placeholder="email" onChange={onchange}></input>
                            </div>
                            <div className="row">
                                <input className="admn-login-input" type="password" placeholder="Password" onChange={onchange}></input>
                            </div>
                            <div className="row">
                                <Link to={'/AdminDashboard'}><button className="admn-login-btn">LOG-IN</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}