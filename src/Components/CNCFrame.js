import React, { Component } from 'react';

class CNCFrame extends Component {
  render() {

    return (
      <header id="home">
      <div className="row banner">
         <div className="banner-text">
            <h2 className="responsive-headline" style={{color: 'white'}}>Concourse IFRAME</h2>
            <iframe
              src="https://concourse-test.jpmorgan.com/t/17310853673533TI49"
              width="1100"
              height="600"
              title="Google Iframe"
              style={{ border: 'none' }}
            ></iframe>
         </div>
      </div>
      </header>
    );
  }
}

export default CNCFrame;
