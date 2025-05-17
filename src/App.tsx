import React from "react";
import WelcomeScreen from "./components/WelcomeScreen";

export default function App() {
  return <WelcomeScreen onNext={() => console.log("➡️ Переход к правилам")} />;
}
