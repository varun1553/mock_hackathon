import React from "react";
import image1 from "../images/donations-Volunteers-smiling-at-camera-h-121476695.jpg";
import image2 from "../images/NGO-Hindi.jpg";
import image3 from "../images/Website---Teach_m62wux.webp";
import "./Home.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { FaEnvelope,FaPhoneAlt } from "react-icons/fa";




function Home(){
  return(
      <div>
    
    <img src={image1} />
    <img src={image2}  />
    <img src={image3}  />
    <div className="content">
      <p>A non-government organization (NGO) is an organization that generally is formed independent from government. They are typically nonprofit entities, and many of them are active in humanitarianism or the social sciences; they can also include clubs and associations that provide services to their members and others. Surveys indicate that NGOs have a high degree of public trust, which can make them a useful proxy for the concerns of society and stakeholders.However, NGOs can also be lobby groups for corporations, such as the World Economic Forum.NGOs are classified by  orientation—the type of activities an NGO undertakes, such as activities involving human rights, consumer protection, environmentalism, health, or development; and level of operation, which indicates the scale at which an organization works: local, regional, national, or international.</p>
    </div>
    <div className="">
      <footer>
        <div className="">
        <FaEnvelope />
          <p>@gmail.com</p>
        </div>
        <div className="">
          <FaPhoneAlt />
          <p>9767797133</p>
        </div>
      </footer>
    </div>

      </div>
  )
}
export default Home ;