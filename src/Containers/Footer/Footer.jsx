import React from 'react'
import './Footer.css'
import gpt3Logo from './../../assets/logo.svg'

function Footer() {
  return (
    <div className="gpt_footer section_margin">
          <div className="gpt_footer_heading">
                <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
          </div>
          <div className="gpt_footer_btn">
            <p>Request Early Access</p>
          </div>

          <div className="gpt_footer_links">
            <div className="gpt_footer_links_logo">
                  <img src={gpt3Logo} alt='logo' />
                 <p> Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
            </div>
            <div className="gpt_footer_links_div">
              <h4>Links</h4>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
            </div>
            <div className="gpt_footer_links_div">
              <h4>Company</h4>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>
            <div className="gpt_footer_links_div">
              <h4>Get in touch</h4>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>885-132567</p>
              <p>info@payme.net</p>
            </div>
          </div>
          <div className="gpt_footer_copyright">
              <p>@2021 GPT-3. All rights reserved.</p>
          </div>
    </div>
  )
}

export default Footer