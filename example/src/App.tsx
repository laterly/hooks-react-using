import React from "react";
import UseMount from "./demo/use-mount";
import UseSetStateDemo from "./demo/use-set-state";
import UseWatchEffectDemo from "./demo/use-watch-effect";
import UseDeepWatchEffectDemo from './demo/use-deep-watch-effect';
import UseDebounceFnDemo from "./demo/use-debounce-fn";
import UseDebounceDemo from "./demo/use-debounce";
import UseThrottleDemo from "./demo/use-throttle";
import UseLocalStorageStateDemo from "./demo/use-local-storage-state";
import UseSessionStorageStateDemo from "./demo/use-session-storage-state";
import UseDebounceEffectDemo from "./demo/use-debounce-effect";
import UseUpdateEffectDemo from "./demo/use-update-effect";
import UseUpdateLayoutEffectDemo from "./demo/use-update-layout-effect";
import UseThrottleFnDemo from "./demo/use-throttle-fn";
import UseThrottleEffectDemo from "./demo/use-throttle-effect";
import UsePreviousDemo from "./demo/use-previous";
import UseAsyncEffectDemo from "./demo/use-async-effect";
import UseDeepCompareEffectDemo from "./demo/use-deep-compare-effect";
import UseTimeoutFnDemo from "./demo/use-timeout-fn";
import UseRafTimeoutFnDemo from "./demo/use-raf-timeout-fn";
import UseIntervalFnDemo from "./demo/use-interval-fn";
import UseRafIntervalFnDemo from "./demo/use-raf-interval-fn";
import UseOnceEffectDemo from './demo/use-once-effect';
import UseOnceUpdateEffectDemo from "./demo/use-once-update-effect";
import UseBooleanDemo from './demo/use-boolean';
import UseToggleDemo from './demo/use-toggle';
import UseCountDownDemo from './demo/use-count-down';
import UseRafCountDownDemo from './demo/use-raf-count-down';
import UseStableStateDemo from './demo/use-stable-state';
import UseClickOutsideDemo from './demo/use-click-outside';
import UseELementSizeDemo from './demo/use-element-size';
import UseScrollDemo from './demo/use-scroll';
const App: React.FC = () => {
  return (
    <>
      <h3>UseMount</h3>
      <UseMount />
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
      <h3>UseAsyncEffectDemo</h3>
      <UseAsyncEffectDemo />
      <h3>UseDeepCompareEffectDemo</h3>
      <UseDeepCompareEffectDemo />
      <h3>UseTimeoutFnDemo</h3>
      <UseTimeoutFnDemo />
      <h3>UseRafTimeoutFnDemo</h3>
      <UseRafTimeoutFnDemo />
      <h3>UseIntervalFnDemo</h3>
      <UseIntervalFnDemo />
      <h3>UseRafIntervalFnDemo</h3>
      <UseRafIntervalFnDemo />
      <h3>UseOnceEffectDemo</h3>
      <UseOnceEffectDemo />
      <h3>UseOnceUpdateEffectDemo</h3>
      <UseOnceUpdateEffectDemo />
      <h3>UseDeepWatchEffect</h3>
      <UseDeepWatchEffectDemo />
      <h3>UseBooleanDemo</h3>
      <UseBooleanDemo />
      <h3>UseCountDownDemo</h3>
      <UseCountDownDemo />
      <h3>UseRafCountDownDemo</h3>
      <UseRafCountDownDemo />
      <h3>UseStableStateDemo</h3>
      <UseStableStateDemo />
      <h3>UseToggleDemo</h3>
      <UseToggleDemo />
      <h3>UseClickOutsideDemo</h3>
      <UseClickOutsideDemo />
      <h3>UseELementSizeDemo</h3>
      <UseELementSizeDemo />
      <h3>UseScrollDemo</h3>
      <UseScrollDemo />
    </>
  );
};

export default App;
