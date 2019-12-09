import React from 'react';
import { Link } from 'react-router-dom';

class Maps extends React.Component {

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
            <div className="banner"></div>

            <div style={{textAlign: 'center'}}>
                <h2>INFO KAJIAN <br />MASJID AGUNG CIMAHI</h2>
                <hr />
                <h4>Deskripsi</h4>
                <p>
                    Website untuk melihat info kajian masjid agung cimahi, sebernernya sih buat banyak
                    cuma saya tes dulu untuk 1 tempat. Dibuat menggunakan React.js dan RestAPI
                </p>

                Download Sorce Code : <a href="#" target="_blank">github</a>

                <h5>Develop by Asep Hermawan</h5>
                <h6>Aku Ganteng.</h6>
            </div>
        </div>
      </div>
    );
  }
}

export default Maps;