import React from 'react';
import footerPng from '../assets/footer.png';
import {AiFillAndroid,AiFillApple} from 'react-icons/ai';
import {FiFacebook,FiInstagram,FiTwitter,FiYoutube} from 'react-icons/fi';
import '../styles/home.css';

const Footer = () => {
  return (
    <div className='container-fluid footerContainer'>
        <div className='row'>
            <div className='col-12 text-center col-lg-6 d-none d-lg-block'><img className='img-fluid' src={footerPng}/></div>
            <div className='col my-auto'>
                <div className="row pt-5">
                    <div className="col">
                        <h3>Quick Links</h3>
                        <ul className='list-unstyled'>
                            <li>Sexual issues treated</li>
                            <li>Our sexologist</li>
                            <li>Blogs</li>
                            <li>FAQ's</li>
                            <li>About-us</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Policies</h3>
                        <ul className='list-unstyled'>
                            <li>Refund & cancellation policy</li>
                            <li>Privacy policy</li>
                            <li>Terms of use</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Contact</h3>
                        <ul className='list-unstyled'>
                            <li>Constact@qurex.ai</li>
                            <li>Chat with us</li>
                            <li>Phone number</li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className="col d-flex justify-content-center justify-content-lg-start">
                        <button className='btn btn-primary  mx-2'><span className='mx-1'><AiFillAndroid size={25}/></span>Download on Android</button>
                        <button className='btn btn-primary'><span><AiFillApple size={25}/></span>Download on IOS</button>
                    </div>
                    
                </div>
                <div className="row mt-3 ">
                <div className="col">
                    <ul className='d-flex justify-content-center justify-content-md-start list-unstyled gap-2'>
                        <li><FiFacebook size={25}/></li>
                        <li><FiInstagram size={25}/></li>
                        <li><FiTwitter size={25}/></li>
                        <li><FiYoutube  size={25}/></li>
                    </ul>
                </div>
                <div className='col-12 text-center col-lg-6 d-block d-lg-none'><img className='img-fluid' src={footerPng}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer