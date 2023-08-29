import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StudentInfo = () => {
  const info = useSelector((state) => state.content);

  console.log(info);

  return (
    <>
      {info.name !== "" && info.age !== 0 && (
        <div
          className="home-wrapper"
          style={{
            fontWeight: "600",
            padding: "1rem",
          }}
        >
          Your name {info.name} aged {info.age} has been added to student
          system. You may now exit.
        </div>
      )}

      <br />
      <div
      className="home-wrapper"
      style={{
        fontWeight: "600",
        padding: "1rem",
      }}
    >
    Please Enroll!
    <Link
        style={{
          fontWeight: "400",
          textDecoration: "none",
        }}
        className="redirect-link"
        to={"/"}
      >
        Redirect to Home page
      </Link>
    </div>
      
    </>
  );
};

export default StudentInfo;
