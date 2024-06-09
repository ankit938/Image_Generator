import React from "react";
import Navbar from "../common/navbar/navbar.js";
import './homepage.css';
import { Link } from "react-router-dom";

const Homepage = (props) => {
    return (
        <div>
            {/* Navbar with the current page set to 'home' */}
            <Navbar page="home"/>
            <div className="homepage-main-container">
                {/* Welcome Section */}
                <div className="welcome-section">
                    <h1>Welcome to ImageGen</h1>
                    <p>Generate stunning images with our AI-powered image generator.</p>
                    <Link to={`/Image-generator`}>
                        <button className="cta-button">Start Generating</button>
                    </Link>
                </div>
                
                {/* Features Section */}
                <div className="features-section">
                    <h2>Features</h2>
                    <div className="features-grid">
                        {/* Feature Items */}
                        <div className="feature-item">
                            <h3>High Quality</h3>
                            <p>Create high-resolution images in seconds.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Customizable</h3>
                            <p>Adjust settings to get the perfect image.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Fast</h3>
                            <p>Quickly generate images with our optimized algorithms.</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default Homepage;
