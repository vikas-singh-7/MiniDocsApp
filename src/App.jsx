import React from "react";
import Background from "./components/Background";
import Foreground from "./Foreground";

const App = () => {
  return (
    <div className="w-full h-full bg-zinc-800 relative">
      <Background />    
      <Foreground />
    </div>
  );
};
export default App;
