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
  <br/>
  <br/>

### Effect

- [`useWatchEffect`](./docs/effect/use-watch-effect/useWatchEffect.md) &mdash; useWatchEffect 可以观察值的变化，并且可以中止观察，减少不必要的开销。
- [`useDebounceFn`](./docs/effect/use-debounce-fn/useDebounceFn.md) &mdash; useDebounceFn 控制函数在多次触发的防抖。
- [`useDebounceEffect`](./docs/effect/use-debounce-effect/useDebounceEffect.md) &mdash; useDebounceEffect 可以有效地控制 useEffect 防抖。
- [`useThrottleFn`](./docs/effect/use-throttle-fn/useThrottleFn.md) &mdash; useThrottleFn 限制函数的执行频率，节流。
- [`useThrottleEffect`](./docs/effect/use-throttle-effect/useThrottleEffect.md) &mdash; useThrottleEffect 可以有效地控制 useEffect 节流。
- [`useUpdateEffect`](./docs/effect/use-update-effect/useUpdateEffect.md) &mdash; useUpdateEffect 与 useEffect 类似，但只在依赖项更新时运行，不包括初次渲染
- [`useUpdateLayoutEffect`](./docs/effect/use-update-layout-effect/useUpdateLayoutEffect.md) &mdash; useUpdateLayoutEffect 与 useLayoutEffect 类似，但只在依赖项更新时运行，不包括初次渲染
- [`useAsyncEffect`](./docs/effect/use-async-effect/useAsyncEffect.md) &mdash; useAsyncEffect 与 useEffect 类似，可以使用异步函数
- [`useDeepCompareEffect`](./docs/effect/use-deep-compare-effect/useDeepCompareEffect.md) &mdash; useDeepCompareEffect 与 useEffect 类似，用于在函数组件中实现具有深比较
- [`useDeepCompareLayoutEffect`](./docs/effect/use-deep-compare-layout-effect/useDeepCompareLayoutEffect.md) &mdash; useDeepCompareLayoutEffect 与 useEffect 类似，用于在函数组件中实现具有深比较
- [`useTimeoutFn`](./docs/effect/use-timeout-fn/useTimeoutFn.md) &mdash; useTimeoutFn 在指定的时间后执行一个函数
  <br/>
  <br/>
