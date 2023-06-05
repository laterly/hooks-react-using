import React from "react";
import UseSetStateDemo from "./demo/use-set-state";
import UseWatchEffectDemo from './demo/use-watch-effect';

const App: React.FC = () => {
  return (
    <>
      <UseSetStateDemo />
      <UseWatchEffectDemo />
    </>
  );
};

export default App;
