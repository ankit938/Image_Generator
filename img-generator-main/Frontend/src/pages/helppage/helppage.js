import React from "react";
import Navbar from "../common/navbar/navbar";
import './helppage.css';

const HelpPage = () => {
    return (
        <div>
            <Navbar page="help"/>
            <div className="help-main-container">
                <h1>Help & Support</h1>
                
                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-item">
                        <h3>How do I generate an image?</h3>
                        <p>To generate an image, click on the 'Start Generating' button on the homepage, and click 'Generate'.</p>
                    </div>
                    
                    <div className="faq-item">
                        <h3>Is there a limit to the number of images I can generate?</h3>
                        <p>Currently, there is a limit of 20, but please be considerate of server resources and usage limits outlined in our terms of service.</p>
                    </div>
                </section>
                
                <section className="how-to-section">
                    <h2>How-To Guides</h2>
                    <div className="how-to-item">
                        <h3>Step-by-Step Guide to Generating an Image</h3>
                        <p>1. Go to the homepage.<br />
                           2. Click on 'Start Generating'.<br />
                           3. Click 'Generate' to create your image.<br />
                           4. Download or share your image.
                        </p>
                    </div>
                   
                </section>
                
                <section className="contact-section">
                    <h2>Contact Support</h2>
                    <p>If you need further assistance, please contact us.</p>
                    <p>Email: abhishekatiyar@gmail.com</p>
                    <p>contact: +91 9839326394</p>
                </section>
            </div>
        </div>
    );
}
export default HelpPage;
