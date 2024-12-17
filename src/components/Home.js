import image from "../assets/transparent_image.png";
import "./Home.css";
import Icon from "./Icon";
import IconItems from "./IconItems";
import NumberText from "./NumberText";
import pdf from "../assets/Ameer Hamza (MERN).pdf";
const Home = () => {
  function openLink(link) {
    if (link.trim().length > 0) window.open(link);
  }
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-md-6 order-md-1 order-2  text-md-start text-center">
          <p className="child1">MERN Stack Developer</p>
          <h1 className="child2">Hello I'm</h1>
          <h1 className="child3">Ameer Hamza</h1>
          <p className="child4">Passionate software engineer</p>

          <IconItems>
            <Icon
              radius={"20px"}
              padding={"2px"}
              // iconName={"fas fa-download"}
              text={"Download CV"}
              width={"150px"}
              onClick={openLink}
              height={"30px"}
              link={pdf}
            />
            <Icon
              radius={"50%"}
              iconName={"fab fa-github"}
              width={"30px"}
              height={"30px"}
              link={"https://github.com/ameerparial"}
              onClick={openLink}
            />
            <Icon
              radius={"50%"}
              iconName={"fab fa-linkedin"}
              width={"30px"}
              height={"30px"}
              link={"https://www.linkedin.com/in/ameer-hamza-khuhro/"}
              onClick={openLink}
            />
            <Icon
              radius={"50%"}
              iconName={"fab fa-youtube"}
              width={"30px"}
              height={"30px"}
              link={""}
              onClick={openLink}
            />
            <Icon
              radius={"50%"}
              iconName={"fab fa-twitter"}
              width={"30px"}
              height={"30px"}
              link={""}
              onClick={openLink}
            />
          </IconItems>
        </div>
        <div className="col-md-6 order-md-2 order-1 text-center p-3">
          <a href="/" id="profile-image">
            <img src={image} alt="not found" />
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-md-start justify-content-center flex-wrap mt-3">
        <NumberText number={10} text={"Projects Completed"} interval={50} />
        <NumberText number={20} text={"Repositories on github"} interval={25} />
        <NumberText number={12} text={"Technologies Mastered"} interval={48} />
        <NumberText number={12} text={"Months of Experience"} interval={50} />
      </div>
    </div>
  );
};

export default Home;
