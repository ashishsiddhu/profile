import React, { Component, useEffect } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import CNCFrame from './Components/CNCFrame';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      currentPath: window.location.hash,  // Set initial state based on URL hash
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    fetch("./resumeData.json")
      .then(res => res.json())
      .then(
        (data) => {
          console.log("data >> ",data);
          this.setState({resumeData: data});
        })
      .catch((e)=>{
        console.error("Error >> ",e);
      })
  }

  componentDidMount(){
    this.getResumeData();
    // Listen for hash changes in the URL
    window.addEventListener('hashchange', this.handlePathChange);
  }

  componentWillUnmount() {
    // Clean up the event listener when the component is unmounted
    window.removeEventListener('hashchange', this.handlePathChange);
  }
  handlePathChange = () => {
    // Update the state to re-render the component when hash changes
    this.setState({ currentPath: window.location.hash });
  };


  
  render() {
    return (
      <div className="App">

        {this.state.currentPath === '#contact' ?
          <CNCFrame /> :
          <div>
            <Header data={this.state.resumeData.main} />
            <About data={this.state.resumeData.main} />
            <Resume data={this.state.resumeData.resume} />
            {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
            <Testimonials data={this.state.resumeData.testimonials} />
            <Contact data={this.state.resumeData.main} />
            <Footer data={this.state.resumeData.main} />
          </div>
        }


      </div>
    );
  }
}

export default App;
