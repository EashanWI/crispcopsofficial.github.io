import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function BidDetails(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [price, setprice] = useState("");
    //const [bidedit, sebidedit] = useState("");

    const [bids , setbids] = useState({
        itemName: " ",
        price: " "
    });

    function getBids() {
        axios
          .get("http://localhost:8070/bidding/fetch/"+id)
          .then((res) => {
            setbids(res.data);
          
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    
      useEffect(() => {
        getBids();
      }, []);

    function updateData(e){
        e.preventDefault();


        //create javascript obj
        const updateBidding = {
            price
        }
    

        axios.put("http://localhost:8070/bidding/update/"+id ,updateBidding).then(()=>{
            alert("BIdding Update Succsesful")
            navigate('/bidStore')
        })
        .catch((err)=>{
            alert("Somthing went wrong")
        });
    };
    let total = 0;


    return(
        <div className="container bid-update-box">
            <div className="row">

                <div className="container bid-title">
                    <h4>{bids.itemName}</h4>
                </div>
                


                <div className="col-md-3"></div>
                <div>
                </div>
                <div className="col-md-6">

                    <div className="row">
                        <div className="col-md-3">
                            <p>PRICE :</p>
                        </div>
                        <div className="col-md-3">
                            <p>
                                {bids.price+" LKR"}
                            </p>
                        </div>
                        <div className="col-md-3">
                            <p>QUANTITY :</p>
                        </div>
                        <div className="col-md-3">
                            <p>{bids.quantity+" kg"}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <p>CONTACT :</p>
                        </div>
                        <div className="col-md-3">
                            <p>
                                {"+94"+bids.idNo}
                            </p>
                        </div>
                        <div className="col-md-3">
                            <p>FARM :</p>
                        </div>
                        <div className="col-md-3">
                            <p>{bids.farm}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <p>BID ID :</p>
                        </div>
                        <div className="col-md-3">
                            <p>
                                {bids.bidID}
                            </p>
                        </div>
                        <div className="col-md-3">
                            <p>TOTAL :</p>
                        </div>
                        <div className="col-md-3">
                            <p>{bids.total}</p>
                        </div>
                    </div>

                    <form  onSubmit={updateData}>
                        <div className="row">
                        <input type="number" placeholder="Set Your Price" className="bid-update-input"
                            onChange={(e)=>{
                                setprice(e.target.value);
                            }}
                            ></input>
                        </div>
                        <div className="row">
                            <button type="submit" className="bid-btn-update">SET PRICE</button>
                        </div>
                        <div className="row">
                            <button className="bid-btn-cencel">Cancel</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}