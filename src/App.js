import React, { Component } from 'react';
import './App.css';
import logo from './octopus.png'
import Card from './componenets/card';
import Nav from './componenets/nav';
import Axios from '../node_modules/axios';
import { Button, Label, Input, Form } from 'reactstrap';

class App extends Component {
 
  getData=(name="moneemsaadaoui")=>{
    Axios.get(`https://api.github.com/users/${name}/followers`).then(Response=>{this.setState({
      followers:Response.data
    });
    console.log(this.state.followers)
    });
  }
  state={
    followers:[],
    inputtext:""
  }
  render() {
    return (
      
      <div>
       
          <Nav/>
          <div className="inpt">
          <img src={logo} className="pic"/>
          <Form onSubmit={(e)=>{e.preventDefault();this.getData(this.state.inputtext);console.log(this.state.followers)}}>
          <Label className="txt">Look up a user's followers</Label>
          <input value={this.state.inputtext} className="inpt" type="text" name='Test' id="Test" placeholder="User name ?" onChange={(e)=>{this.setState({inputtext:e.target.value});}} />
          </Form>
          </div>
          <div className="container">
          {this.state.followers.map(user=>
          {
          
            return(
              <Card pic={user.avatar_url} name={user.login} profile={user.html_url}/>
            )
          })}
   
      </div>
      </div>
    );
  }
}

export default App;
