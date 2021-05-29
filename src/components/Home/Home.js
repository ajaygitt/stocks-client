import React, { useState,useEffect} from "react";
import "./Home.css";
import {Form,Col,Row,Card} from 'react-bootstrap'

import axios from 'axios'





function Home() {

  const [search,setSearch]=useState('')
const [stock,setStock]=useState([])
const [stockMatch,setStockMatch]=useState([])
const[stockItem,setStockItem]=useState([])


useEffect(()=>{

  
  console.log("hai");

  axios.get('https://stocksserver.herokuapp.com/stocks').then((response)=>{

  console.log("res",response.data);

  setStock(response.data)
  console.log("asdf",stock);
  })
},[])


const searchStock=(text)=>{

  console.log("test",text);

  if(!text)
  {
    setStockMatch([])
  }
  else
  {

  let matchesAre=stock.filter((stoks)=>{

    const regex=new RegExp(`${text}`,"gi");
    return stoks.Name.match(regex)
  
    
  })
  console.log("@@@@@@@@@@@",matchesAre);
  setStockMatch(matchesAre)
}
};





  function submitSearch(id)
  {
  
    setStockMatch([])

   
    setStockItem(id)
  }

  return (
    <div>


      <div className="App">
        <h2>The easiest way to buy and sell stocks</h2>
        <div className="logo">
          <p>stock analysis and screening tool for investors in india</p>
        </div>
        <div className="auto-container"></div>
      </div>





<div> 

<Form.Group as={Row} className="searchBar"  controlId="formPlaintextPassword">
   
    <Col sm="7">
      <Form.Control type="text" placeholder="Search" name="search" id="search"
      
      onChange={(e)=>searchStock(e.target.value)}
      onSubmit={submitSearch}
      
      />

    </Col>
  </Form.Group>

 

{stockMatch&&stockMatch.map((item,index)=>(







 <div key={index} style={{marginLeft:'33%',marginTop:"5px"}}>
<Card style={{width:'50%',height:'45%'}} title={`Name:${item.Name}`}  >
 
 <span onClick={(e)=>{submitSearch(item)}}> {item.Name}</span>
</Card>
</div> 


))}


</div>

{stockItem!='' &&
       
       <div className="center">


<div class="container ra rounded">
<span className="Name">{stockItem.Name}</span>
	<div class="container rw rounded">

        <div class="center-box">


        <div class="table-responsive-sm">
       
        <table class="table table-striped">

  <tbody>
    <tr>
      <th scope="row">Market Cap  <span className="value">₹{stockItem.MarketCap}</span>   </th>
      <th>Divident Yield  <span className="value">{stockItem.DividendYield}%</span>  </th>
      <th>Debit Equality <span className="value">{stockItem.DebttoEquity}%</span> </th>
   
    </tr>
    <tr>
      <th scope="row">Current Price <span className="value"> ₹{stockItem.CurrentMarketPrice}</span> </th>
      <th>ROCE  <br /> <span className="value">{stockItem.ROCE}%</span> </th>
      <th>Eps <br /> <span className="value"> ₹ {stockItem.EPS}</span> </th>
    
    </tr>
    <tr>
      <th scope="row">stock P/E <br /> <span className="value"> {stockItem.StockPE}%</span> </th>
      <th>ROE <br /> <span className="value">{stockItem.ROEPreviousAnnum}%</span>   </th>
      <th>Reserves <br /> <span className="value"> ₹{stockItem.Reserves}</span> </th>
     
    </tr>
    <tr>
      <th scope="row">Debit  <span className="value"> ₹{stockItem.Debt}</span></th>
    <th></th>
    <th></th>
     <th></th>
    </tr>
  </tbody>
</table>
</div>



        </div>
	</div>
</div>

    
       </div>
      }







    </div>
  );
}

export default Home;
