import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Header />
      {/* Navigation Bar */}

      {/* Tampilan Awal Pengguna */}
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div className="text-content col-6">
                <h1>Lihatlah. Ketahuilah. Perbaikilah.</h1>
                <span>
                  Produk skincare yang bagus sebaiknya mampu menjaga kesehatan dan penampilan
                  kulitmu. Seharusnya mengandung bahan-bahan yang efektif dan aman untuk digunakan.
                  Temukan semua rekomendasi produk di sini!
                </span>
                <div className="btn-test">
                  <a href="SkinTypeLanding.jsx">
                    <button type="button" className="btn btn-primary">Test Tipe Kulit</button>
                  </a>
                </div>
              </div>
              <div className="background-anim col-4">
                <img className="img-fluid" src="/assets/images/content/3d_animation_header.png" alt="img-header" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tampilan Awal Pengguna */}

      {/* Anda perlu mengonversi productCarousel.html menjadi komponen React */}
      <section>
        <div>
          {/* Konten dari productCarousel.html */}
        </div>
      </section>

      {/* Top Brand */}
      <section>
        <div>
          {/* Konten dari topBrand.html */}
        </div>
      </section>
      {/* Top Brand */}

      {/* Section FAQ */}
      <section className="FAQ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center flex-column">
              <div className="title text-center">
                <h1>Pertanyaan yang Sering Diajukan</h1>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <span>Mengapa penting untuk mengetahui jenis tipe kulit kita?</span>
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body custom-text-align">
                        <span>
                          Mengenal jenis tipe kulit adalah penting karena membantu Anda
                          mengidentifikasi dan memilih produk skincare yang tepat sesuai
                          dengan kebutuhan kulit Anda. Setiap tipe kulit memiliki masalah khas,
                          dan menggunakan sabun pembersih wajah yang tidak sesuai dengan jenis kulit
                          Anda dapat mengakibatkan efek samping seperti iritasi. Selain itu, memahami tipe
                          kulit Anda juga membantu Anda mengidentifikasi gejalanya dan menentukan cara mengatasinya.
                        </span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <span>Bagaimana cara merawat kulit saya dengan benar?</span>
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <span>
                          Langkah-langkah dasar perawatan kulit yang benar meliputi pembersihan,
                          eksfoliasi, pelembapan, dan perlindungan matahari. Gunakan pembersih yang
                          lembut sesuai dengan jenis kulit Anda, lalu gunakan produk eksfoliasi yang
                          mengandung AHA atau BHA beberapa kali seminggu. Selain itu, jangan lupa
                          untuk menggunakan pelembap setiap hari dan produk perlindungan matahari dengan
                          SPF minimal 30.
                        </span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <span>Bagaimana cara mengetahui produk perawatan yang cocok untuk kulit saya?</span>
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <span>
                          Untuk mengetahui produk perawatan yang cocok untuk kulit Anda, ada beberapa
                          langkah yang bisa Anda lakukan. Pertama, penting untuk mengidentifikasi jenis kulit
                          Anda dengan baik, apakah itu berminyak, kering, kombinasi, atau sensitif. Setelah itu,
                          coba lakukan tes produk dengan menggunakan sampel kecil terlebih dahulu sebelum membeli
                          produk dalam ukuran penuh. Perhatikan bagaimana kulit Anda bereaksi setelah penggunaan,
                          apakah ada iritasi atau reaksi negatif lainnya. Selanjutnya, perhatikan bahan-bahan yang
                          terdapat dalam produk tersebut. Pilihlah produk yang mengandung bahan-bahan yang cocok untuk
                          jenis kulit Anda.
                        </span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        <span>Bagaimana cara merawat kulit saya dengan benar?</span>
                      </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <span>
                          Langkah-langkah dasar perawatan kulit yang benar meliputi pembersihan,
                          eksfoliasi, pelembapan, dan perlindungan matahari. Gunakan pembersih yang
                          lembut sesuai dengan jenis kulit Anda, lalu gunakan produk eksfoliasi yang
                          mengandung AHA atau BHA beberapa kali seminggu. Selain itu, jangan lupa
                          untuk menggunakan pelembap setiap hari dan produk perlindungan matahari dengan
                          SPF minimal 30.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="notify_me">
          <div className="container">
            <div className="row">
              <div className="notify col-12 d-flex align-items-center">
                <div className="text_notify text-center">
                  <h1 className="j1">Dapatkan Pembaruan Dari Mana Saja</h1>
                  <h3 className="j2">Jangan lewatkan sesuatu yang baru dari kami</h3>
                </div>
                <div className="input_email">
                  <input type="text" placeholder="username@gmail.com" required />
                </div>
                <div className="button_input">
                  <input className="btn" type="submit" value="Kirim" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Section FAQ */}

      {/* Footer */}
      <Footer />
      {/* Footer */}

      <script src="/assets/js/script.js"></script>
      <script src="/vendor/bootstrap/js/bootstrap.min.js"></script>
    </>
  );
}

export default Home;
