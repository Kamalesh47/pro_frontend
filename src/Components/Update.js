import React, { Component, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const UpdateItem=()=>
{
    const params=useParams();
    const [Name,setName]=useState("");
    const [Auction_rate,setAuction_rate]=useState(0);
    const [Franchise,setFranchise]=useState("");
    const [Runs,setRuns]=useState(0);
    const [Centuries,setCenturies]=useState(true);

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    const handleAuction_rateChange=(e)=>{
        setAuction_rate(e.target.value)
    }
    const handleFranchiseChange=(e)=>{
        setFranchise(e.target.value)
    }
    const handleRunsChange=(e)=>{
        setRuns(e.target.value)
    }
    const handleCenturiesChange=(e)=>{
        if(e.target.value==0)
        setCenturies(false);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8080/update/"+params.jersey,{jersey:params.jersey,name:Name,auction_rate:Auction_rate,franchise:Franchise,runs:Runs,centuries:Centuries});
    }
        return(
            <div className="full">
            <form onSubmit={handleSubmit}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <label>Name :</label>
                <input type="text" onChange={handleNameChange}>
                </input><br/><br></br>
                <label>Auction_Rate:</label>
                <input type="number" onChange={handleAuction_rateChange}>
                </input><br/><br></br>
                <label>Franchise</label>
                <input type="text" onChange={handleFranchiseChange}>
                </input><br/><br></br>
                <label>Runs :</label>
                <input type="number" onChange={handleRunsChange}>
                </input><br/><br></br>
                <label>Centuries :</label>
                <input type="number" onChange={handleCenturiesChange}>
                </input><br/><br></br>
            <input type="submit"/><br/><br/><br/><br/><br></br>
            <Link to="/"><button>Back</button></Link>
            </form>
            </div>
        )
    }
    export default UpdateItem;