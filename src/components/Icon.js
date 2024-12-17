const Icon = ({
  radius,
  iconName,
  text,
  padding,
  width,
  height,
  link,
  onClick,
}) => {
  return (
    <div
      style={{
        borderRadius: radius,
        border: "1px solid #18ca87",
        padding: padding,
        color: "#18ca87",
        width: width,
        height: height,
        cursor: "pointer",
      }}
      className="d-flex justify-content-center align-items-center me-2"
      onClick={() => onClick(link)}
    >
      {text}
      <div>
        <i className={iconName} style={{ color: "#18ca87" }}></i>
      </div>
    </div>
  );
};

export default Icon;
