import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.jpeg";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.jpeg";
import logo5 from "../images/logo5.png";
import logo6 from "../images/logo6.jpg";

function OpportunityCard({ user, opportunity }) {
    const { title, description, remote_or_online, category, dates, duration, organization } = opportunity;
    const navigate = useNavigate();

    function handleApplyButton() {
        if (!user) {
            alert("User must be logged in.");
            return;
        }
        navigate(`/opportunities/${opportunity.id}`);
    }

    const images = [logo1, logo2, logo3, logo4, logo5, logo6];
    const img = images[Math.floor(Math.random() * images.length)];

    return (
        <Card className="opp-card">
            <Card.Header className="card-header" as="h5">{organization.name}</Card.Header>
            <div className="oppcard-text">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="opp-description">{description}</Card.Text>
                    <Card.Text className="opp-remote_or_online">Location: {remote_or_online ? "Remote" : "In-Person"}</Card.Text>
                    <Card.Text className="opp-category">Category: {category}</Card.Text>
                    <Card.Text className="opp-dates">Date Range: {dates}</Card.Text>
                    <Card.Text className="opp-duration">Commitment: {duration}</Card.Text>
                    <div className="buttons">
                        <Button className="apply-button" variant="success" onClick={handleApplyButton}>Apply</Button>
                    </div>
                </Card.Body>
            </div>
            <div className="oppcard-img">
                <img className="card-logo" src={img} alt="Organization" />
            </div>
        </Card>
    );
}

export default OpportunityCard;
