import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="content col-12 d-flex justify-content-around">
              <div className="col-3 detail px-4 align-items-center">
                <div className="name-web mb-4">
                  <img src="/assets/images/icon/icon-web.png" alt="Icon Web" className="me-4" />
                  <span>Beautyy</span>
                </div>
                <div className="desc">
                  <span>
                    Kecantikan tidak hanya datang dari dalam tetapi juga datang dari luar.
                    Jadi, Anda juga perlu menjaga kesehatan kulit Anda
                  </span>
                </div>
              </div>
              <div className="col-2 navigasi">
                <h2 className="mx-4">Navigasi</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/skinTypeLanding">Test Skin Type</a></li>
                </ul>
              </div>
              <div className="col-4 temukan">
                <h2 className="mx-4">Temukan Lainnya</h2>
                <ul>
                  <li><a href="#">Brand</a></li>
                  <li><a href="/previewproduct">Product</a></li>
                </ul>
              </div>
              <div className="col-2 tentang">
                <h2 className="mx-4">About Us</h2>
                <ul>
                  <li><a href="https://www.instagram.com/samuelnd_/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="https://x.com/?lang=en-id&mx=2"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="https://www.linkedin.com/in/samuel-siagian03/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <span>Copyright © 2024 All Right Reserved</span>
      </div>
    </>
  );
};

export default Footer;
