import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Overview from "./widgets/Overview/Overview";
import CustomMessage from "./components/CustomMessage";
import EndMessage from "./widgets/EndMessage/EndMessage";

import CoBotAvatar from "../CoBotAvatar";

const botName = "StudentBot";

const config = {
  botName: botName,
  lang: "no",
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      withAvatar: false,
      delay: 500,
      widget: "overview",
    }),
  ],
  state: {
    gist: "",
    infoBox: "",
  },
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      //mapStateToProps: ["gist"],
    },
    {
      widgetName: "endMessage",
      widgetFunc: (props) => <EndMessage {...props} />,
      //mapStateToProps: ["gist"],
    },
  ],
};

export default config;
