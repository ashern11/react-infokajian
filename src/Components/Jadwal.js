import React from 'react';
import { Link } from 'react-router-dom';

class Jadwal extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="header">
            <h4>Template Mobile</h4>
        </div>

        <div className="navigation">
            <Link to="/" ><img src={'./img/icon-home.png'} /> Beranda </Link>
            <Link to="/jadwal" ><img src={'./img/icon-list.png'} /> Jadwal </Link>
            <Link to="/maps" ><img src={'./img/icon-maps.png'} /> maps </Link>
            <Link to="/about" ><img src={'./img/icon-info.png'} /> About </Link>
        </div>

        <div className="content">
            <div className="banner">

            </div>

            <div className="row">
              <div className="item">
                <div className="image">
                  <img src={'./img/example.jpeg'} />
                </div>

                <div className="detail">
                  Jumat, 01 Desember 2019 <br />
                  Pukul 16.00 - Selesai <br /><br />
                  <h4>TADABBUR SURAH YUSUF</h4>
                  <span className="textPrimary">Ustad Adi Hidayat</span>  <br /><br />
                  Masjid Agung Cimahi <br />
                  KOTA CIMAHI <br /><br />
                  <span className="tag">#SUNNAH</span>
                  <span className="tag">#INFO</span>
                  <span className="tag">#KAJIAN</span>
                </div>
              </div>
            </div>
            
        </div>
      </div>
    );
  }
}

export default Jadwal;