const CommonButton = ({ text, type, onClick }) => {
  //   const btnType = ["positive", "negative", "home_detail", "detail"].includes(type) ? type : "default";
  return (
    <button
      className={["CommonButton", `CommonButton_${type}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// type이 지정되지 않은 버튼이 생성되었을때 default
CommonButton.defaultProps = {
  type: "default",
};

export default CommonButton;
