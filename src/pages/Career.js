import { useNavigate } from "react-router-dom";

import CommonButton from "../components/CommonButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Career = () => {
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
      <div className="Career">
        <h2>LimKunHee Career</h2>
        <div className="Career-1">
          <div className="Career-Title-Date">
            <h3>(주)와이즈커머스</h3>
            <span>2021.09 ~ 2022.01</span>
          </div>

          <div className="Creer-Border">
            <span>Managet (Front DevOps)</span>
            <span>퇴사</span>
          </div>

          <div>
            <span>
              <br />
              와이즈커머스는 마젠토 솔루션을 기반으로 개발하는
              전자상거래(쇼핑몰)입니다.
              <br />
              기본적으로 Gentlemonster의 Front-end 개발을 담당을 했고 QA에 역할
              등 기타 업무까지 함께 담당 했습니다.
              <br />
              <br />
            </span>
          </div>

          <div>
            <span>
              백 오피스의 전반적인 관리 및 각종 기능 추가/개선/정리
              <br />
              - 이미지 AWS S3 업로드 방식의 통일 및 최적화
              <br />
              - 불필요한 파일/코드 정리 및 코드 작성 방식 통일성 확보
              <br />
              <br />
              개발 업무 외 기타 업무 담당
              <br />
              - IT팀 업무 관련 문서 총정리
              <br />- QA 문서 작성
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
