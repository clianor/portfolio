import React from "react";
import "./Home.css";
import {
  faHome,
  faEnvelope,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scrollspy from "../Scrollspy";
import profile from "../../images/homeProfile.jpg";

const Home = () => {
  return (
    <div className="Home">
      <Scrollspy anchor="home" />
      <div className="wrapper">
        <div className="leftBox">
          <span className="name">김덕현</span>
          <span className="subtitle">Junior Software Engineer</span>
          <span className="info">
            <span>
              <FontAwesomeIcon icon={faHome} /> <span>부산광역시 강서구</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faSchool} /> 경성대학교
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> ejrgus9416@naver.com
            </span>
          </span>
          <span className="contents">
            <p>
              대학에 들어와 처음 프로그래밍을 접하고 무언가를 만들어보면서
              재미를 느껴 개발자를 꿈꾸게 되었습니다. <br />
            </p>
            <p>
              저는 누구에게나 인정받을 수 있는 개발자가 되기를 희망하며 <br />
              항상 지금보다 성장하기를 바랍니다.
            </p>
            <p>
              최근에는 풀스택과 데브옵스에 관심이 많으며 제가 얻은 지식을
              다른이들과 나누기를 희망합니다.
            </p>
          </span>
          <ul>
            <li>前. 경성대 DB Lab 소속</li>
            <li>前. 구름 DevelUP 1기 멤버</li>
            <li>前. 아이티공간 사원</li>
            <li>前. D&amp;D 2기 멤버</li>
            <li>Ghtech 사원</li>
          </ul>
        </div>
        <div className="rightBox">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
