<div>
  <h1>
    hooks-react-using
  </h1>
  <sup>
    <a href="https://www.npmjs.com/package/hooks-react-using">
       <img src="https://img.shields.io/npm/v/hooks-react-using.svg" alt="npm package" />
    </a>
  </sup>
  <pre>npm i <a href="https://www.npmjs.com/package/hooks-react-using">hooks-react-using</a></pre>
</div>

### Lifecycles

- [`useMount`](./docs/life-cycle/use-mount/useMount.md) &mdash; useMount 只在组件初始化时执行。
- [`useUnmount`](./docs/life-cycle/use-unmount/useUnmount.md) &mdash; useUnmount 在组件卸载时执行的。
  <br/>
  <br/>

### State

- [`useSetState`](./docs/state/use-set-state/useSetState.md) &mdash; useSetState 管理 object 类型 state
- [`useDebounce`](./docs/state/use-debounce/useDebounce.md) &mdash; useDebounce 控制值在多次更新的防抖。
- [`useThrottle`](./docs/state/use-thtottle/useThrottle.md) &mdash; useThrottle 控制值在多次更新的节流。
- [`useLocalStorageState`](./docs/state/use-local-storage-state/useLocalStorageState.md) &mdash; useLocalStorageState 将状态持久化到 localStorage 本地存储中
- [`useSessionStorageState`](./docs/state/use-session-storage-state/useSessionStorageState.md) &mdash; useSessionStorageState 将状态持久化到 sessionStorage 本地存储中
- [`usePrevious`](./docs/state/use-previous/usePrevious.md) &mdash; usePrevious 用来获取组件上一次渲染时某个状态或属性的值
- [`useBoolean`](./docs/state/use-boolean/useBoolean.md) &mdash; useBoolean 管理一个布尔类型的状态值
- [`useToggle`](./docs/state/use-toggle/useToggle.md) &mdash; useToggle 可用于管理布尔值状态，还可以用于管理任何类型的状态的真假值
- [`useCountDown`](./docs/state/use-count-down/useCountDown.md) &mdash; useCountDown 可用于实现倒计时
- [`useRafCountDown`](./docs/state/use-raf-count-down/useRafCountDown.md) &mdash; useRafCountDown 可用于实现倒计时，基于 requestAnimationFrame 实现
- [`useLatest`](./docs/state/use-latest/useLatest.md) &mdash; 获取一个值的最新引用
- [`useStableState`](./docs/state/use-stable-state/useStableState.md) &mdash; useStableState 与 useState 类似，在 state 是最新值并且 setState 和最新值相等时会阻止 setState
  <br/>
  <br/>

### Effect

- [`useWatchEffect`](./docs/effect/use-watch-effect/useWatchEffect.md) &mdash; useWatchEffect 与 useEffect 类似，可以观察哪个依赖变化触发了 useEffect 的执行，观察依赖变更的新值和旧值，并且可以取消观察。
- [`useWatchLayoutEffect`](./docs/effect/use-watch-layout-effect/useWatchLayoutEffect.md) &mdash; useWatchLayoutEffect 与 useLayoutEffect 类似，可以观察哪个依赖变化触发了 useEffect 的执行，观察依赖变更的新值和旧值，并且可以取消观察。
- [`useDeepWatchEffect`](./docs/effect/use-deep-watch-effect/useDeepWatchEffect.md) &mdash; useDeepWatchEffect 与 useEffect 类似，可以深度观察哪个依赖变化触发了 useEffect 的执行，观察依赖变更的新值和旧值，并且可以取消观察。
- [`useDeepWatchLayoutEffect`](./docs/effect/use-deep-watch-layout-effect/useDeepWatchLayoutEffect.md) &mdash; useDeepWatchLayoutEffect 与 useLayoutEffect 类似，可以深度观察哪个依赖变化触发了 useEffect 的执行，观察依赖变更的新值和旧值，并且可以取消观察。
- [`useUpdateEffect`](./docs/effect/use-update-effect/useUpdateEffect.md) &mdash; useUpdateEffect 与 useEffect 类似，但只在依赖项更新时运行，不包括初次渲染
- [`useUpdateLayoutEffect`](./docs/effect/use-update-layout-effect/useUpdateLayoutEffect.md) &mdash; useUpdateLayoutEffect 与 useLayoutEffect 类似，但只在依赖项更新时运行，不包括初次渲染
- [`useAsyncEffect`](./docs/effect/use-async-effect/useAsyncEffect.md) &mdash; useAsyncEffect 与 useEffect 类似，可以使用异步函数
- [`useDeepCompareEffect`](./docs/effect/use-deep-compare-effect/useDeepCompareEffect.md) &mdash; useDeepCompareEffect 与 useEffect 类似，用于在函数组件中实现具有深比较
- [`useDeepCompareLayoutEffect`](./docs/effect/use-deep-compare-layout-effect/useDeepCompareLayoutEffect.md) &mdash; useDeepCompareLayoutEffect 与 useLayoutEffect 类似，用于在函数组件中实现具有深比较
- [`useOnceEffect`](./docs/effect/use-once-effect/useOnceEffect.md) &mdash; useOnceEffect 与 useEffect 类似，但只在依赖项更新时执行一次，后续依赖变更不再执行
- [`useOnceUpdateEffect`](./docs/effect/use-once-update-effect/useOnceUpdateEffect.md) &mdash; useOnceUpdateEffect 与 useEffect 类似，但是不包括初次渲染，并且只在依赖项更新时执行一次，后续依赖变更不再执行
- [`useOnceLayoutEffect`](./docs/effect/use-once-layout-effect/useOnceLayoutEffect.md) &mdash; useOnceLayoutEffect 与 useLayoutEffect 类似，但只在依赖项更新时执行一次，后续依赖变更不再执行
- [`useOnceUpdateLayoutEffect`](./docs/effect/use-once-update-layout-effect/useOnceUpdateLayoutEffect.md) &mdash; useOnceUpdateLayoutEffect 与 useLayoutEffect 类似，但是不包括初次渲染，并且只在依赖项更新时执行一次，后续依赖变更不再执行
- [`useDebounceFn`](./docs/effect/use-debounce-fn/useDebounceFn.md) &mdash; useDebounceFn 控制函数在多次触发的防抖。
- [`useDebounceEffect`](./docs/effect/use-debounce-effect/useDebounceEffect.md) &mdash; useDebounceEffect 可以有效地控制 useEffect 防抖。
- [`useThrottleFn`](./docs/effect/use-throttle-fn/useThrottleFn.md) &mdash; useThrottleFn 限制函数的执行频率，节流。
- [`useThrottleEffect`](./docs/effect/use-throttle-effect/useThrottleEffect.md) &mdash; useThrottleEffect 可以有效地控制 useEffect 节流。
- [`useTimeoutFn`](./docs/effect/use-timeout-fn/useTimeoutFn.md) &mdash; useTimeoutFn 在指定的时间后执行一个函数
- [`useRafTimeoutFn`](./docs/effect/use-raf-timeout-fn/useRafTimeoutFn.md) &mdash; useRafTimeoutFn 在指定的时间后执行一个函数，基于 requestAnimationFrame 实现
- [`useIntervalFn`](./docs/effect/use-interval-fn/useIntervalFn.md) &mdash; useIntervalFn 定时器执行一个函数
- [`useRafIntervalFn`](./docs/effect/use-raf-interval-fn/useRafIntervalFn.md) &mdash; useRafIntervalFn 定时器执行一个函数，基于 requestAnimationFrame 实现
  <br/>
  <br/>

### Elements
