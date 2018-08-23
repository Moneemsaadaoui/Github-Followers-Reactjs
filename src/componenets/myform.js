import React from 'react'
import { Button, Label, Input, Form } from 'reactstrap';

<Form onSubmit={this.getData(this.state.inputtext)}>
          <input value={this.state.inputtext} className="inpt" type="text" name='Test' id="Test" placeholder="User name ?" onChange={(e)=>{this.setState({inputtext:e.target.value});}} />
          </Form>