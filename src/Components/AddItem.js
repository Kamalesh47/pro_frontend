
import React, { Component } from "react";
import axios from "axios";

export default class AddItem extends Component
{
    constructor()
    {
        super();
        this.state={jersey:1,name:"",auction_rate:"",franchise:"",runs:0,centuries:true};
    }
    handlejerseyChange=(e)=>{
        this.setState({jersey:e.target.value})
    }
    handleNameChange=(e)=>{
        this.setState({name:e.target.value})
    }
    handleAuction_rateChange=(e)=>{
        this.setState({auction_rate:e.target.value})
    }
    handleFranchiseChange=(e)=>{
        this.setState({franchise:e.target.value})
    }
    handleRunsChange=(e)=>{
        this.setState({runs:e.target.value})
    }
    handleCenturiesChange=(e)=>{
        if(e.target.value==0){
            this.setState({centuries:false});
        }
        else{
            this.setState({centuries:true});
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8080/post",this.state);
    }
    
    render()
    {
        return(
            <div className="whole"><center><br></br><br></br><br></br>
            <form onSubmit={this.handleSubmit}>
            <label>Jersey  </label>
                <input type="number" onChange={this.handlejerseyChange}>
                </input><br></br><br></br><br></br>
                <label>Name:   </label>
                <input type="text" onChange={this.handleNameChange}>
                </input><br></br><br></br><br></br>
                <label>Auction_rate  </label>
                <input type="number" onChange={this.handleAuction_rateChange}>
                </input><br></br><br></br><br></br>
                <label>Franchise  </label>
                <input type="text" onChange={this.handleFranchiseChange}>
                </input><br></br><br></br><br></br>
                <label>Runs    </label>
                <input type="number" onChange={this.handleRunsChange}>
                </input><br></br><br></br><br></br>
                <label>Centuries  </label>
                <input type="number" onChange={this.handleCenturiesChange}>
                </input><br></br><br></br><br></br><br></br><br></br>
                <input type="submit"/>
            </form>
            </center>
            </div>
        )
    }
}