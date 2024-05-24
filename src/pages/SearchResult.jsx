import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';

const SearchResult = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <Header />
            {/* Navigation Bar */}

            {/* Search Result / Landing */}
            <section className="main-content sr-landing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center align-items-left flex-column">
                            <div className="text-content col-lg-12">
                                <h1>Hasil pencarian “Hada Labo” ditemukan 8 Produk</h1>
                            </div>
                        </div>
                        <div className="container-product col-lg-12 d-flex justify-content-center align-items-center flex-column">
                            <div className="container">
                                <div className="row">
                                    {/* Your product cards go here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Search Result / Landing */}

            {/* Footer */}
            <Footer />
            {/* Footer */}

            <script src="/assets/js/script.js"></script>
            <script src="/vendor/bootstrap/js/bootstrap.min.js"></script>

        </div>
    );
};

export default SearchResult;
