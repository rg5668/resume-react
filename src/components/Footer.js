import React from "react";

const Footer = () => {
  return (
    <footer className="Footer">
      <span className="Footer-copyright">
        <b>Copyrightⓒ2022</b> by LKH Resume. All Page content is property of LKH
        Resume
      </span>

      <span className="Footer-link">
        Emial : <b>rg4093@naver.com</b>
        <br />
        Kakao ID : <b>rg4093</b>
      </span>
    </footer>
  );
};

export default React.memo(Footer);
