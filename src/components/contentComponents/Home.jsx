import React from 'react';
import './Home.css';
import { faHome, faEnvelope, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scrollspy from "../Scrollspy";
import profile from '../../images/homeProfile.jpg';

const Home = () => {
    return (
        <div className="Home">
            <Scrollspy anchor="home" />
            <div className="wrapper">
                <div className="leftBox">
                    <span className="name">김덕현</span>
                    <span className="subtitle">Junior Software Engineer</span>
                    <span className="info">
                        <span><FontAwesomeIcon icon={faHome} /> <span>부산광역시 강서구</span></span>
                        <span><FontAwesomeIcon icon={faSchool} /> 경성대학교</span>
                        <span><FontAwesomeIcon icon={faEnvelope} /> ejrgus9416@naver.com</span>
                    </span>
                    <span className="contents">
                        <p>
                            대학에 들어와 처음 프로그래밍을 접하고 무언가를 만들어보면서 재미를 느껴 개발자를 꿈꾸게 되었습니다.
                            파이썬과 자바스크립트를 자연스레 접하게되면서 두 언어의 무한한 가능성과 매력을 느끼게 되었고 풀스택 개발자가 되고자 노력하고 있습니다.
                        </p>
                        <p>
                            저는 누구에게나 인정받을 수 있는 개발자가 되고자 합니다.
                            항상 스스로 성장하고 어제보다 더 성장하고자 합니다.
                        </p>
                    </span>
                    <ul>
                        <li>前. 경성대 DB Lab 소속</li>
                        <li>구름 DevelUP 1기 멤버</li>
                        <li>아이티공간 사원</li>
                    </ul>
                </div>
                <div className="rightBox">
                    <img src={profile} alt="profile"/>
                </div>
            </div>
        </div>
    );
};

export default Home;