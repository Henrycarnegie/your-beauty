import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const DetailUser = () => {
    const isLogin = true; // Misalkan untuk kondisi login
    const user = {
        name: "Nama Pengguna",
        gender: "Laki-laki",
        age: "25",
        email: "email@example.com"
    };

    return (
        <section className="profil">
            <div className="container">
                <div className="row">
                    <div className="content col-lg-12 d-flex justify-content-between">
                        <div className="detail col-12 col-lg-6">
                            <div className="item">
                                <span>Nama</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={isLogin ? user.name : '--'}
                                    disabled
                                />
                            </div>
                            <div className="detail-collapse d-flex justify-content-between">
                                <div className="item col-12 col-lg-6 me-4">
                                    <span>Jenis Kelamin</span>
                                    <select className="form-select" aria-label="Default select example" disabled>
                                        <option value="1">{isLogin ? user.gender : '--'}</option>
                                    </select>
                                </div>
                                <div className="item col-12 col-lg-5">
                                    <span>Tipe Kulit</span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={isLogin ? 'kering' : '--'}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <span>Umur</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={isLogin ? user.age : '--'}
                                    disabled
                                />
                            </div>
                            <div className="item">
                                <span>Email</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={isLogin ? user.email : '--'}
                                    disabled
                                />
                            </div>
                            <div className="item">
                                <span>Password</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={isLogin ? '******' : '--'}
                                    disabled
                                />
                            </div>
                            <div className="container-btn d-flex">
                                <button type="button" className="btn btn-primary me-2">
                                    <i className="fa-solid fa-pencil me-2"></i>Edit
                                </button>
                                <button type="button" className="btn btn-primary me-2">
                                    <i className="fa-solid fa-file-contract me-2"></i>Test ulang
                                </button>
                                <form action="register/logoutProcess.php" method="post">
                                    <button type="submit" name="logout" className="btn btn-danger btn-register">
                                        <i className="fa-solid fa-right-from-bracket"></i> logout
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="image col-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <img src="/assets/images/content/3d_profile.png" alt="3d profil image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailUser;
