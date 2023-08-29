import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleMessageParserDocs = () => {
    const messages = createChatBotMessage("Enter your Name");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
  };

  const handleAge = () => {
    const messages = createChatBotMessage("Enter your Age");



    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
  };

  const handleEndMessage = () => {
    const customMessage = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit",
      {
        widget: "endMessage",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, customMessage],
    }));
  };


  const handleEmptyMessage = () => {
    const messages = createChatBotMessage("Please provide correct input!");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
  };

  
  const handleConfirm = () => {
    const messages = createChatBotMessage("Type \"Y\" to confirm?");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
    
  };
  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessageParserDocs,
            handleAge,
            handleEndMessage,
            handleEmptyMessage,
            handleConfirm
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
