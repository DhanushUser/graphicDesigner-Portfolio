import React, { useEffect } from "react";
import "./about.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className="about my-[100px] ">
      <div className="about-row min-w-fit grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center justify-center mx-5">
        <div data-aos="fade-right" className="about-detail  p-5  lg:mb-[70px] md:mb-[30px] sm:mb-[30px]">
          <div className="about-logo text-4xl">
            <i className="bx bxl-instagram-alt"></i>
          </div>
          <h3 className="text-lg uppercase my-3 font-[600]">
            Social Media Designs
          </h3>
          <p className="text-[12px] my-3 w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi
            velit
          </p>
          <a href="#social">
            <button className="btn px-2 bg-slate-400 py-1 text-center text-lg rounded-lg">
              know more <i className="bx bx-fast-forward"></i>
            </button>{" "}
          </a>
        </div>
        <div data-aos="fade-up" className="about-detail   p-5 lg:mb-[70px] md:mb-[30px] sm:mb-[30px]">
          <div className="about-logo text-4xl">
            <i className="bx bxs-notepad"></i>
          </div>
          <h3 className="text-lg uppercase my-3 font-[600]">
            Thumbnail Designs
          </h3>
          <p className="text-[12px] my-3 w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi
            velit
          </p>
          <a href="#thumbnail">
            <button className="btn px-2 bg-slate-400 py-1 text-center text-lg rounded-lg">
              know more <i className="bx bx-fast-forward"></i>
            </button>
          </a>
        </div>
        <div data-aos="fade-left" className="about-detail   p-5 lg:mb-[70px] md:mb-[30px] sm:mb-[30px]">
          <div className="about-logo text-4xl">
            <i className="bx bxs-hot"></i>
          </div>
          <h3 className="text-lg uppercase my-3 font-[600]">Client works</h3>
          <p className="text-[12px] my-3 w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi
            velit
          </p>
          <a href="#client">
            <button className="btn px-2 bg-slate-400 py-1 text-center text-lg rounded-lg">
              know more <i className="bx bx-fast-forward"></i>
            </button>
          </a>
        </div>
      </div>

      <div
        id="about"
        className="exp-row py-[150px] lg:flex md:flex sm:block justify-evenly items-center my-[100px]"
      >
        <div data-aos="fade-right" className="exp max-w-[45%] mx-4 flex flex-col text-white">
          <h1 className="text-5xl text-center font-bold text-[#FCA311]">1+ </h1>
          <h4 className="text-xl font-[550] text-center mb-5">
            Years experience
          </h4>
          <p className="text-[14px]">
            I am a passionate graphic designer with 1 year of professional
            experience in creating visually compelling designs. My expertise
            includes poster design, thumbnail creation, and promotional graphics
            tailored to meet client needs. With a strong creative vision and
            attention to detail, I bring ideas to life through unique and
            engaging designs. My portfolio showcases projects that highlight my
            skills in branding, digital marketing, and innovative visual
            storytelling. I am committed to delivering high-quality designs that
            leave a lasting impact.
          </p>
        </div>
        <hr className="border lg:flex md:flex  border-white lg:h-[150px] md:h-[150px] sm:hidden" />
        <div data-aos="fade-left" className="clients">
          <div className="client-row grid  grid-cols-2">
            <div className="section">
              <h2>10+</h2>
              <p>Clients</p>
            </div>
            <div className="section">
              <h2>50+</h2>
              <p>posters completed!</p>
            </div>
            <div className="section">
              <h2>20+</h2>
              <p>Thumbnails designs!</p>
            </div>
            <div className="section">
              <h2>10+</h2>
              <p>logo designs!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
