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
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31689.222124800803!2d107.52116163476565!3d-6.872292105694587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f91cb3ecafbb91b!2sMasjid%20Agung%20Cimahi!5e0!3m2!1sen!2sid!4v1575853053258!5m2!1sen!2sid"
            width="100%" style={{height: '80vh'}} frameborder="0" allowfullscreen="">
            </iframe>
        </div>
      </div>
    );
  }
}

export default Maps;