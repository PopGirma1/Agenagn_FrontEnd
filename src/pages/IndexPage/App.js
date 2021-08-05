import React, { Component } from "react";
import IndexPage from "./IndexPage";

class App extends Component{
   state={
     //here will put user requested data database
   }

   Submit=(textFromDatabase)=>{
   
   //here it make request to the database when the user search it
   console.log(textFromDatabase);
   
   }

   render(){
   
     return (
     
      <IndexPage Submit={this.Submit}/>
     )
   }
}


export default App;
