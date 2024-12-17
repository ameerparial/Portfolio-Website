import { useParams } from "react-router-dom";
import Certificate from "./Certificates";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";

const Displayer = () => {
  const { pathID } = useParams();
  let component = "";
  //   console.log(pathID);

  switch (pathID) {
    case "work":
      component = <Work />;
      break;
    case "about":
      component = <About />;
      break;
    case "certificate":
      component = <Certificate />;
      break;
    case "contact":
      component = <Contact />;
      break;
    default:
      return <h1>Page not found </h1>;
  }

  return (
    <div className="container p-3">
      <div className="row">{component}</div>
    </div>
  );
};

export default Displayer;
