import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>Full Name: Elijah Davis</span>
                     <br></br>
       						   <span>
                     <span>Current Location: San Diego</span>
                    </span>
                    <br></br>
                    <span>Email: elijahgdavis1999@gmail.com</span>
                    <br></br>
                    <span>Phone Number: 619-772-3019</span>
                    <br></br>
                    <span>Downloadable Resume: </span>
                    <a href="https://elijahig.github.io/portfolio/resume.pdf">Resume</a>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}