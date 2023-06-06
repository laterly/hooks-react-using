import React from "react";
import UseSetStateDemo from "./demo/use-set-state";
import UseWatchEffectDemo from "./demo/use-watch-effect";
import UseDebounceFnDemo from "./demo/use-debounce-fn";
import UseDebounceDemo from "./demo/use-debounce";
import UseThrottleDemo from "./demo/use-throttle";
import UseLocalStorageStateDemo from './demo/use-local-storage-state';
import UseSessionStorageStateDemo from './demo/use-session-storage-state';
import UseDebounceEffectDemo from "./demo/use-debounce-effect";
import UseUpdateEffectDemo from "./demo/use-update-effect";
import UseUpdateLayoutEffectDemo from './demo/use-update-layout-effect'
import UseThrottleFnDemo from "./demo/use-throttle-fn";
import UseThrottleEffectDemo from './demo/use-throttle-effect';
import UsePreviousDemo from './demo/use-previous';
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
      <h3>UseThrottleDemo</h3>
      <UseThrottleDemo />
      <h3>UseThrottleFnDemo</h3>
      <UseThrottleFnDemo />
      <h3>UseThrottleEffectDemo</h3>
      <UseThrottleEffectDemo />
      <h3>UseLocalStorageState</h3>
      <UseLocalStorageStateDemo />
      <h3>UseSessionStorageState</h3>
      <UseSessionStorageStateDemo />
      <h3>UseDebounceEffectDemo</h3>
      <UseDebounceEffectDemo />
      <h3>UseUpdateEffectDemo</h3>
      <UseUpdateEffectDemo />
      <h3>UseUpdateLayoutEffectDemo</h3>
      <UseUpdateLayoutEffectDemo />
      <h3>UsePreviousDemo</h3>
      <UsePreviousDemo />
    </>
  );
};

export default App;
