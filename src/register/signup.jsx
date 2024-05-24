import React from 'react';

const Signup = () => {
    return (
        <section className="signup">
            <div className="container">
                <div className="container-content col-12 d-flex">
                    <div className="col-4 img-signup">
                        <img src="/assets/images/content/3d_signup.png" alt="" />
                    </div>
                    <div className="col-8 form-signup d-flex justify-content-center align-items-center">
                        <form action="/signupProcess" method="post" className="col-8">
                            <div className="form-title mb-lg-5">
                                <h3 className="text">Buat akun</h3>
                            </div>
                            <div className="col-12">
                                <input name="name" type="text" className="form-control form-control-lg" placeholder="nama" aria-label="default input example" />
                            </div>
                            <div className="col-12">
                                <input name="email" type="email" className="form-control form-control-lg" id="inputEmail" placeholder="alamat email" />
                            </div>
                            <div className="col-12">
                                <input name="password" type="password" className="form-control form-control-lg" id="inputPassword" placeholder="kata sandi" />
                            </div>
                            <div className="col-12">
                                <h6 className="text-center">- or -</h6>
                            </div>
                            <div className="col-12 btn-google text-center">
                                <a href="#" className="btn btn-primary"><i className="fab fa-google me-lg-2"></i>lanjut dengan google</a>
                            </div>
                            <div className="d-grid">
                                <button type="submit" name="signup" className="btn btn-primary">Submit</button>
                            </div>
                            <div className="go-login">
                                <h6>Sudah punya akun? <a href="/login">Masuk</a></h6>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;
