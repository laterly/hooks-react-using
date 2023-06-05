import React from "react";
import UseSetStateDemo from "./demo/use-set-state";
import UseWatchEffectDemo from "./demo/use-watch-effect";
import UseDebounceFnDemo from "./demo/use-debounce-fn";
import UseDebounceDemo from "./demo/use-debounce";
const App: React.FC = () => {
  return (
    <>
      <h3>UseSetStateDemo</h3>
      <UseSetStateDemo />
      <h3>UseWatchEffectDemo</h3>
      <UseWatchEffectDemo />
      <h3>UseDebounceFnDemo</h3>
      <UseDebounceFnDemo />
      <h3>UseDebounceDemo</h3>
      <UseDebounceDemo />
    </>
  );
};

export default App;
