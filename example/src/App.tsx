import React from "react";
import UseSetStateDemo from "./demo/use-set-state";
import UseWatchEffectDemo from "./demo/use-watch-effect";
import UseDebounceFnDemo from "./demo/use-debounce-fn";
import UseDebounceDemo from "./demo/use-debounce";
import UseLocalStorageStateDemo from './demo/use-local-storage-state';
import UseSessionStorageStateDemo from './demo/use-session-storage-state';
import UseDebounceEffectDemo from "./demo/use-debounce-effect";
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
      <h3>UseLocalStorageState</h3>
      <UseLocalStorageStateDemo />
      <h3>UseSessionStorageState</h3>
      <UseSessionStorageStateDemo />
      <h3>UseDebounceEffectDemo</h3>
      <UseDebounceEffectDemo />
    </>
  );
};

export default App;
