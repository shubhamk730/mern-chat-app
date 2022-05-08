import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = React.createContext();

const ChatProvider = (props) => {
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    setUser(userInfo);

    if (!userInfo) {
      history.push("/");
    }
  }, [history]);

  return (
    <ChatContext.Provider value={{ user, setUser }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
