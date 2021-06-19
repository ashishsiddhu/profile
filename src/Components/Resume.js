import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school} className="workIcon">
          <div className="timeline-ico">
              <i className="fa fa-book"></i>
          </div>
          <h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company} className="workIcon">
                  <div className="timeline-ico">
                      <i className="fa fa-briefcase"></i>
                  </div>
                  <h3>{work.company}</h3>
                  <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                  <h4>PROJECTS:</h4>
                  <h5>{work.project_1}</h5>
                  <div className="italicStyle">{work.project_1_duration}</div>
                  <div>{work.project_1_description}</div>
                  <ul className="roles">
                    <li>{work.project_1_roles_1}</li>
                    <li>{work.project_1_roles_2}</li>
                    { work.project_1_roles_3 && <li>{work.project_1_roles_3}</li> }
                    { work.project_1_roles_4 && <li>{work.project_1_roles_4}</li> }
                  </ul>
                  {/* {unreadMessages.length > 0 && <div>
                    <h5>{work.project_2}</h5>
                    <h5>{work.project_1_roles_2}</h5>
                    </div>
                  } */}
                  {work.project_2 &&
                    <span>
                      <h5>{work.project_2}</h5>
                      <div className="italicStyle">{work.project_2_duration}</div>
                      <div>{work.project_2_description}</div>
                      <ul className="roles">
                        <li>{work.project_2_roles_1}</li>
                        <li>{work.project_2_roles_2}</li>
                        <li>{work.project_2_roles_3}</li>
                        <li>{work.project_2_roles_4}</li>
                      </ul>
                    </span>
                  }
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>{skillmessage}
            </p>
            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Resume;
