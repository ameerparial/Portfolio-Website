import { useState } from "react";
import "./About.css";
const skillsList = [
  { className: "fa-brands fa-html5", name: "HTML" },
  { className: "fa-brands fa-css3-alt", name: "CSS" },
  { className: "fa-brands fa-bootstrap", name: "Bootstrap" },
  { className: "fa-brands fa-js", name: "JavaScript" },
  { className: "fa-brands fa-react", name: "React" },
  { className: "fa-brands fa-node-js", name: "NodeJS" },
  { className: "fa-solid fa-server", name: "ExpressJS" }, // ExpressJS does not have a direct icon; using server icon as a substitute
  { className: "fa-solid fa-database", name: "MongoDB" },
  { className: "fa-regular fa-database", name: "MySql" }, // MySQL does not have a direct icon; using database icon
  { className: "fa-brands fa-react", name: "React Redux" }, // Using React icon for Redux as well
  { className: "fa-brands fa-git-alt", name: "Git & Github" }, // Using Git icon
  { className: "fa-brands fa-python", name: "Python" },
  { className: "fa-solid fa-code-branch", name: "Data Structures" }, // No specific icon; using code-branch as a substitute
  { className: "fa-brands fa-js-square", name: "JQuery" }, // Using JS icon for jQuery as well
  { className: "fa-brands fa-java", name: "Java" },
  { className: "fa-solid fa-cubes", name: "OOP" }, // No specific icon; using cubes as a substitute
  { className: "fa-brands fa-android", name: "Kotlin" }, // Using Android icon for Kotlin
];

const personalInfo = {
  name: "Ameer Hamza",
  phone: "+923173465664",
  experience: "1 year",
  nationality: "Pakistani",
  email: "khuhroameerhamza4@gmail.com",
  languages: "English, Urdu, Sindhi",
};
const About = () => {
  const [itemNo, setItemNo] = useState(0);
  const handleClick = (number) => {
    setItemNo(number);
  };
  return (
    <>
      <div className="col-md-5 text-md-start text-center">
        <h4 className="mb-3">View My Career Highlights</h4>
        <Items onItemClick={handleClick} itemNo={itemNo} />
      </div>
      <div className="col-md-7 text-md-start text-center">
        <RenderItem itemNo={itemNo} />
      </div>
    </>
  );
};

const RenderItem = ({ itemNo }) => {
  switch (itemNo) {
    case 0:
      return <Experience title={"My Experience"} />;
    case 1:
      return <Education />;
    case 2:
      return <Skills sList={skillsList} />;
    case 3:
      return (
        <>
          <h1>About Me</h1>

          <AboutMe name={"Name"} value={personalInfo["name"]} />
          <AboutMe name={"Phone"} value={personalInfo["phone"]} />
          <AboutMe name={"Experience"} value={personalInfo["experience"]} />
          <AboutMe name={"Email"} value={personalInfo["email"]} />
          <AboutMe name={"Nationality"} value={personalInfo["nationality"]} />
          <AboutMe name={"Languages"} value={personalInfo["languages"]} />
        </>
      );
    default:
      return <h1>Not Found</h1>;
  }
};
const AboutMe = ({ name, value }) => {
  const isToModify = value.length > 14;
  const [modifiedValue, setModifiedValue] = useState(
    isToModify ? value.substring(0, 14) + "..." : value
  );
  function showMe(modifiedValue) {
    if (modifiedValue.includes("...")) {
      setModifiedValue(value);
      setTimeout(() => {
        setModifiedValue(modifiedValue);
      }, 2500);
    } else {
      console.log("Not implied");
    }
  }
  return (
    <div className="d-flex pe-1 pb-3">
      <span className="w-50">{name}</span>
      <span
        className="w-50"
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          if (isToModify) showMe(modifiedValue);
        }}
      >
        {modifiedValue}
      </span>
    </div>
  );
};
const Experience = ({ title }) => {
  return (
    <>
      <h1 className="mt-md-0 mt-3 mb-3">{title}</h1>
      <div className="row d-flex justify-content-md-start justify-content-center">
        <Box
          title={"01/2023 - 07/2023"}
          value={"Full Stack Developer"}
          institution={"E-MediGo Startup"}
        />
        <Box
          title={"08/2023 - 10/2023"}
          value={"Web Developer Intern"}
          institution={"FasTech System"}
        />
        <Box
          title={"01/2024 - present"}
          value={"Freelancer"}
          institution={"Upwork"}
        />
      </div>
    </>
  );
};

const Education = () => {
  return (
    <>
      <h1 className="mt-md-0 mt-3 mb-3">My Education</h1>
      <div className="row d-flex justify-content-md-start justify-content-center">
        <Box
          title={"2023 Graduate"}
          value={"In Computer Science"}
          institution={"Sukkur IBA University"}
        />
        <Box
          title={"2018"}
          value={"Intermediate"}
          institution={"Government Degree College"}
        />
      </div>
    </>
  );
};

const Skills = ({ sList }) => {
  return (
    <div>
      <h1>My Skill</h1>
      <div className="onhover d-flex flex-wrap justify-content-md-start  justify-content-center ">
        {sList.map((icon, key) => {
          return (
            <div
              key={key}
              className="box  d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "10px",
                margin: "5px",
                width: "80px",
                height: "80px",
              }}
            >
              <span className="hidden">{icon?.name}</span>
              <i className={icon?.className} style={{ fontSize: "35px" }}></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Box = ({ title, value, institution }) => {
  return (
    <div
      className={`col-md-5 me-md-3 box d-flex flex-column justify-content-between mb-3`}
    >
      <h4 className="headline-title">{title}</h4>
      <h4>{value}</h4>
      <div className="d-flex justify-content-md-start justify-content-center align-items-center">
        <span style={{ color: "#18ca87", fontSize: "20px" }}>.</span>
        <h5>{institution}</h5>
      </div>
    </div>
  );
};

const Items = ({ onItemClick, itemNo }) => {
  return (
    <div className="d-flex flex-column align-items-md-start align-items-center">
      <Item
        text={"Experience"}
        onItemClick={() => onItemClick(0)}
        myclass={itemNo === 0 ? "active-me" : ""}
      />
      <Item
        text={"Education"}
        onItemClick={() => onItemClick(1)}
        myclass={itemNo === 1 ? "active-me" : ""}
      />
      <Item
        text={"Skills"}
        onItemClick={() => onItemClick(2)}
        myclass={itemNo === 2 ? "active-me" : ""}
      />
      <Item
        text={"About me"}
        onItemClick={() => onItemClick(3)}
        myclass={itemNo === 3 ? "active-me" : ""}
      />
    </div>
  );
};

const Item = ({ text, onItemClick, myclass }) => {
  return (
    <div
      className={`w-75 mb-2 about-item text-center ${myclass}`}
      onClick={onItemClick}
    >
      {text}
    </div>
  );
};
export default About;
