import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/style.css';
import Header from '../component/Header';
import Footer from '../component/Footer';
import DetailUser from '../component/detailUser';

const Profil = () => {
    return (
        <>
      {/* Navigation Bar */}
      <Header />
      {/* Navigation Bar */}
            <DetailUser />
            <section className="my-fav">
                <div className="container">
                    <div className="row">
                        <div className="container-fav mb-lg-5 col-12 col-lg-12">
                            <div className="title d-flex justify-content-center">
                                <h1>Produk Favorit</h1>
                            </div>
                            <div className="container-items d-flex flex-column">
                                <div className="colomn-1 row g-3">
                                    {Array.from({ length: 6 }).map((_, index) => (
                                        <div key={index} className="col-6 col-lg-4 mb-3 mb-lg-5 pb-3 pb-lg-5 text-center">
                                            <div className="item">
                                                <div className="nama-item">
                                                    <h4>Skintific</h4>
                                                    <h6>Moisturizing Lotion</h6>
                                                </div>
                                                <img src={`assets/images/content/fav_${index + 1}.png`} alt="" className="img-fluid" />
                                                <button type="button" className="btn btn-primary btn-sm">See Details</button>
                                                <span><img src="assets/images/content/star.png" alt="" /></span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      {/* Footer */}
      <Footer />
      {/* Footer */}
        </>
    );
};

export default Profil;
