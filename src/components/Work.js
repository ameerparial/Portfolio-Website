import { Item } from "./Certificates";
import ECommerce from "../assets/e-commerce.JPG";
import finance from "../assets/finance.JPG";
import ims from "../assets/ims.PNG";
import sms from "../assets/sms.JPG";
import "./Work.css";
import { useState } from "react";
const projects = [
  {
    title: "Finance for Education",
    link: "https://github.com/Rehman760/FYP.git",
    desc: `It is a web-based platform that connects students in need of financial assistance with donors who are willing to sponsor their education`,
    skills: ["ReactJS", "Firebase", "JS", "Tailwind"],
    imageSrc: finance,
  },
  {
    title: "School Management System",
    link: "",
    desc: `The semester project facilitates school administration to manage the record of their students on the system.`,
    skills: ["HTML", "CSS", "Bootstrap"],
    imageSrc: sms,
  },

  {
    title: "E-Commerce Website",
    link: "",
    desc: `I independently designed and developed an E-Commerce Website, leveraging Node.js and Restful APIs to enhance my proficiency in backend development and web application architecture`,
    skills: ["NodeJS", "EJS"],
    imageSrc: ECommerce,
  },
  // {
  //   number: "04",
  //   title: "Eye Disease Classification",
  //   link: "",
  //   desc: `Machine Learning Project to classify eye disease from the human eye image. Eye disease can be bulging, cataract, crossed, uveitis, glaucoma, and normal.`,
  //   skills: ["Machine Learning", "Pyhton"],
  //   imageSrc: Image,
  // },
  // {
  //   number: "05",
  //   title: "Drive Car App",
  //   link: "",
  //   desc: `An Android app that enables passengers to find a suitable car driven by professionals`,
  //   skills: ["Kotlin", "Google Map"],
  //   imageSrc: Image,
  // },
  // {
  //   number: "06",
  //   title: "Casino Game Platform",
  //   link: "",
  //   desc: `This project facilitates users to play three different games; Brick Breaker, Reversi, and Ludo.`,
  //   skills: ["C#", "Visual Studio"],
  //   imageSrc: Image,
  // },
  {
    number: "04",
    title: "Inventory Management System",
    link: "",
    desc: `I built an Inventory Management System to practice using MySQL databases with Java, helping me improve my skills in backend development and database integration`,
    skills: ["Java", "MySql"],
    imageSrc: ims,
  },
];
const Work = () => {
  const [cIndex, setCIndex] = useState(0);
  const onNext = () => {
    if (cIndex < projects.length - 1) setCIndex(cIndex + 1);
  };
  const onPrev = () => {
    if (cIndex > 0) setCIndex(cIndex - 1);
  };
  return (
    <>
      <div className="buttons text-center">
        <button className="me-1 about-item" onClick={onPrev}>
          Previous
        </button>
        <button className="about-item" onClick={onNext}>
          Next
        </button>
      </div>
      <ShowProject projectObj={projects[cIndex]} index={cIndex} />
    </>
  );
};

const ShowProject = ({ projectObj, index }) => {
  const computedIndex = index + 1 <= 9 ? "0" + (index + 1) : index + 1;
  return (
    <div className="row">
      <Item
        number={computedIndex}
        title={projectObj?.title}
        link={projectObj?.link}
        year={projectObj?.desc}
        skills={projectObj?.skills}
        isIcon={true}
        fontSize={"50px"}
      />
      <div className="col-md-6">
        <img
          src={projectObj?.imageSrc}
          style={{ width: "100%", height: "400px" }}
          alt="Not Found"
        />
      </div>
    </div>
  );
};

export default Work;
