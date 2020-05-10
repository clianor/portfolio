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
        파이썬 및 자바스크립트 그리고 풀스택에 관심이 있습니다.
      </span>
    </div>
  );
};

export default Profile;
