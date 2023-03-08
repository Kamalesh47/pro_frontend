import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from './AddButton';
import { Link } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.red,
    color: theme.palette.common.yellow,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 3,
  },
}));

// function createData(name, Cal, fat, carbs, protein) {
//   return { name, Cal, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default class CustomizedTables extends React.Component {
    constructor()
    {
        super();
        this.state={Items:[]};
    }
    componentDidMount()
    {
        axios.get('http://localhost:8080/get')
        .then(response => {
            console.log(response.data);
          this.setState({ Items: response.data });
        })
        .catch(error => {
          console.log(error);
        });    
    }
    centuries =(row)=>
    {
        if(row==false)
        {
            return "No";
        }
        else{
            return "Has";
        }
    }
    handleClick=(e)=>{
        console.log(e.target.id);
        var l=axios.delete('http://localhost:8080/delete/'+e.target.id);
        console.log(l);
        window.location.reload();
    }
    render()
    {
  return (
    <div className="table">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Jersey</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Auction_rate</StyledTableCell>
            <StyledTableCell align="right">Franchise</StyledTableCell>
            <StyledTableCell align="right">Runs</StyledTableCell>
            <StyledTableCell align="right">Centuries</StyledTableCell>
            <StyledTableCell align="right">REMOVE PLAYER</StyledTableCell>
            <StyledTableCell align="right">ALTER</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.Items.map((row) => (
            <StyledTableRow key={row.jersey}>
              <StyledTableCell component="th" scope="row">
                {row.jersey}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.auction_rate}</StyledTableCell>
              <StyledTableCell align="right">{row.franchise}</StyledTableCell>
              <StyledTableCell align="right">{row.runs}</StyledTableCell>
              <StyledTableCell align="right">{this.centuries(row.centuries)}</StyledTableCell><center>
              <StyledTableCell align="left"><button id={row.jersey} className="delbutt" onClick={this.handleClick}>Delete</button></StyledTableCell></center><br></br>
              <br></br>
              <StyledTableCell align="left"><Link to={"/update/"+row.jersey}><button id={row.jersey} onClick={this.handleUpdate}>Update</button></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <center>
      <Link to="/app"><Button></Button></Link></center>
    </TableContainer>
    </div>
  );
          }
}
