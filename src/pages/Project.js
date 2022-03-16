import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import CommonButton from "../components/CommonButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Modal from "react-modal";
import Navbar from "../components/Navbar";

SwiperCore.use([Navigation, Pagination]);

const Project = () => {
  const navigate = useNavigate();
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIsOpen3, setModalIsOpen3] = useState(false);
  const [modalIsOpen4, setModalIsOpen4] = useState(false);
  const [modalIsOpen5, setModalIsOpen5] = useState(false);
  const [modalIsOpen6, setModalIsOpen6] = useState(false);

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

      <div className="Project">
        <h2>LimKunHee Project</h2>
        <div className="Project-ing">
          <h3>진행중인 프로젝트</h3>
          {/* Histoller */}
          <div className="card">
            <h3 className="card-header">
              Histoller (역사 컨텐츠 서비스)
              <br />
              2022.02 ~ 2022.05 예정 (2인 프로젝트)
            </h3>
            <div className="card-body">
              <span>
                한국사 및 세계사의 정보를 시대별 정리해서 한 눈에 보여주기 위해
                서비스 개발 중에 있습니다. 이 프로젝트는 기획, 마케팅, 서비스
                운영 계획, 디자인, 개발에 맞춰 절차적으로 진행중에 있으며,
                서비스 오픈 후 유저들의 피드백과 개발 업데이트 내용을 실시간으로
                서버에 반영을 확인하실 수 있습니다. <br /> <br />
              </span>
              <span>
                <b>주요 기능</b> : 한 눈에 보기 쉬운 시대별 정리, 역사에 관한
                아이콘
                <br />
                <b>Github</b> : https://github.com/histoller/histoller
                <br />
                <b>Front-end</b> : ReactJS
                <br />
                <b>Back-end</b> : NodeJS, MariaDB
                <br />
                <b>Version Control</b> : AWS(EC2), GitHub, SourceTree
                <br />
                <b>Design</b> : PhotoShop, XD
                <br />
                <b>Communication</b> : Zeplin, Jira
              </span>
            </div>

            <button className="card-btn" onClick={() => setModalIsOpen1(true)}>
              Histoller 자세히 보기
            </button>
          </div>

          <Modal isOpen={modalIsOpen1}>
            <div className="Project-content">
              <div className="Modal-Header">
                <div className="Modal-close">
                  <CommonButton
                    text={"X"}
                    type={"negative"}
                    onClick={() => setModalIsOpen1(false)}
                  />
                </div>
                <h2>Histoller</h2>
              </div>
              <Swiper
                className="banner"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/histoller/histollermain1.png`
                    }
                  />
                  <span>
                    <br />
                    Histoller Main Page 입니다. <br />
                    아이콘을 통해 컨텐츠를 추천하고 분류하며 연도와 카테고리를
                    검색하여 컨텐츠를 보여줍니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/histoller/histollermain2.png`
                    }
                  />
                  <span>
                    <br />
                    Histoller 검색 결과 페이지입니다.
                    <br />
                    해당 연도와 카테고리를 선택 시 해당 페이지가 보여지며
                    타이틀과 미리보기를 보여줍니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/histoller/histollermain3.png`
                    }
                  />
                  <span>
                    <br />
                    Histoller 검색 상세 페이지입니다.
                    <br />
                    자세히 보기 버튼을 클릭 시 나오는 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/histoller/histollermain4.png`
                    }
                  />
                  <span>
                    <br />
                    Histoller 카테고리 선택 모달입니다.
                    <br />
                    카테고리 선택(한국사, 세계사)을 하는 모달창입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/histoller/histollermain5.png`
                    }
                  />
                  <span>
                    <br />
                    Histoller 검색 페이지입니다.
                    <br />
                    단어를 입력시 자동 완성으로 4가지의 이미지와 해쉬태그를
                    보여주고 선택시 해당 상세 페이지로 넘어가는 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img-Mo">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/histoller/histollermain6.png`
                    }
                  />
                  <span>
                    <br />
                    Histoller Mobile Main 페이지입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img-Mo">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/histoller/histollermain7.png`
                    }
                  />
                  <span>
                    <br />
                    Histoller Mobile 검색 결과 페이지입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img-Mo">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/histoller/histollermain8.png`
                    }
                  />
                  <span>
                    <br />
                    Histoller Mobile 검색 상세 페이지입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img-Mo">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/histoller/histollermain9.png`
                    }
                  />
                  <span>
                    <br />
                    Histoller Mobile 검색입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img-Mo">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/histoller/histollermain10.png`
                    }
                  />
                  <span>
                    <br />
                    Histoller Mobile 메뉴입니다.
                  </span>
                </SwiperSlide>
              </Swiper>
              <span>
                한국사 및 세계사의 정보를 시대별 정리해서 한 눈에 보여주기 위해
                서비스 개발 중에 있습니다.
                <br /> 이 프로젝트는 기획, 마케팅, 서비스 운영 계획, 디자인,
                개발에 맞춰 절차적으로 진행중에 있으며,
                <br /> 서비스 오픈 후 유저들의 피드백과 개발 업데이트 내용을
                실시간으로 서버에 반영을 확인하실 수 있습니다. <br /> <br />
              </span>
              <span>
                <b>주요 기능</b> : 한 눈에 보기 쉬운 시대별 정리, 역사에 관한
                아이콘
                <br />
                <b>Github</b> : https://github.com/histoller/histoller
                <br />
                <b>Front-end</b> : ReactJS
                <br />
                <b>Back-end</b> : NodeJS, MariaDB
                <br />
                <b>Version Control</b> : AWS(EC2), GitHub, SourceTree
                <br />
                <b>Design</b> : PhotoShop, XD
                <br />
                <b>Communication</b> : Zeplin, Jira
              </span>
            </div>
          </Modal>
        </div>
      </div>

      <div className="Project Project-Ptn">
        <div className="Project-clear">
          <h3>완료 프로젝트</h3>

          {/* LKH 포토폴리오 신규 */}
          <div className="card">
            <h3 className="card-header">
              React-LimKunHhee (React-V 포토폴리오)
              <br />
              2022.02 ~ 2022.03 (1인 프로젝트)
            </h3>
            <div className="card-body">
              <span>
                기존 포토폴리오 사이트를 개선과 React의 공부 목적으로 제작하게
                되었습니다. 시멘틱 태그를 최대한 지켜가며 코딩을 진행하였고
                Single Page Application 로 진행하였습니다. <br /> <br />
              </span>
              <span>
                <b>주요 기능</b> : 한 눈에 들어오는 정보
                <br />
                <b>Github</b> : https://github.com/rg5668/resume-react
                <br />
                <b>Front-end</b> : React, CSS
                <br />
                <b>Version Control</b> : GitHub, Firebase
              </span>
            </div>

            <button className="card-btn" onClick={() => setModalIsOpen2(true)}>
              React-LimKunHhee 자세히 보기
            </button>
          </div>

          <Modal isOpen={modalIsOpen2}>
            <div className="Project-content">
              <div className="Modal-close">
                <CommonButton
                  text={"X"}
                  type={"negative"}
                  onClick={() => setModalIsOpen2(false)}
                />
              </div>
              <h2>React-LimKunHee</h2>
              <Swiper
                className="banner"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/react-limkunhee/react-limkunhee1.PNG`
                    }
                  />
                  <span>
                    <br />
                    LimKunHee Main Page 입니다. <br />
                    Swipe를 통해 MBTI를 소개하고 아이콘을 통해 컨텐츠를
                    보여줍니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/react-limkunhee/react-limkunhee2.PNG`
                    }
                  />
                  <span>
                    <br />
                    LimKunHee Aboutme Page 입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/react-limkunhee/react-limkunhee3.PNG`
                    }
                  />
                  <span>
                    <br />
                    LimKunHee Skills Page
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/react-limkunhee/react-limkunhee4.PNG`
                    }
                  />
                  <span>
                    <br />
                    LimKunHee Archiving Page
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/react-limkunhee/react-limkunhee5.PNG`
                    }
                  />
                  <span>
                    <br />
                    LimKunHee Project Page
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/react-limkunhee/react-limkunhee6.PNG`
                    }
                  />
                  <span>
                    <br />
                    LimKunHee Career Page
                  </span>
                </SwiperSlide>
              </Swiper>
              <span>
                기존 포토폴리오 사이트를 개선과 React의 공부 목적으로 제작하게
                되었습니다.
                <br /> 시멘틱 태그를 최대한 지켜가며 코딩을 진행하였고 Single
                Page Application 로 진행하였습니다. <br /> <br />
              </span>
              <span>
                <b>주요 기능</b> : 한 눈에 들어오는 정보
                <br />
                <b>Github</b> : https://github.com/rg5668/resume-react
                <br />
                <b>Front-end</b> : React, CSS
                <br />
                <b>Version Control</b> : GitHub, Firebase
              </span>
            </div>
          </Modal>

          {/* Front-Study */}
          <div className="card">
            <h3 className="card-header">
              Front-Study
              <br />
              2022.02 ~ 2022.03 (1인 프로젝트)
            </h3>
            <div className="card-body">
              <span>
                Front-End를 공부하기 위해 개발한 웹 사이트입니다.
                <br /> <br />
              </span>
              <span>
                <b>주요 기능</b> : 한 눈에 들어오는 정보
                <br />
                <b>Github</b> : https://github.com/rg5668/front-study
                <br />
                <b>Front-end</b> : HTML, CSS, JavaScript(VanillaJS)
                <br />
                <b>Version Control</b> : GitHub
              </span>
            </div>

            <button className="card-btn" onClick={() => setModalIsOpen3(true)}>
              Front-Study 자세히 보기
            </button>
          </div>

          <Modal isOpen={modalIsOpen3}>
            <div className="Project-content">
              <div className="Modal-close">
                <CommonButton
                  text={"X"}
                  type={"negative"}
                  onClick={() => setModalIsOpen3(false)}
                />
              </div>
              <h3>Front-Study</h3>

              <Swiper
                className="banner"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/front-study/front-study1.PNG`
                    }
                  />
                  <span>
                    <br />
                    Front-Study-Blog Main Page 입니다. <br />
                    VanillaJS를 공부하기 위해 구현한 페이지 입니다.
                  </span>
                </SwiperSlide>

                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/front-study/front-study2.PNG`
                    }
                  />
                  <span>
                    <br />
                    Front-Study-Blog Main Page(2) 입니다.
                  </span>
                </SwiperSlide>
              </Swiper>

              <div>
                <span>
                  Front-End를 공부하기 위해 개발한 웹 사이트입니다.
                  <br /> <br />
                </span>
                <span>
                  <b>주요 기능</b> : 한 눈에 들어오는 정보
                  <br />
                  <b>Github</b> : https://github.com/rg5668/front-study
                  <br />
                  <b>Front-end</b> : HTML, CSS, JavaScript(VanillaJS)
                  <br />
                  <b>Version Control</b> : GitHub
                </span>
              </div>
            </div>
          </Modal>

          {/* LKH ProtPolio(HTML,CSS,JS) */}
          <div className="card">
            <h3 className="card-header">
              LKH Portfolio (임건희 포토폴리오)
              <br />
              2022.02 ~ 2022.02 (1인 프로젝트)
            </h3>
            <div className="card-body">
              <span>
                포토폴리오를 색다르게 만들고 싶어 제작하게 되었으며, 이
                프로젝트는 Front-End를 공부를 하고 포토폴리오를 위해 개발한 웹
                사이트입니다. <br /> <br />
              </span>
              <span>
                <b>주요 기능</b> : 한 눈에 들어오는 정보
                <br />
                <b>Github</b> : https://github.com/rg5668/resume
                <br />
                <b>Front-end</b> : HTML, CSS, JavaScript
                <br />
                <b>Back-end</b> : Spring Boot
                <br />
                <b>Version Control</b> : GitHub, SourceTree, FileZilla
              </span>
            </div>

            <button className="card-btn" onClick={() => setModalIsOpen4(true)}>
              LKH Portfolio 자세히 보기
            </button>
          </div>

          <Modal isOpen={modalIsOpen4}>
            <div className="Project-content">
              <div className="Modal-close">
                <CommonButton
                  text={"X"}
                  type={"negative"}
                  onClick={() => setModalIsOpen4(false)}
                />
              </div>
              <h3>LKH Portfolio</h3>
              <span>
                포토폴리오를 색다르게 만들고 싶어 제작하게 되었으며, 이
                프로젝트는 Front-End를 공부를 하고 포토폴리오를 위해 개발한 웹
                사이트입니다. <br /> <br />
              </span>

              <Swiper
                className="banner"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/Portfolio/Portfolio1.PNG`
                    }
                  />
                  <span>
                    <br />
                    Portfolio Main Page 입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/Portfolio/Portfolio2.PNG`
                    }
                  />
                  <span>
                    <br />
                    Portfolio About Me Section 입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/Portfolio/Portfolio3.PNG`
                    }
                  />
                  <span>
                    <br />
                    Portfolio Skills Section 입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/Portfolio/Portfolio4.PNG`
                    }
                  />
                  <span>
                    <br />
                    Portfolio Archiving Section 입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/Portfolio/Portfolio5.PNG`
                    }
                  />
                  <span>
                    <br />
                    Portfolio Project Section 입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/Portfolio/Portfolio6.PNG`
                    }
                  />
                  <span>
                    <br />
                    Portfolio Career Section 입니다.
                  </span>
                </SwiperSlide>
              </Swiper>

              <span>
                <b>주요 기능</b> : 한 눈에 들어오는 정보
                <br />
                <b>Github</b> : https://github.com/rg5668/resume
                <br />
                <b>Front-end</b> : HTML, CSS, JavaScript
                <br />
                <b>Back-end</b> : Spring Boot
                <br />
                <b>Version Control</b> : GitHub, SourceTree, FileZilla
              </span>
            </div>
          </Modal>

          {/* FPS */}
          <div className="card">
            <h3 className="card-header">
              FPS (숙소 예약)
              <br />
              2021.05 ~ 2021.06 (4인 프로젝트)
            </h3>
            <div className="card-body">
              <span>
                코로나로 인해 국내로 여행지가 몰려 국내 여행지로만 이루워진
                에어비엔비, 야놀자, 여기어떄를 모티브로한 숙소 예약 웹사이트를
                제작한 것입니다. FPS 프로젝트는 팀장을 역활을 맡아서 진행해 본
                경험입니다. <br /> <br />
              </span>
              <span>
                <b>주요 기능</b> : 회원가입, 관리자 기능, 숙박 예약, 국내 숙소
                추천
                <br />
                <b>Github</b> : https://github.com/rg5668/Springmvc_Project
                <br />
                <b>Front-end</b> : HTML, CSS, JavaScript
                <br />
                <b>Back-end</b> : Oracle, Spring(MVC)
                <br />
                <b>Design</b> : PhotoShop
                <br />
                <b>Communication</b> : Zeplin
              </span>
            </div>

            <button className="card-btn" onClick={() => setModalIsOpen5(true)}>
              FPS 자세히 보기
            </button>
          </div>

          <Modal isOpen={modalIsOpen5}>
            <div className="Project-content">
              <div className="Modal-close">
                <CommonButton
                  text={"X"}
                  type={"negative"}
                  onClick={() => setModalIsOpen5(false)}
                />
              </div>
              <h3>FPS</h3>
              <Swiper
                className="banner"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide className="Modal-img">
                  <img src={process.env.PUBLIC_URL + `/assets/FPS/main1.PNG`} />
                  <span>
                    <br />
                    FPS Main Page(1) 입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img src={process.env.PUBLIC_URL + `/assets/FPS/main2.PNG`} />
                  <span>
                    <br />
                    FPS Main Page(2) 입니다. <br />
                    메인 화면 중 테마전, 기획전을 구성한 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img src={process.env.PUBLIC_URL + `/assets/FPS/main3.PNG`} />
                  <span>
                    <br />
                    FPS Main Page(3) 입니다. <br />
                    메인 화면 중 MD 추천(Admin 추천)을 구성한 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/FPS/spring.PNG`}
                  />
                  <span>
                    <br />
                    FPS 계절 테마 Page 입니다. <br />
                    메인 화면 중 계절 테마 중 봄과 어울리는 숙소를 추천한
                    화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img src={process.env.PUBLIC_URL + `/assets/FPS/seoul.PNG`} />
                  <span>
                    <br />
                    FPS 지역 추천 Page 입니다. <br />
                    메인 화면 중 해당 지역을 추천한 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/FPS/discount.PNG`}
                  />
                  <span>
                    <br />
                    FPS 특가 추천 Page 입니다. <br />
                    메인 화면 중 특가 숙소를 추천한 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img src={process.env.PUBLIC_URL + `/assets/FPS/md.PNG`} />
                  <span>
                    <br />
                    FPS MD 추천 Page 입니다. <br />
                    메인 화면 중 MD(관리자)가 추천한 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/FPS/adminmain.PNG`}
                  />
                  <span>
                    <br />
                    FPS Admin Main Page 입니다. <br />
                    메인 화면 관리자 메뉴를 구성한 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/FPS/addroom.PNG`}
                  />
                  <span>
                    <br />
                    FPS Admin 숙소 등록 Page 입니다. <br />
                    숙소 등록 화면을 구성한 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/FPS/addsubroom.PNG`}
                  />
                  <span>
                    <br />
                    FPS Admin 객실 관리 Page 입니다. <br />
                    등록 된 객실을 검색, 등록, 수정, 삭제를 구성한 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/FPS/rommmodify.PNG`}
                  />
                  <span>
                    <br />
                    FPS Admin 객실 수정 Page 입니다. <br />
                    등록 된 객실을 수정하는 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/FPS/reservation.PNG`}
                  />
                  <span>
                    <br />
                    FPS 숙소 예약 Page 입니다. <br />
                    숙소 예약을 할 수 있는 상세 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/FPS/roomcare.PNG`}
                  />
                  <span>
                    <br />
                    FPS Admin 숙소 관리 Page 입니다. <br />
                    등록 된 숙소를 검색, 등록, 수정, 삭제를 구성한 화면입니다.
                  </span>
                </SwiperSlide>
                <SwiperSlide className="Modal-img">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/FPS/memberlist.PNG`}
                  />
                  <span>
                    <br />
                    가입 된 회원의 정보, 수정, 탈퇴 기능을 구성한 화면입니다.
                  </span>
                </SwiperSlide>
              </Swiper>

              <span>
                코로나로 인해 국내로 여행지가 몰려 국내 여행지로만 이루워진
                에어비엔비, 야놀자, 여기어떄를 모티브로한 숙소 예약 웹사이트를
                제작한 것입니다. FPS 프로젝트는 팀장을 역활을 맡아서 진행해 본
                경험입니다. <br /> <br />
              </span>
              <span>
                <b>주요 기능</b> : 회원가입, 관리자 기능, 숙박 예약, 국내 숙소
                추천
                <br />
                <b>Github</b> : https://github.com/rg5668/Springmvc_Project
                <br />
                <b>Front-end</b> : HTML, CSS, JavaScript
                <br />
                <b>Back-end</b> : Oracle, Spring(MVC)
                <br />
                <b>Design</b> : PhotoShop
                <br />
                <b>Communication</b> : Zeplin
              </span>
            </div>
          </Modal>

          {/* 4PROJECT (E-Commerce) */}
          <div className="card">
            <h3 className="card-header">
              4PROJECT (E-Commerce)
              <br />
              2021.04 ~ 2021.05 (4인 프로젝트)
            </h3>
            <div className="card-body">
              <span>
                쿠팡, 위메프를 모티브로한 E-Commerce 웹사이트를 제작한 것입니다.
                처음 웹 사이트를 팀원들과 개발해 본 경험입니다. <br /> <br />
              </span>
              <span>
                <b>주요 기능</b> : 회원가입, 관리자 기능, 상품 카테고리 정렬
                추천
                <br />
                <b>Github</b> : https://github.com/rg5668/JSP_Project
                <br />
                <b>Front-end</b> : HTML, CSS, JavaScript
                <br />
                <b>Back-end</b> : Oracle, JSP
                <br />
                <b>Design</b> : PhotoShop
              </span>
            </div>

            <button className="card-btn" onClick={() => setModalIsOpen6(true)}>
              4PROJECT 자세히 보기
            </button>
          </div>

          <Modal isOpen={modalIsOpen6}>
            <div className="Project-content">
              <div className="Modal-close">
                <CommonButton
                  text={"X"}
                  type={"negative"}
                  onClick={() => setModalIsOpen6(false)}
                />
              </div>
              <h3>4PROJECT</h3>
              <Swiper
                className="banner"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/4project/4projectmain1.png`
                    }
                  />
                  <span>
                    <br />
                    4Project Main Page 입니다. <br />
                    좌측 카테고리의 분류와 상품 상세를 보여줄 수 있는
                    화면입니다.
                  </span>
                </SwiperSlide>

                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/4project/4projectmain2.png`
                    }
                  />
                  <span>
                    <br />
                    4Project Admin Main Page 입니다. <br />
                    상품을 등록, 수정, 삭제를 할 수 있는 화면입니다.
                  </span>
                </SwiperSlide>

                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/4project/4projectmain3.png`
                    }
                  />
                  <span>
                    <br />
                    4Project 로그인 Page 입니다. <br />
                    회원가입 및 로그인을 할 수 있는 화면입니다.
                  </span>
                </SwiperSlide>

                <SwiperSlide className="Modal-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/4project/4projectmain4.png`
                    }
                  />
                  <span>
                    <br />
                    4Project Admin (고객 정보 수정) Page 입니다. <br />
                    고객 정보를 수정 할 수 있는 화면입니다.
                  </span>
                </SwiperSlide>
              </Swiper>
              <span>
                쿠팡, 위메프를 모티브로한 E-Commerce 웹사이트를 제작한 것입니다.
                처음 웹 사이트를 팀원들과 개발해 본 경험입니다. <br /> <br />
              </span>
              <span>
                <b>주요 기능</b> : 회원가입, 관리자 기능, 상품 카테고리 정렬
                추천
                <br />
                <b>Github</b> : https://github.com/rg5668/JSP_Project
                <br />
                <b>Front-end</b> : HTML, CSS, JavaScript
                <br />
                <b>Back-end</b> : Oracle, JSP
                <br />
                <b>Design</b> : PhotoShop
              </span>
            </div>
          </Modal>
        </div>
        {/* end */}
      </div>

      <Footer />
    </div>
  );
};

export default Project;
