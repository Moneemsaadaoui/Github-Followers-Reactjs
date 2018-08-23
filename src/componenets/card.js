import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import '../App.css';
  const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top className="pic"  src={props.pic} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>Tunisia - {props.profile}</CardSubtitle>
          <CardText>Active User Of Github.</CardText>
          <Button onClick={()=>{window.open(props.profile)}}>Go To Profile</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;