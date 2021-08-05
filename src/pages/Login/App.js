import React, { Component } from "react";
import Signin from "./Signin";

class App extends Component{
   state={
     //here will find the email and password from the database
   }

   Submit=(textFromDatabase)=>{
   
   //here it make request to the database 
   console.log(textFromDatabase);
   
   }

   render(){
   
     return (
     
      <Signin submit={this.Submit}/>
     )
   }
}


export default App;
