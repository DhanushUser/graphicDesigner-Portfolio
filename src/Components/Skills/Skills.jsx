import React, { useEffect } from "react";
import "./skill.css";
import icons_data from "../../assets/icons_data";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id="skill" className="skills">
      <div className="skills-details">
        <h1 className="text-3xl text-center mt-5 uppercase font-semibold underline">
          Software Skills
        </h1>

        <div className="softwares flex flex-col justify-between mt-10 mb-10">
          {icons_data.map((item, index) => (
            <div 
              key={item.id || index} // Key moved to the topmost div inside the map
              className="flex justify-evenly items-center"
            >
              <img data-aos="fade-right" className="icon-image" src={item.i_img} alt="" />
              <h4 className="text-lg font-medium">{item.i_name}</h4>
              <p data-aos="fade-left" className="font-semibold">{item.i_val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
