import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    componentDidMount() {
    }

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

            <div className="home-menu">
                <a href=""> Jadwal Sholat</a>
                <a href=""> Al Quran</a>
                <a href=""> Quote</a>
                <a href=""> Cari Artikel</a>
            </div>

            <div className="row">
                <h2>Info Kajian</h2>

                <div className="overflow">

                    <div className="card">
                        <img src={'./img/example.jpeg'} />
                        <div className="card-body">
                            Rabu, 04 Desember 2019, Jam 13.00
                            <h4>Tahsin Al Quran dan Bahasa Arab Dasar Kau Keong Racun</h4>
                            <h5>Ustad</h5>
                            Rumah Ibu Lylla (4.66km) <br />
                            Kabupaten Bandung Barat
                        </div>
                        <div className="card-footer">
                            <hr />
                            <button className="button">Share</button>
                            <button className="button">Ingatkan</button>
                        </div>
                    </div>

                    <div className="card">
                        <img src={'./img/example.jpeg'} />
                        <div className="card-body">
                            Rabu, 04 Desember 2019, Jam 13.00
                            <h4>Tahsin Al Quran dan Bahasa Arab Dasar Kau Keong Racun</h4>
                            <h5>Ustad</h5>
                            Rumah Ibu Lylla (4.66km) <br />
                            Kabupaten Bandung Barat
                        </div>
                        <div className="card-footer">
                            <hr />
                            <button className="button">Share</button>
                            <button className="button">Ingatkan</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
      </div>
    );
  }
}

export default Home;
