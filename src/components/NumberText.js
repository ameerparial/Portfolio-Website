import { useEffect, useState } from "react";

const NumberText = ({ number, text, interval }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevNumber) => {
        if (prevNumber < number) {
          return prevNumber + 1;
        } else {
          clearInterval(timer);
          return prevNumber;
        }
      });
    }, interval);

    return () => clearInterval(timer);
  }, [current, interval, number]);

  return (
    <div
      className="d-flex align-items-center p-3 m-md-3 m-3"
      style={{ width: "200px" }}
    >
      <div className="number pe-1" style={{ fontSize: "40px", width: "100px" }}>
        {current}
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export default NumberText;
