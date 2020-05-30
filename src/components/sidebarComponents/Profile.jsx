import React from "react";
import "./Profile.css";
import profile from "../../images/profile.jpg";

const Profile = () => {
  return (
    <div className="Profile">
      <img src={profile} alt="profile" />
      <span>
        항상 성장하고픈 개발자 <b>김덕현</b>입니다.
        <br />
        최근엔 자바스크립트와 풀스택과 데브옵스에 관심이 많습니다.
      </span>
    </div>
  );
};

export default Profile;
