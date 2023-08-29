import Chatbot from "react-chatbot-kit";

import config from "./config.js";

import ActionProvider from "./ActionProvider.jsx";
import MessageParser from "./MessageParser.jsx";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setOpen } from "../../redux/contentSlice.js";

const Chhatbot = () => {
  const dispatch = useDispatch();

  const saveMessages = (messages, HTMLString) => {
    console.log("Save messages-->",messages);
    console.log("Save messages-->",HTMLString);

    localStorage.setItem("chat_messages", JSON.stringify(HTMLString));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

  return (
    <>
      <div className="home-wrapper">
        <div className="arrow-wrapper">
          <IoMdArrowBack
            style={{
              cursor: "pointer",
              height: "1.5rem",
              width: "1.5rem",
            }}
            onClick={() => dispatch(setOpen(false))}
          />
        </div>

        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}
          messageParser={MessageParser}
          saveMessages={saveMessages}
        />
      </div>
    </>
  );
};

export default Chhatbot;
