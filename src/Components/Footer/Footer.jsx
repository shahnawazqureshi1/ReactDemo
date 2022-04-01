import React from "react";
import "../Footer/Footer.css"
import { FaBlog, FaFacebookF, FaGooglePlus, FaLinkedinIn, FaTwitter, FaYoutubeSquare } from 'react-icons/fa';

function Footer(){
    return (
        <div class="flex-container footer">
            <div className="App-header9">
                <div>
                    <h1>PRODUCT</h1>
                    <h4>Business</h4>
                    <h4>Compare</h4>
                    <h4>Pricing</h4>
                    <h4>Mobile</h4>
                    <h4>App Showcase</h4>
                    <h4>Download</h4>
                </div>
                <div>
                    <h1>COMPANY</h1>
                    <h4>About Us</h4>
                    <h4>Blog</h4>
                    <h4>News</h4>
                    <h4>Press Roleases</h4>
                    <h4>Jobs</h4>
                    <h4>Contact Us</h4>         
                </div>
                <div>  
                    <h1>LEARN MORE</h1> 
                    <h4>Support</h4>
                    <h4>Developers</h4>
                    <h4>Referal Program</h4>
                    <h4>Affrate Program</h4>
                    <h4>Reseller Program</h4>
                    <h4>Folder Sharing FAQs</h4>
                </div>  
                <div className='contactH1'>  
                    <h1>CONTACT WITH US</h1>
                    <div className='icondiv'>
                        <div className='contactH4'>
                            <div className='icon'>
                                <h4> <FaFacebookF style={{backgroundColor:'rgb(53, 87, 158)',borderRadius:'50px',fontSize:'17px'}}/> Facebook </h4> 
                            </div>
                            <div className='icon'>
                                <h4> <FaGooglePlus style={{backgroundColor:'rgb(150, 54, 40)',borderRadius:'50px',fontSize:'17px'}}/> Google+</h4>
                            </div>
                            <div className='icon'>
                                <h4> <FaLinkedinIn style={{backgroundColor:'rgb(6, 112, 175)',borderRadius:'50px',fontSize:'17px'}}/> Linkedin</h4>
                            </div>
                        </div>
                        <div className='contactH4'>
                            <div className='icon'>
                                <h4> <FaTwitter style={{backgroundColor:'rgb(201, 242, 249)',borderRadius:'50px',fontSize:'17px'}}/> Twitter</h4>
                            </div>
                            <div className='icon'>
                                <h4> <FaYoutubeSquare style={{backgroundColor:'rgb(236, 51, 51)',borderRadius:'50px',fontSize:'17px'}}/> YouTube</h4>
                            </div>
                            <div className='icon'>
                                <h4> <FaBlog style={{backgroundColor:'rgb(250, 203, 107)',borderRadius:'50px',fontSize:'17px'}}/> Blog</h4>  
                            </div>  
                        </div> 
                    </div>      
                </div>
            </div>
            <div className='footer-bottom'>
                <h4 className='SugarSync'>@2014 SugarSync, Inc All Right Reserved</h4>
                <h4 className='Team'>Team Our Service.Privacy Policy Site Map</h4>
                <input type="text" id="fname" name="fname"/><br/><br/> 
                <button type="button" className='btn-click'>Click Me!</button>
            </div>        
        </div>
    )
}

export default Footer