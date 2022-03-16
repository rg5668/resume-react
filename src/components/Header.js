import { useNavigate } from "react-router-dom";

const Header = ({ leftChild, rightChild }) => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="head-container">
        <div className="head_btn_left">{leftChild}</div>
        <div className="headText" onClick={() => navigate("/main")}>
          LimKunHee
        </div>
        <div className="head_btn_right">{rightChild}</div>
      </div>
    </header>
  );
};

export default Header;
