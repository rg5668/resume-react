import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faFile,
  faRectangleAd,
  faMarker,
} from "@fortawesome/free-solid-svg-icons";

import CommonButton from "../components/CommonButton";
import Header from "../components/Header";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJava,
  faJira,
  faJs,
  faReact,
  faSourcetree,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";

const Skills = () => {
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
        rightChild={<CommonButton />}
      />

      <div className="Skills">
        <h2>LimKunHee Skills</h2>

        <section>
          <div className="Skills-Title Skills-Title-First">
            <span>Front-end</span>
          </div>
          <div className="Skills-Icon">
            <span>
              <FontAwesomeIcon icon={faHtml5} />
              <br />
              HTML
            </span>
            <span className="Skills-content">
              - 개발 환경 구축 및 기초 문법
              <br />
              - 태그에 대한 이해 및 활용
              <br />- 테이블에 대한 이해 및 활용
            </span>

            <span>
              <FontAwesomeIcon icon={faCss3Alt} />
              <br />
              CSS
            </span>
            <span className="Skills-content">
              - 개발 환경 구축 및 기초 문법
              <br />- 레이어에 대한 이해 및 활용
            </span>
            <span>
              <FontAwesomeIcon icon={faJs} />
              <br />
              Javascript
            </span>
            <span className="Skills-content">
              - 개발 환경 구축 및 기초 문법
              <br />
              - 이벤트에 대한 이해 및 활용
              <br />- VanillaJS(ES6) 스터디
            </span>
            <span>
              <FontAwesomeIcon icon={faReact} />
              <br />
              React
            </span>
            <span className="Skills-content">
              - 개발 환경 구축 및 기초 문법 <br />
              - JSX/Props/State 이해
              <br />- React 에 대한 꾸준한 스터디
            </span>
          </div>

          <div className="Skills-Title">
            <span>Back-end</span>
          </div>
          <div className="Skills-Icon">
            <span>
              <FontAwesomeIcon icon={faJava} />
              <br />
              Java
            </span>
            <span className="Skills-content">
              - eclipse 설치 및 기초 문법
              <br />
              - 객체지향 프로그래밍 이해
              <br />
              - 예외처리 이해
              <br />- 컬렉션 프레임워크 이해
            </span>
            <span>
              <FontAwesomeIcon icon={faFile} />
              <br />
              Spring
            </span>
            <span className="Skills-content">
              - 개발 환경 구축 및 기초 문법
              <br />- 스프링프레임워크 이해
            </span>
            <span>
              <FontAwesomeIcon icon={faDatabase} />
              <br />
              Oracle
            </span>
            <span className="Skills-content">
              - Oracle 설치 및 기초 문법
              <br />
              - 데이터베이스의 구성 요소 이해
              <br />- DDL, DML, DCL 활용
            </span>
          </div>

          <div className="Skills-Title">
            <span>Version Control</span>
          </div>
          <div className="Skills-Icon">
            <span>
              <FontAwesomeIcon icon={faGithub} />
              <br />
              GitHub
            </span>
            <span className="Skills-content">
              - 프로젝트 업로드 활용
              <br />- 버전 관리 활용
            </span>
            <span>
              <FontAwesomeIcon icon={faSourcetree} />
              <br />
              Sourcetree
            </span>
            <span className="Skills-content">
              - 프로젝트 업로드
              <br />- 버전 관리
            </span>
          </div>

          <div className="Skills-Title">
            <span>Design</span>
          </div>
          <div className="Skills-Icon">
            <span>
              <FontAwesomeIcon icon={faRectangleAd} />
              <br />
              Adobe Photoshop
            </span>
            <span className="Skills-content">
              - 자격증 보유로 구글링을 통한 활용 <br />- 기초적인 Storyboard &
              Design
            </span>
            <span>
              <FontAwesomeIcon icon={faRectangleAd} />
              <br />
              Adobe XD
            </span>
            <span className="Skills-content">
              - 기초적인 Storyboard & Design
            </span>
          </div>

          <div className="Skills-Title">
            <span>Communication</span>
          </div>
          <div className="Skills-Icon Skills-Icon-Last">
            <span>
              <FontAwesomeIcon icon={faMarker} />
              <br />
              Zeplin
            </span>
            <span className="Skills-content">- Photoshop & XD 연동</span>
            <span>
              <FontAwesomeIcon icon={faJira} />
              <br />
              Jira
            </span>
            <span className="Skills-content">- 티켓 관리 & 생성</span>
            <span>
              <FontAwesomeIcon icon={faFile} />
              <br />
              Office
            </span>
            <span className="Skills-content">
              - Word 활용 <br />
              - Powerpoint 활용 <br />- Excel 활용
            </span>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
