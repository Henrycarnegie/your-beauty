import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';
import iconBesar from '../assets/images/icon/icon_besar.png';
import poseMale from '../assets/images/icon/pose_male.png';

const About = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Header />
      {/* Navigation Bar */}
      
      {/* Tampilan awal */}
      <section className="main-content">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="content col-lg-10 d-flex align-items-center justify-content-around">
              <div className="icon-besar col-lg-5">
                <img className="img-fluid" style={{ width: '75%', height: '80%', borderRadius: '50%' }}
                  src={iconBesar} alt="Icon Besar" />
              </div>

              <div className="title-beauty col-lg-4 d-flex align-items-center">                     
                <div className="text-start">
                  <h1 className="mb-3">Beauty</h1>
                  <h5 className="mb-3">Skincare platform</h5>  
                  <h6>Platform media yang dibuat khusus
                  memenuhi segala hal kecantikan,<span> website ini bertujuan
                  menginspirasi wanita & pria Indonesia Untuk merawat diri dan
                  dapat percaya diri dengan kulitnya sendiri</span> serta membantu mengetahui
                  jenis kulit seseorang dan memberikan rekomendasi produk yang
                  sesuai dengan jenis kulitnya </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tampilan visi misi */}
      <section className="visi_misi">
        <div className="container-fluid">
          <div className="row"> 
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="col-12 title-visimisi p-4 d-flex justify-content-center">
                <div className="title-visi col-lg-4 align-self-start">
                  <h1>Visi :</h1>
                  <h6>Menjadi perusahaan perawatan kulit
                      terdepan yang menginspirasi dan memberdayakan
                      semua orang untuk merasa percaya diri dengan
                      kecantikan alami mereka</h6>
                </div>
                <div className="title-misi col-lg-4 align-self-end">
                  <h1>Misi :</h1>
                  <h6>Merekomendasikan produk skincare sesuai 
                      dengan type kulit dan Memberikan edukasi dan 
                      informasi yang bermanfaat tentang kesehatan dan 
                      kecantikan kulit</h6>
                </div>             
                <div className="pose_male col-lg-4">
                  <img className="img-fluid" src={poseMale} alt="Pose Male" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tampilan visi misi */}
      
      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
};

export default About;
