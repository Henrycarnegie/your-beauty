import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const PreviewProduct = () => {
    return (
        <>
      {/* Navigation Bar */}
      <Header />
      {/* Navigation Bar */}

            {/* Tampilan awal */}
            <section className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="product_hadalabo col-lg-12 d-flex justify-content-between">
                            <div className="item_hadalabo d-flex justify-content-between">
                                <div className="card_hadalabo">
                                    <img src="assets/images/content/product_hadalabo1.png" alt="" />
                                    <span><img src="assets/images/icon/button_fav.png" alt="" /></span>
                                    <div className="card-body">
                                        <h5>Hada Labo Aha + Bha Acne</h5> 
                                        <h5>Control Face Wash</h5>
                                    </div>  
                                </div>

                                <div className="hada_labo col-lg-5 d-flex">
                                    <div className="box-shadow"></div>
                                    <div className="title_hadalabo">
                                        <b>Hada Labo</b>  
                                        <h5>Bersihkan dan perbarui untuk kulit sehalus telur 
                                            dengan formula eksfoliasi AHA+BHA dan anti polusi kami. 
                                            Banci liar dan tanah liat bentonit membantu mengendalikan 
                                            jerawat dan minyak berlebih </h5>
                                        <b>Ingredients</b>  
                                        <h5>Air/​Aqua/​Eau, Gliserin, Asam Miristat, Asam stearat,
                                            PEG-32, Potasium hidroksida, Asam Palmitat, Asam Laurat,
                                            Cocamidopropil Betaine, Selulosa Mikrokristalin, Gliseril Stearat,
                                            PEG-100 Stearat, Pewangi/​Parfum, Natrium klorida, Dinatrium EDTA, Natrium Benzoat,
                                            Polikaprolakton , Propanediol, Asam laktat, PEG-75, Ekstrak Buah Rubus Idaeus (Raspberry).
                                            Ekstrak Buah Vaccinium Angustifolium (Blueberry)., Ekstrak Biji Coffea Arabika (Kopi) , Ekstrak Buah
                                            Lycium Chinense, Ekstrak Buah Sapindus Mukorossi, Ekstrak Buah Vaccinium Macrocarpon (Cranberry) , Ekstrak 
                                            Buah Fragaria Chiloensis (Strawberry) , Ekstrak Biji Rubus Chamaemorus , Papain, Fenoksietanol, Asam Kaprat </h5>
                                    </div>                     
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>

            {/* preview produk */}
            <section className="preview">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex justify-content-center ">
                            <b>Produk Terkait Lainnya</b>
                        </div>
                        <div className="container-preview col-lg-12 d-flex justify-content-center align-items-center">
                            <div className="card-small d-flex flex-column">
                                <img src="assets/images/content/new_product_1.png" alt="new product" />
                                <button type="button" className="btn btn-primary">Preview</button>
                            </div>
                            <div className="card-big d-flex flex-column">
                                <img src="assets/images/content/new_product_2.png" alt="new product" />
                                <button type="button" className="btn btn-primary">Preview</button>
                            </div>
                            <div className="card-small d-flex flex-column">
                                <img src="assets/images/content/new_product_3.png" alt="new product" />
                                <button type="button" className="btn btn-primary">Preview</button>
                            </div>
                        </div>
                        <nav aria-label="...." className="nav-preview">
                            <ul className="pagination pagination-lg d-flex align-items-center justify-content-center ">
                                <li className="page-item" aria-current="page">
                                    <a className="page-link" href="#"></a>
                                </li>
                                <li className="page-item">
                                    <span className="page-link active"></span>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#"></a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#"></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

      {/* Footer */}
      <Footer />
      {/* Footer */}

            <script src="assets/js/script.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
        </>
    );
}

export default PreviewProduct;
