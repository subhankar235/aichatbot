import { createContext, useEffect } from "react";
import {runChat} from "../config/gemini"; // adjust path as needed

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    console.log("📨 Prompt sent:", prompt);
    const result = await runChat(prompt);
    console.log("✅ Gemini answered:", result);
  };

  useEffect(() => {
    onSent("give me a full stack roadmap?");
  }, []);

  return (
    <Context.Provider value={{ onSent }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
