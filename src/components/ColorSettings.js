import { useEffect, useState } from "react";
import "./colorSetting.css";
export default function ColorSettings() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "true" ? true : false
  );

  useEffect(() => {
    const value = localStorage.getItem("theme");
    console.log(value);
    let bg = "";
    let text = "";
    if (value === "true") {
      bg = "black";
      text = "white";
    } else {
      bg = "white";
      text = "black";
    }
    document.documentElement.style.setProperty("--bgcolor", bg);
    document.documentElement.style.setProperty("--text-color", text);
  }, [theme]);

  function toggleMode() {
    localStorage.setItem("theme", !theme);
    setTheme((t) => !t);
  }
  return (
    <div
      style={{
        borderRadius: "0px 20px 20px 0px",
        cursor: "pointer",
        position: "fixed",
        top: "50%",
      }}
      className={`color-setting bg-${theme ? "white" : "black"} `}
      onClick={toggleMode}
    >
      <i className={`fas fa-${theme ? "moon" : "sun"} icon pe-2`} />
    </div>
  );
}
