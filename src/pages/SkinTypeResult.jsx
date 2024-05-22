import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const SkinTypeResult = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* Header */}

            <section className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="kering col-lg-12 d-flex justify-content-center align-items-center flex-column">
                            <div className="box_kering"></div>
                            <div className="text_kering align-items-center">
                                <h3>Jenis Kulit Anda adalah :</h3>
                                <b>Kering</b>
                            </div>

                            <div className="kering_img col-lg-5 d-flex">
                                <img className="img-kering" src="../assets/images/content/kering.png" alt="Kulit Kering" />
                            </div>

                            <div className="deskripsi">
                                <div className="p1">
                                    <b>Deskripsi</b>
                                    <h6>Kulit kering adalah suatu kondisi kulit umum yang 
                                    ditandai dengan kurangnya kelembapan pada lapisan 
                                    kulit terluar (stratum korneum). Hal ini sering kali 
                                    disebabkan oleh faktor lingkungan, seperti udara dingin,
                                    kering, atau lingkungan gurun yang panas dan kering, 
                                    atau oleh faktor internal, seperti penyakit tertentu, 
                                    pengobatan, atau penuaan.</h6>
                                </div>

                                <div className="p2">
                                    <b>Gejala</b>
                                    <h6>Gejala kulit kering antara lain kulit kasar, 
                                    bersisik, dan gatal, pecah-pecah halus, dan kemerahan.</h6>
                                </div>

                                <div className="p3">
                                    <b>Treatment</b>
                                    <h6>Perawatan untuk kulit kering sering kali melibatkan 
                                    tindakan perawatan di rumah, seperti menggunakan pelembab 
                                    dan menghindari sabun dan deterjen yang keras, serta mengatasi 
                                    segala kondisi kesehatan yang mendasarinya.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProductCarousel />

            {/* Footer */}
            <Footer />
            {/* Footer */}

            <script src="/assets/js/script.js"></script>
            <script src="/vendor/bootstrap/js/bootstrap.min.js"></script>

        </div>
    );
};

const ProductCarousel = () => (
    <section>
        {/* Include your product carousel content here */}
    </section>
);

export default SkinTypeResult;
