import React,{useState,useEffect}from 'react';
import axios from 'axios';
import './account.styles.css';

class Account extends React.Component{
   constructor(props){
       super(props);
      this.state={
           customer:[],
           totalAmount:0
      }
   }
   
   componentDidMount(){
    axios.get('/account')
       .then(response=>this.setState({customer:response.data.customer}));

    }
       
 
   render(){
       var total_amount=this.state.customer;
       var res=0;
       var CalCulateRows=total_amount.forEach(value=>{
            res+=Number(value.balanceAmt);
       })


       
       return(
         <div>
             <h1>Account Details </h1>
           <table>
               <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Account Number</th>
                  <th>Deposit Amount</th>
                  <th>WithDrwa Amount</th>
                  <th>Balance Amount</th>
                
               </tr>
            { 
              this.state.customer.map((customer,index)=>(
               <tr>
                   <td key={customer.id}>{index+1}</td>
                   <td key={customer.id}>{customer.name}</td>
                   <td key={customer.id}>{customer.accountno}</td>
                   <td key={customer.id}>{customer.depositAmt}</td>
                   <td key={customer.id}>{customer.withdrawAmt}</td>
                   <td key={customer.id}>{customer.balanceAmt}</td>
                    
               </tr>
                
                ))
            }
              </table>

              <p>Total: {
                   res
                }
              </p>

         </div>

       )
   }

}
export default Account;