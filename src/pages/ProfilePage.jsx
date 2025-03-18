import React from "react";
import Menu from "../component/Menu";
import { useParams } from "react-router-dom";
const ProfilePage = () => {
  let { facebookId, youtubeID } = useParams();
  return (
    <>
      <Menu />
      <div>
        <p>Youtube = {facebookId}</p>
        <p>Facebook = {youtubeID}</p>
        <h1>Profile</h1>
      </div>
    </>
  );
};

export default ProfilePage;
