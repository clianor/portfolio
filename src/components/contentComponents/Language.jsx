import React from "react";

export default () => {
  return (
    <React.Fragment>
      <h4>Language</h4>
      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"
                alt="python"
              />
            </div>
            <div className="flip-card-back">
              <p>
                <b>중급</b>
              </p>
              <p>웹크롤러 제작.</p>
              <p>사내 도서 검색 시스템 구축.</p>
              <p>
                ECC(Everything Control by Chatting)
                <br />
                프로젝트에서 챗봇을 이용한
                <br />
                구글 캘린더 컨트롤 구현.
              </p>
              <p>
                경성대학교 강인수 교수 <br /> 한국어 감정분석 연구 서포터.
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://t1.daumcdn.net/cfile/tistory/2370C63B5694884912"
                alt="javascript"
              />
            </div>
            <div className="flip-card-back">
              <p>
                <b>중급</b>
              </p>
              <p>
                ModbusTCP로 수집한 데이터 <br /> 분석 시각화.
              </p>
              <p>포트폴리오 구현.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://d1q6f0aelx0por.cloudfront.net/product-logos/81630ec2-d253-4eb2-b36c-eb54072cb8d6-golang.png"
                alt="golang"
              />
            </div>
            <div className="flip-card-back">
              <p>
                <b>중급</b>
              </p>
              <p>
                modbusTCP를 활용한
                <br /> EOCR 데이터 수집 및 처리, <br /> 전송 프로그램 제작.
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="data:image/png;base64,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"
                alt="html"
              />
            </div>
            <div className="flip-card-back">
              <p>
                <b>중급</b>
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://cdn.worldvectorlogo.com/logos/css3.svg"
                alt="css"
              />
            </div>
            <div className="flip-card-back">
              <p>
                <b>중급</b>
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="data:image/jpeg;base64,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"
                alt="C#"
              />
            </div>
            <div className="flip-card-back">
              <p>
                <b>중급</b>
              </p>
              <p>
                아주대 요양병원
                <br />
                인사&amp;회계 시스템 개발 참여.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
