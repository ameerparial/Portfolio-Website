import "./Certificates.css";

const Certificate = () => {
  return (
    <>
      <Item
        number={"01"}
        title={"Data Structures and Performances"}
        link={"https://coursera.org/share/b3210a95d7b5caad4af3434fa9be1978"}
        year={"2020"}
        skills={["Trees", "Data Structure", "Linked List", "Binary Tree"]}
        isIcon={true}
        fontSize={"20px"}
      />
      <Item
        number={"02"}
        title={"Git Essential Training"}
        link={`https://www.linkedin.com/learning/certificates/4dfdaea441fe084f22b480bec888e92dcf19f6980286e96a78f283ef52d23330?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLK6Ev1f2QLOL%2Fk4aw5TfFw%3D%3D`}
        year={"2023"}
        skills={["Git"]}
        isIcon={true}
        fontSize={"20px"}
      />
      <Item
        number={"03"}
        title={"Building Modern UIs with React Routers v6"}
        link={`https://www.linkedin.com/learning/certificates/1ddb69a23a1ea1b2b555631ceabc89ca61fac2f04b918a2559b8623b117b344a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLK6Ev1f2QLOL%2Fk4aw5TfFw%3D%3D`}
        year={"2023"}
        skills={["ReactJS", "User Interface Design"]}
        isIcon={true}
        fontSize={"20px"}
      />
      <Item
        number={"04"}
        title={`Express Essentials: Build Powerful Web Apps with Node.js`}
        link={`https://www.linkedin.com/learning/certificates/83ac2dcecacbcabea1f00e65069c6c7e6cd68b9c6c98ef67afc77e83ea9e322e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLK6Ev1f2QLOL%2Fk4aw5TfFw%3D%3D`}
        year={"2023"}
        skills={["ExpressJS"]}
        isIcon={true}
        fontSize={"20px"}
      />
      <Item
        number={"05"}
        title={"Intorudction to MongoDB"}
        link={
          "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/c02c2e39-dd6a-4d1c-af93-969e0b4f7b7f-ameer-hamza-6c6016d3-b6d7-44b7-a7e8-8f080dbc0fb1-certificate.pdf"
        }
        year={"2023"}
        skills={["MongoDB"]}
        isIcon={true}
        fontSize={"20px"}
      />
      <Item
        number={"06"}
        title={"Learning npm: A Package Manager"}
        link={
          "https://www.linkedin.com/learning/certificates/276ce767767fe350afc0e1883c8fcd0a78fbacc6c5577c3d80ec576b46231fd1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLK6Ev1f2QLOL%2Fk4aw5TfFw%3D%3D"
        }
        year={"2023"}
        skills={["Package Management", "npm"]}
        isIcon={true}
        fontSize={"20px"}
      />
      <Item
        number={"07"}
        title={"NodeJS: Essential Training"}
        link={
          "https://www.linkedin.com/learning/certificates/d93b3d1108af285dd3221a6e1112612f45c1e0ca16993e6b99f06700e5704756?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLK6Ev1f2QLOL%2Fk4aw5TfFw%3D%3D"
        }
        year={"2023"}
        skills={["Nodejs"]}
        isIcon={true}
        fontSize={"20px"}
      />
      <Item
        number={"08"}
        title={"React.js Essential Training"}
        link={
          "https://www.linkedin.com/learning/certificates/a0af44c4731c904311e10b2d9614269e1dbb32674580e1ba195a41e31dbce177?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLK6Ev1f2QLOL%2Fk4aw5TfFw%3D%3D"
        }
        year={"2023"}
        skills={["Nodejs", "ReactJS"]}
        isIcon={true}
        fontSize={"20px"}
      />
    </>
  );
};

export function Item({ number, title, link, year, skills, isIcon, fontSize }) {
  return (
    <div className="col-md-6 pe-4 m-md-0 item mb-3 bottom-line d-flex flex-column justify-content-between">
      <div className="hoverElement" onClick={() => window.open(link)}>
        <div className="first-row d-flex justify-content-between align-items-center">
          <div style={{ fontSize: fontSize }}>{number}</div>
          {isIcon && (
            <a className="my-icon" href={link}>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          )}
        </div>
        <h3 style={{ fontSize: fontSize }}>{title}</h3>
      </div>
      <h4 style={{ color: "#18ca87", fontSize: "15px" }}>{year}</h4>

      <div className="d-flex align-items-center">
        {skills?.map((skill, key) => (
          <div
            className="d-flex justify-content-md-start justify-content-center align-items-center pe-1"
            style={{ fontSize: "15px" }}
            key={key}
          >
            <span
              style={{ color: "#18ca87", fontSize: "20px", marginTop: "-10px" }}
            >
              .
            </span>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
