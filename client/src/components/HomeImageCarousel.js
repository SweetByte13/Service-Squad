import React from "react"; 
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "../images/Image1.jpg";
import Image2 from "../images/Image2.jpg";
import Image3 from "../images/Image3.jpg";
import Image4 from "../images/Image4.jpg";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function HomeImageCarousel() {
    
    const navigate = useNavigate();

    function handleGetStarted() {
        navigate("/signup")
    }

    return (
        <Container fluid className="carousel-container p-0">
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="carousel-image d-block w-100"
                        src={Image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="carousel-image d-block w-100"
                        src={Image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="carousel-image d-block w-100"
                        src={Image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="carousel-image d-block w-100"
                        src={Image4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="overlay text-center">
                <h1>
                    Serve your community
                </h1>
                <h4>
                    ServiceSquad connects you to service opportunities right within your own community.
                </h4>
                <Button className="mt-3" variant="success" onClick={handleGetStarted}>Get Started</Button>
            </div>
        </Container>
    );
}

export default HomeImageCarousel;
