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
  - [`useMount`](./docs/life-cycle/use-mount/useMount.md) &mdash; useMount只在组件初始化时执行。
  - [`useUnmount`](./docs/life-cycle/use-unmount/useUnmount.md) &mdash; useUnmount在组件卸载时执行的。
    <br/>
    <br/>
### State
  - [`useSetState`](./docs/state/use-set-state/useSetState.md) &mdash; useSetState管理 object 类型 state
  - [`useDebounce`](./docs/state/use-debounce/useDebounce.md) &mdash;useDebounce 控制值在多次更新的防抖。
  - [`useLocalStorageState`](./docs/state/use-local-storage-state/useLocalStorageState.md) &mdash;useLocalStorageState 将状态持久化到localStorage本地存储中
  - [`useSessionStorageState`](./docs/state/use-session-storage-state/useSessionStorageState.md) &mdash;useSessionStorageState 将状态持久化到sessionStorage本地存储中
    <br/>
    <br/>
### Effect
  - [`useWatchEffect`](./docs/effect/use-watch-effect/useWatchEffect.md) &mdash; useWatchEffect 可以观察值的变化，并且可以中止观察，减少不必要的开销。
   - [`useDebounceFn`](./docs/effect/use-debounce-fn/useDebounceFn.md) &mdash;useDebounceFn 控制函数在多次触发的防抖。
   - [`useDebounceEffect`](./docs/effect/use-debounce-effect/useDebounceEffect.md) &mdash;useDebounceEffect 可以有效地控制useEffect防抖。
   - [`useUpdateEffect`](./docs/effect/use-update-effect/useUpdateEffect.md) &mdash;useUpdateEffect 与 useEffect 类似，但只在依赖项更新时运行，不包括初次渲染
    <br/>
    <br/>
