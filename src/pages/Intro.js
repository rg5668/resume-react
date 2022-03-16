import Dots from "../components/Dots";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CommonButton from "../components/CommonButton";

const DIVIDER_HEIGHT = 5;

const Intro = () => {
  // outer 스크롤 제어를 위해 reference를 사용합니다.
  // 리액의 useRef 훅 호출.
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  const navigate = useNavigate();

  const wheelHandler = (e) => {
    e.preventDefault();
    const { deltaY } = e;
    const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
    const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

    if (deltaY > 0) {
      // 현재 1 페이지
      //top이 0보다 크거나 페이지 100vh가 top보다 크거나
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        //현재 2페이지
        outerDivRef.current.scrollTo({
          top: pageHeight + DIVIDER_HEIGHT,
          left: 0,
        });
        setScrollIndex(2);
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        //현재 3페이지
        outerDivRef.current.scrollTo({
          top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
          left: 0,
        });
        setScrollIndex(3);
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
        //현재 4페이지
        outerDivRef.current.scrollTo({
          top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
          left: 0,
        });
        setScrollIndex(4);
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
        //현재 5페이지
        outerDivRef.current.scrollTo({
          top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
          left: 0,
        });
        setScrollIndex(5);
      } else {
        // 현재 6페이지
        outerDivRef.current.scrollTo({
          top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
          left: 0,
        });
        setScrollIndex(5);
      }
    } else {
      // 스크롤 올릴 때
      // 1페이지 top : 0, 2페이지 top 100vh+5, 3페이지 top 200vh+10
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        //현재 1페이지
        outerDivRef.current.scrollTo({
          top: 0,
          left: 0,
        });
        setScrollIndex(1);
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        //현재 2페이지
        outerDivRef.current.scrollTo({
          top: 0,
          left: 0,
        });
        setScrollIndex(1);
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
        // 현재 3페이지
        outerDivRef.current.scrollTo({
          // 2페이지 top 100vh+5
          top: pageHeight + DIVIDER_HEIGHT,
          left: 0,
        });
        setScrollIndex(2);
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
        // 현재 4페이지
        outerDivRef.current.scrollTo({
          // 3페이지 top 200vh+10
          top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
          left: 0,
        });
        setScrollIndex(3);
      } else {
        // 현재 5페이지
        outerDivRef.current.scrollTo({
          top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
          left: 0,
        });
        setScrollIndex(4);
      }
    }
  };

  useEffect(() => {
    let timer;
    const outerDivRefCurrent = outerDivRef.current;

    clearTimeout(timer);
    timer = setTimeout(() => {
      outerDivRefCurrent.addEventListener("wheel", wheelHandler);
      return () => {
        outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      };
    }, 1000);
  });

  return (
    <div ref={outerDivRef} className="outer">
      <Header rightChild={<Navbar />} leftChild={<CommonButton text={"<"} />} />
      <Dots scrollIndex={scrollIndex} />

      <div className="Full-inner bg-yellow">
        <a target={"_self"}></a>
        <div className="Intro">
          <span>
            <span className="Main-Title-Font">안녕하세요.</span>
            <span className="Main-Title-Sub-Font">
              <br />
              임건희 포토폴리오 웹 사이트입니다.
            </span>
            <div className="Intro-btn">
              <CommonButton
                text={"메인 페이지로 가기"}
                type={"home_detail"}
                onClick={() => navigate("/main")}
              />
            </div>
          </span>
        </div>
      </div>
      <div className="divider" />

      <div className="Full-inner bg-blue">
        <div className="Intro-Container">
          <span>
            <span className="Title-Font">인적사항</span>
            <span className="Sub-Font">
              <br />
              이름 : <span className="Sub-Font-1">임건희</span>
              <br />
              생년 : <span className="Sub-Font-1">1996 년 (27세)</span>
              <br />
              성별 : <span className="Sub-Font-1">남</span>
              <br />
              이메일 : <span className="Sub-Font-1">rg4093@naver.com</span>
              <br />
              연락처 : <span className="Sub-Font-1">010-4093-5668</span>
              <br />
              주소 :
              <span className="Sub-Font-1">경기도 성남시 중원구 금빛로</span>
            </span>
          </span>

          <span>
            <img src={process.env.PUBLIC_URL + `/assets/myimg.jpg`} />
            <br />
            <div className="Intro-content-btn">
              <CommonButton
                text={"이력서 바로보기"}
                type={"detail"}
                onClick={() => navigate("/aboutme")}
              />
            </div>
            <div className="Intro-content">or</div>
            <div className="Intro-content-btn">
              <a
                href={process.env.PUBLIC_URL + `/assets/Limkunhee_resume.pdf`}
                target="_blank"
              >
                <CommonButton text={"PDF로 바로보기"} type={"detail"} />
              </a>
            </div>
          </span>
        </div>
      </div>
      <div className="divider" />

      <div className="Full-inner bg-blue">
        <div className="Intro-Container">
          <span className="Sub-Font">
            <span className="Title-Font">사용가능 & 사용해본 스킬</span>
            <br />
            Font-End :
            <span className="Sub-Font-1"> HTML, CSS, Javascript, React</span>
            <br />
            Back-End : <span className="Sub-Font-1"> Java, Spring, Oracle</span>
            <br />
            Version Control :
            <span className="Sub-Font-1"> GitHub, Sourcetree</span>
            <br />
            Design : <span className="Sub-Font-1"> Adobe Photoshop, XD</span>
            <br />
            Communication :
            <span className="Sub-Font-1"> Zeplin, Jira, Office</span>
            <div className="Intro-btn">
              <CommonButton
                text={"사용 스킬 이해도 보러가기"}
                type={"detail"}
                onClick={() => navigate("/skills")}
              />
            </div>
          </span>
        </div>
      </div>
      <div className="divider" />

      <div className="Full-inner bg-blue">
        <div className="Intro-Container">
          <span className="Sub-Font">
            <span className="Title-Font">깃 저장소 & 블로그</span>
            <br />
            GitHub :
            <span className="Sub-Font-1">
              <a href="https://github.com/rg5668" target={"_blank"}>
                https://github.com/rg5668
              </a>
            </span>
            <br />
            Tisoty :
            <span className="Sub-Font-1">
              <a href="https://rg4093.tistory.com" target={"_blank"}>
                https://rg4093.tistory.com
              </a>
            </span>
          </span>
        </div>
      </div>
      <div className="divider" />

      <div className="Full-inner bg-blue">
        <div className="Intro-Container">
          <span className="Sub-Font">
            <span className="Title-Font">Toy Project</span>
            <div className="Intro-btn">
              <CommonButton
                text={"진행한 프로젝트 보러가기"}
                type={"detail"}
                onClick={() => navigate("/project")}
              />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
