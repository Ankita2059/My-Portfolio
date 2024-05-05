import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-3.svg"
const About = () => {
  return (
   <section className="about container section" id='about'>
    <h2 className="section__title">About Me</h2>

    <div className="about__container grid">
      <img src={Image} alt="" className="about__img" />

      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">Greetings! I'm Ankita, a creative frontend web developer and designer committed to bringing aesthetics and functionality together. With a focus on crafting visually appealing and intuitive user interfaces, I specialize in HTML, CSS, JavaScript, React to build responsive websites. My design philosophy merges a keen eye for detail with a passion for creating engaging digital experiences. Let's collaborate to transform your concepts into visually striking and user-friendly websites that leave a lasting impression.</p>
           {/* <a href="" className="btn">Download CV</a>  */}
           <a href="ankita_s resume.pdf" download className="btn"> Download Resume</a>


        </div>
        <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Web Development</h3>
              <span className="skills__number ">50%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage development"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">UI/UX design</h3>
              <span className="skills__number">30%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage ui__design"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Graphics Design</h3>
              <span className="skills__number">85%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage graphic"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About
