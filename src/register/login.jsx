import React, { useState } from 'react';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
import '../assets/css/style.css'; // Sesuaikan jalur impor CSS

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lakukan logika penanganan masukan pengguna di sini
    };

    return (
        <section className="login">
            <div className="container">
                <div className="container-content col-12 d-flex">
                    <div className="col-8 form-login d-flex justify-content-center align-items-center">
                        <form onSubmit={handleSubmit} className="col-8">
                            <div className="form-title mb-lg-5">
                                <h3 className="text">Selamat datang kembali!</h3>
                            </div>
                            <div className="col-12">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Alamat Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Kata Sandi"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-collapse d-flex justify-content-between">
                                <div className="remember-me d-flex align-items-center">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <label htmlFor="rememberMe">Ingat Saya</label>
                                </div>
                                <div className="forget-pass">
                                    <a href="#">Lupa Kata Sandi</a>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-4 img-login">
                        <img src="/public/assets/images/content/3d_login.png" alt="3D Login" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
