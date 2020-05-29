import React from "react";
import Scrollspy from "../Scrollspy";
import "./Skills.css";
import Language from "./Language";
import Framework from "./Framework";
import Tools from "./Tools";

const lang_items = [
  {
    lang: "Python",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
    grade: "중급",
    proj_list: [
      "웹크롤러 제작.",
      "사내 도서 검색 시스템 구축.",
      "ECC(Everything Control by Chatting) 프로젝트에서 챗봇을 이용한 구글 캘린더 컨트롤 구현.",
      "경성대학교 강인수 교수 한국어 감정분석 연구 서포터.",
    ],
  },
  {
    lang: "Javascript",
    url: "https://t1.daumcdn.net/cfile/tistory/2370C63B5694884912",
    grade: "중급",
    proj_list: ["ModbusTCP로 수집한 데이터 분석 시각화.", "포트폴리오 구현."],
  },
  {
    lang: "Golang",
    url:
      "https://d1q6f0aelx0por.cloudfront.net/product-logos/81630ec2-d253-4eb2-b36c-eb54072cb8d6-golang.png",
    grade: "중급",
    proj_list: [
      "modbusTCP를 활용한 EOCR 데이터 수집 및 처리, 전송 프로그램 제작.",
    ],
  },
  {
    lang: "HTML",
    url:
      "data:image/png;base64,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",
    grade: "중급",
    proj_list: [],
  },
  {
    lang: "CSS",
    url: "https://cdn.worldvectorlogo.com/logos/css3.svg",
    grade: "중급",
    proj_list: [],
  },
  {
    lang: "C#",
    url:
      "data:image/jpeg;base64,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",
    grade: "중급",
    proj_list: ["아주대 요양병원 인사&회계 시스템 개발 참여."],
  },
];

const frm_items = [
  {
    lang: "Django",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw84DW4JVa2eAMTcWhOj9-9JYji_-C1_k9vrtRmCcmbEbHoYTP",
    grade: "중급",
    proj_list: [
      "사내 도서 검색 시스템 구축.",
      "부산 주공 작업지시서 슬라이드 웹 구축.",
    ],
  },
  {
    lang: "Express",
    url:
      "data:image/jpeg;base64,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",
    grade: "중급",
    proj_list: [],
  },
  {
    lang: "React",
    url:
      "data:image/png;base64,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",
    grade: "중급",
    proj_list: ["ModbusTCP로 수집한 데이터 분석 및 시각화", "포트폴리오 구현"],
  },
  {
    lang: "Devexpress",
    url:
      "data:image/png;base64,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",
    grade: "중급",
    proj_list: ["아주대 요양병원 인사, 급여, 회계 시스템 개발 참여"],
  },
];

const tls_items = [
  {
    lang: "Git",
    url:
      "data:image/jpeg;base64,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",
    grade: "중급",
    proj_list: [],
  },
  {
    lang: "Docker",
    url: "https://logo-logos.com/wp-content/uploads/2016/10/Docker_logo.png",
    grade: "중급",
    proj_list: [
      "라즈베리 파이용 MySQL 이미지 배포",
      "라즈베리 파이용 MACHBASE 이미지 배포",
    ],
  },
];

const Skills = () => {
  return (
    <div className="Skills">
      <Scrollspy anchor="skills" />
      <h2>Skills</h2>

      <Language items={lang_items} />
      <Framework items={frm_items} />
      <Tools items={tls_items} />
    </div>
  );
};

export default Skills;
