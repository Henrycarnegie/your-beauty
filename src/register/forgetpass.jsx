import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/style.css'; // Adjust the CSS import path if necessary

const ForgetPass = () => {
    return (
        <section className="forgot_pass">
            <div className="container">
                <div className="row">
                    <div className="pass col-lg-12 d-flex justify-content-center align-items-center flex-column">
                        <div className="icon_pass col-6 d-flex align-self-center">
                            {/* Corrected the 'public' attribute to 'src' for the img tag */}
                            <img src='/assets/images/icon/Forgot_pass.png' alt="Forgot Password Icon" />
                        </div>
                        <div className="text_pass col-12 d-flex justify-content-center">
                            <h3>Kami akan mengirim Kode OTP ke email Anda untuk mereset Kata sandi</h3>
                        </div>
                        <form className="input_gmail col-8 d-flex align-items-center justify-content-between">
                            <input type="email" placeholder="Masukkan Email" required className="col-12" />
                        </form>
                        <div className="button_pass col-6 d-flex align-items-center justify-content-center">
                            <input className="btn" type="submit" value="Kirim" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgetPass;
