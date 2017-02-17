import React, { Component } from 'react';
import logo from './images/logo.jpg';
import './styles/main.css';
import './styles/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">

        <header id="header">
          <h1><a href="#">e-Bill Systems</a></h1>
          <ul id="authSection">
            <li>
              Login
            </li>
          </ul>
        </header>
        <section id="sidebar">
          <section id="intro">
            <a href="#" className="logo"><img src={logo} alt="" /></a>
            <header>
              <h2>e-Bill System</h2>
              <p>A billing system that suits your needs</p>
            </header>
          </section>

          <section className="blurb">
            <h2>About</h2>
            <p>Our billing system has upgraded to a new level.</p>
            <ul className="actions">
              <li><a href="#" className="button">Learn More</a></li>
            </ul>
          </section>

          <section id="footer">
            <ul className="icons">
              <li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="fa-rss"><span className="label">RSS</span></a></li>
              <li><a href="#" className="fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <p className="copyright">&copy; Copyright: <a href="#">Dencio</a>.</p>
          </section>

        </section>
      </div>

    );
  }
}

export default App;
