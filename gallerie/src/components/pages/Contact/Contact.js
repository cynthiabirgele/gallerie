import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="content">
        <h2 className="header-title">Contact</h2>
        <p>	&#169; Cynthia</p>
        <p>info@uzsienas.lv</p>
        <p>Social: </p>
        <div><a data-pin-do="embedBoard" data-pin-board-width="300" data-pin-scale-height="250" data-pin-scale-width="80" href="https://www.pinterest.com/uzsienas/room/"> </a></div>
      </div>
    );
  }
}

export default Contact;
