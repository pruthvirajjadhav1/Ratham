import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/contentSlice";
import Chhatbot from "./Chatbot/ChatbotComp";

const Home = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.content.open);

  return (
    <>
      {open ? (
        <Chhatbot />
      ) : (
        <div className="home-wrapper">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Enter into Student Info System
          </h1>
          <section>
            <Button
              label={"Enroll now"}
              onClick={() => dispatch(setOpen(true))}
            />
          </section>
        </div>
      )}
    </>
  );
};
export default Home;
