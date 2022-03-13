import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faListCheck,
  faPersonRunning,
  faUser,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

import CommonButton from "../components/CommonButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="inner">
      <Header
        rightChild={
          <CommonButton
            text={">"}
            type={"positive"}
            onClick={() => navigate(-1)}
          />
        }
        leftChild={<CommonButton />}
      />
      <div className="Main">
        <article>
          <section>
            <div>
              <Swiper
                className="banner"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }} // 추가
              >
                <SwiperSlide className="Swiper-back1">
                  저의 MBTI는 INTP입니다.
                </SwiperSlide>
                <SwiperSlide className="Swiper-back2">
                  🤔 ‘왜 이렇게 생각했을까?’에 대해 고민을 많이 합니다.
                </SwiperSlide>
                <SwiperSlide className="Swiper-back3">
                  🧐 새롭고 창의적인 아이디어가 풍부합니다.
                </SwiperSlide>
                <SwiperSlide className="Swiper-back4">
                  🐎 빠르고 효율적인 방법으로 문제를 해결합니다.
                </SwiperSlide>
                <SwiperSlide className="Swiper-back5">
                  🙌 새로운 조직에서도 사람들과 잘 어울려 지냅니다.
                </SwiperSlide>
              </Swiper>
            </div>
          </section>

          <section>
            <div className="Icon-Title">
              <span>ICON </span>
              <span>(아이콘을 클릭하면 해당 페이지로 이동합니다.)</span>
            </div>
            <div className="Icon-Content">
              <div onClick={() => navigate("/aboutme")}>
                <span>
                  <FontAwesomeIcon icon={faUser} className="Aboutme-Icon" />
                </span>
                <span>About Me</span>
              </div>
              <div onClick={() => navigate("/skills")}>
                <span>
                  <FontAwesomeIcon icon={faBook} className="Skills-Icon" />
                </span>
                <span>Skills</span>
              </div>
              <div onClick={() => navigate("/archiving")}>
                <span>
                  <FontAwesomeIcon icon={faFolder} className="Archiving-Icon" />
                </span>
                <span>Archiving</span>
              </div>
              <div onClick={() => navigate("/project")}>
                <span>
                  <FontAwesomeIcon
                    icon={faListCheck}
                    className="Project-Icon"
                  />
                </span>
                <span>Project</span>
              </div>
              <div onClick={() => navigate("/career")}>
                <span>
                  <FontAwesomeIcon
                    icon={faPersonRunning}
                    className="Career-Icon"
                  />
                </span>
                <span>Career</span>
              </div>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
