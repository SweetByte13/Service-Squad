import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Router, Link } from "react-router-dom";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.jpeg";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.jpeg";
import logo5 from "../images/logo5.png";
import logo6 from "../images/logo6.jpg";

function OrganizationCard({org}) {
  const {name, website, category, opportunities} = org

  const opps = opportunities.map((opp) => {
    return (<div key={opp.id}>
      <Link  to={`../opportunities/${opp.id}`} >{opp.title}</Link>
    </div>)
  })

  let images = [logo1,logo2,logo3,logo4,logo5,logo6]
  let img = images[Math.floor(Math.random() * images.length)];

    return (
      <Card className="org-card"> 
        <Card.Header className="card-header" as="h5">{name}</Card.Header>
        <div className="orgcard-text">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Opportunities Available:</Card.Text>
          <div className="org-opportunities">{opps}</div>
          <br></br>
          <Card.Text className="org-website">{website}</Card.Text>
          <Card.Text className="org-category">Type: {category}</Card.Text>
          <div className="buttons">
          </div>
        </Card.Body>
        </div>
        <div className="orgcard-img">
          <img className="card-logo" src={img} alt="Organization"/>
        </div>
      </Card>
    )
}

export default OrganizationCard;

