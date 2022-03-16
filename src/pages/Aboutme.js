import { useNavigate } from "react-router-dom";
import CommonButton from "../components/CommonButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Aboutme = () => {
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
      <div className="Aboutme">
        <h2>LimKunHee Resume</h2>

        <section>
          <h3>인적사항</h3>
          <div className="Aboutme-Content-Table">
            <table>
              <tbody>
                <tr>
                  <td rowSpan={2}>
                    <img src={process.env.PUBLIC_URL + `/assets/myimg.jpg`} />
                  </td>
                  <td>
                    <b>이름 : </b>임건희
                  </td>
                  <td>
                    <b>생년 : </b> 1996 년 (27세)
                  </td>
                  <td>
                    <b>성별 : </b>남 (군필)
                  </td>
                </tr>

                <tr>
                  <td>
                    <b>이메일 : </b>rg4093@naver.com
                  </td>
                  <td>
                    <b>연락처 : </b>010-4093-5668
                  </td>
                  <td>
                    <b>주소 : </b>경기도 성남시 중원구 금빛로
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3>학력</h3>
          <table className="Aboutme-Content-Table">
            <thead>
              <tr>
                <th>재학기간</th>
                <th>구분</th>
                <th>학교명</th>
                <th>전공</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2015.03 ~ 2021.02</td>
                <td>졸업</td>
                <td>신구대학교</td>
                <td>모바일 IT</td>
              </tr>

              <tr>
                <td>2012.03 ~ 2015.02</td>
                <td>졸업</td>
                <td>성남방송고등학교</td>
                <td>전문계 (무대건축과)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3>경력</h3>
          <table className="Aboutme-Content-Table">
            <thead>
              <tr>
                <th>근무기간</th>
                <th>회사명</th>
                <th>부서/직급/직책</th>
                <th>지역</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2021.09 ~ 2022.01</td>
                <td>와이즈커머스</td>
                <td>개발 / 사원 (매니저)</td>
                <td>서울 강남</td>
              </tr>
              <tr>
                <td colSpan={4} style={{ textAlign: "left" }}>
                  담당업무 : Front-end 개발을 담당을 했고 QA 에 역할 등 기타
                  업무까지 함께 담당 했습니다.
                  <br />
                  퇴사사유 : 개인 사정
                  <br />
                  프로젝트 : 젠틀몬스터 리뉴얼 <br />
                  2021.09~2022.01(5 개월)
                  <br />
                  <br />백 오피스의 전반적인 관리 및 각종 기능 추가/개선/정리
                  <br />- 이미지 AWS S3 업로드 방식의 통일 및 최적화 <br />-
                  불필요한 파일/코드 정리 및 코드 작성 방식 통일성 확보 <br />
                  <br />
                  개발 업무 외 기타 업무 담당 <br />- IT 팀 업무 관련 문서
                  총정리
                  <br />- QA 문서 작성
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3>대외활동</h3>
          <table className="Aboutme-Content-Table">
            <thead>
              <tr>
                <th>기간</th>
                <th>구분</th>
                <th>기관/장소</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2020.12.28 ~ 2021.06.09</td>
                <td>교육이수내역</td>
                <td>케이아이씨캠퍼스</td>
                <td>JAVA/spring 기반 웹개발</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3>자격증/어학/수상내역</h3>
          <table className="Aboutme-Content-Table">
            <thead>
              <tr>
                <th>취득일/수상일</th>
                <th>구분</th>
                <th>자격/어학/수상명</th>
                <th>발행처/기관/언어</th>
                <th>합격/점수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2013.04</td>
                <td>자격증</td>
                <td>정보기술자격(ITQ) 아래한글 A 등급</td>
                <td>한국생산성본부(KPC)</td>
                <td>최종합격</td>
              </tr>

              <tr>
                <td>2013.11</td>
                <td>자격증</td>
                <td>정보기술자격(ITQ)한글파워포인트 A 등급</td>
                <td>한국생산성본부(KPC)</td>
                <td>최종합격</td>
              </tr>

              <tr>
                <td>2014.06</td>
                <td>자격증</td>
                <td>GTQ 포토샵 2 급</td>
                <td>한국생산성본부(KPC)</td>
                <td>최종합격</td>
              </tr>

              <tr>
                <td>2021.03</td>
                <td>자격증</td>
                <td>정보처리산업기사</td>
                <td>한국산업인력공단</td>
                <td>필기합격</td>
              </tr>

              <tr>
                <td>2021.06</td>
                <td>수상내역</td>
                <td>
                  AI 활용을 위한 자바 머신러닝/딥러닝 개발자 양성과정(우수상)
                </td>
                <td>케이아이씨캠퍼스학원</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3>포트폴리오/기타문서</h3>
          <table className="Aboutme-Content-Table">
            <thead>
              <tr>
                <th>파일 구분</th>
                <th>파일명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PortPolio</td>
                <td>
                  - 포토폴리오를 색다르게 만들고 싶어 제작하게 되었으며, 이
                  프로젝트는 Front-End를 공부를 하고 포토폴리오를 위해 개발한 웹
                  사이트입니다. <br />- 기존에 있었던 포토폴리오 사이트를 SPA로
                  구성하였으며, Sementic tag를 최대한 지켜가며 코딩을
                  진행하였습니다.
                </td>
              </tr>
              <tr>
                <td>GitHub Link</td>
                <td>
                  <a href="https://github.com/rg5668" target={"_blank"}>
                    - https://github.com/rg5668
                  </a>
                </td>
              </tr>
              <tr>
                <td>Blog Link</td>
                <td>
                  <a href="https://rg4093.tistory.com" target={"_blank"}>
                    - https://rg4093.tistory.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3>자기소개서</h3>
          <div className="Aboutme-Content">
            <div>
              <b>[전체적인 자기소개]</b> <br />
              <br />
              저의 MBTI 는 INTP 입니다. 첫 번째로 사람들의 생각과 저의 생각이
              다르면 ‘왜 이렇게 생각했을까?’에 대해 고민을 합니다. 두 번째로
              저는 공상과 상상으로 새롭고 창의적인 아이디어가 풍부합니다. 세
              번째로 빠르고 효율적인 방법으로 문제를 해결하려고 노력을 합니다.
              네 번째는 새로운 조직에서도 새로운 사람들과 잘 어 울려 지냅니다.
            </div>
            <div>
              <b>[성장과정]</b> <br />
              <br />
              저는 의류 브랜드 CEO 가 꿈이었습니다. 어렸을 때부터 트렌드에
              민감했던 저는 자연스럽게 패션을 좋아하게 되어 패션디자인학과에
              진학했습니다. 특히 브랜드 비즈니스를 배우고 싶은 마음이 컸고,
              백화점 의류 브랜드 온라인 판매 직무를 2 년 6 개월간 수행하기도
              했습니다.
              <br />
              <br /> 당시 해당 브랜드는 온라인 판매 플랫폼으로서 초기 진입
              단계였던 스마트 스토어 시스템을 도입했습니다. 저에겐 생소했던
              시스템이었지만, 3 개월 만에 2 배 이상의 매출을 달성하는 모습을
              보며 처음으로 ‘패션’보다 ‘시스템’이 궁 금해졌습니다. “그 시스템은
              어떻게 만들어지는 걸까?”
              <br />
              <br /> 모든 시스템은 ‘코딩’으로 이루어진다는 사실을 IT 학과
              친구에게서 듣고 처음으로 코딩에 관심을 가지게 되었습니 다. 이후 IT
              학과로 전과를 했고, 남들보다 늦은 시작이었지만 누구보다 많은
              스킬을 배우기 위해 대학 졸업과 동시 에 코딩 학원에 다니며
              공부했습니다. 옷 밖에 모르는 ‘컴맹’이었던 제 모습은 어느새
              사용자에게 편리한 서비스를 개발하는 ‘개발자’를 꿈꾸게 되었습니다.
            </div>
            <div>
              <b>[성격 장단점]</b> <br />
              <br />제 장점은 1)원활한 의사소통과 2)강한 결단력 및 실천력입니다.
              <br />
              <br />
              1) 저는 팀원들과 자유롭게 의견을 교환하며 활발히 의사소통합니다.
              특정 사안이 있을 때 제 의견이나 판단에 대 한 동료들의 생각을
              물어보고 그들의 피드백을 개방적으로 수용합니다. 나아가 동일한
              사안을 두고 각 팀원들의 의 견은 어떠한지 자유롭게 토론합니다.
              이처럼 활발한 의사소통을 통해 사고의 범위를 확장해 나가며 새로운
              집단에 서도 빠르고 쉽게 적응합니다. <br />
              <br />
              2) 또한 저는 강한 결단력과 실천력으로 빠르게 의사결정을 하고,
              결정된 사안에 대해서는 망설임 없이 실행에 옮 깁니다. 의사결정에
              있어 모든 요소를 고려하는 것은 판단의 객관성을 흐리고 업무 속도를
              늦춘다고 생각합니다. 이에 저는 다양한 요소들의 우선순위를 먼저
              구분하고, 가장 중요한 것을 기준으로 설정합니다. 예를 들어, 특정 시
              스템 개발 시 가장 중요한 요소를 ‘사용자 편의성’으로 판단했다면,
              이를 기준으로 어떻게 시스템을 개발해야 할지 객관적인 판단을
              실시합니다. 나아가 결정된 내용에 대해서는 확신을 가지고 곧바로
              실행에 옮겨 신속하게 결과물 을 도출 해냅니다. <br />
              <br />
              다만 신속하게 업무를 처리하다보니 간혹 완성도가 떨어진다는 단점이
              있었습니다. 이러한 단점을 극복하기 위해 스스로 업무를 더욱
              체계화하였습니다. 우선 ‘1 차’ 단계에서는 객관적인 판단 하에
              신속하게 업무를 처리했습니다. ‘2 차’ 단계에서는 동료들에게 1 차
              결과물에 대한 피드백을 요청했습니다. ‘최종’ 단계에서는 동료들의
              피드백을 적 극 활용하여 결과물을 보완하고 완성도를 높였습니다.
              이처럼 체계적으로 업무를 수행함으로써 단점을 극복하고 신속하고
              완벽하게 결과물을 도출해낼 수 있었습니다.
            </div>
            <div>
              <b>[학교생활]</b> <br /> <br />
              고등학교 졸업 후 수시로 내신에 맞는 전공을 정하다 보니 IT 분야가
              아닌 패션디자인으로 전공을 시작했습니다. 전 역 후 진로에 고민을
              안고 학비를 벌기 위해 아르바이트를 하는 중, 유망한 직종을
              검색해보면서 IT 분야에 대해 알게 되었습니다. 마침 친구가 모바일 IT
              전공이라서 IT 분야의 진로나, 취업, 비전 등에 대해서 자세히 알아볼
              수 있었 습니다. 그 길로 저는 모바일 IT 로 전과를 신청했습니다.
              <br />
              <br /> 남보다 늦게 시작한 만큼 컴퓨터 프로그래밍은 생각보다 쉽지
              않았지만 저는 포기하지 않았습니다. 친구들에게 도 움을 많이 받기도
              하고 어려운 만큼 계속 붙잡은 끝에 무난한 성적으로 졸업할 수
              있었습니다.
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutme;
