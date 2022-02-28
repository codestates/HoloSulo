import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Delete = ({ userInfoHandler, setIsLogin }) => {
  // 회원탈퇴 상태 state
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  const handleComplete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/users/id:`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.message);
        const resMsg = res.data.message;
        if (resMsg === "success delete") {
          setIsComplete(true);
          setTimeout(() => {
            setIsComplete(false);
            setIsLogin(false);
            navigate("/");
            // console.log(isComplete);
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default Delete;
