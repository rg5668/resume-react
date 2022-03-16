import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlogger, faGithub } from "@fortawesome/free-brands-svg-icons";

import CommonButton from "../components/CommonButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Archiving = () => {
  const navigate = useNavigate();

  return (
    <div className="inner">
      <Header
        leftChild={
          <CommonButton
            text={"<"}
            type={"positive"}
            onClick={() => navigate(-1)}
          />
        }
        rightChild={<Navbar />}
      />

      <div className="Archiving">
        <h2>LimKunHee Archiving</h2>
        <section>
          <div className="Archiving-Group">
            <div className="Archiving-Git">
              <span>
                <FontAwesomeIcon icon={faGithub} className="Github-Icon" />
              </span>

              <span className="Archiving-content">
                <h3>GitHub</h3>
                <br />
                <br />- 소스 코드 저장소 입니다.
                <br /> - 과거 프로젝트, 소스 코드
                <br /> - 학부 시절 수강한 코딩 과제 소스 코드
                <br />
                <br />{" "}
                <a href="https://github.com/rg5668" target={"_blank"}>
                  https://github.com/rg5668
                </a>
              </span>
            </div>
            <div className="Archiving-T">
              <span>
                <FontAwesomeIcon icon={faBlogger} className="Blogger-Icon" />
              </span>
              <span className="Archiving-content">
                <h3>Tistory</h3>
                <br />
                <br />- 공부 및 지식 공유 목적의 블로그입니다.
                <br />- 공부한 것을 기록하면서 복습하기 위함
                <br />- 웹 개발자에 관한 지식 정리
                <br />- 알면 좋은 지식 공유를 위함
                <br />
                <br />
                <a href="https://rg4093.tistory.com" target={"_blank"}>
                  https://rg4093.tistory.com
                </a>
              </span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Archiving;
