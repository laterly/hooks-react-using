<div>
  <h1>
    hooks-react-using
  </h1>
  <sup>
    <a href="https://www.npmjs.com/package/hooks-react-using">
       <img src="https://img.shields.io/npm/v/hooks-react-using.svg" alt="npm package" />
    </a>
     <a href="https://github.com/laterly/hooks-react-using/">
       <img src="https://img.shields.io/github/stars/laterly/hooks-react-using?style=social" alt="github stars" />
    </a>
  </sup>
</div>

<!-- ## hooks-react-using

![npm](https://img.shields.io/npm/v/hooks-react-using)
![GitHub stars](https://img.shields.io/github/stars/laterly/hooks-react-using?style=social) -->


## Features

* 封装了常用React Hooks的库
* 更轻松地管理组件中的状态和逻辑
* 支持 TypeScript


## Install

by using `npm`:

```bash
$ npm install hooks-react-using --save
```

by using `yarn`:

```bash
$ yarn add hooks-react-using
```

by using `pnpm`:

```bash
$ pnpm install hooks-react-using --save
```


## Basic usage

```ts
import { useToggle, useCountDown, useClickOutside } from 'hooks-react-using';
```

## API Hooks

#### `Lifecycles`

- [`useMount`](https://github.com/laterly/hooks-react-using/blob/master/docs/life-cycle/use-mount/useMount.md) &mdash; useMount 只在组件初始化时执行。
- [`useUnmount`](https://github.com/laterly/hooks-react-using/blob/master/docs/life-cycle/use-unmount/useUnmount.md) &mdash; useUnmount 在组件卸载时执行的。
  <br/>

#### `State`

- [`useSetState`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-set-state/useSetState.md) &mdash; useSetState 管理 object 类型 state
- [`useDebounce`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-debounce/useDebounce.md) &mdash; useDebounce 控制值在多次更新的防抖。
- [`useThrottle`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-thtottle/useThrottle.md) &mdash; useThrottle 控制值在多次更新的节流。
- [`useLocalStorageState`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-local-storage-state/useLocalStorageState.md) &mdash; useLocalStorageState 将状态持久化到 localStorage 本地存储中
- [`useSessionStorageState`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-session-storage-state/useSessionStorageState.md) &mdash; useSessionStorageState 将状态持久化到 sessionStorage 本地存储中
- [`usePrevious`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-previous/usePrevious.md) &mdash; usePrevious 用来获取组件上一次渲染时某个状态或属性的值
- [`useBoolean`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-boolean/useBoolean.md) &mdash; useBoolean 管理一个布尔类型的状态值
- [`useToggle`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-toggle/useToggle.md) &mdash; useToggle 可用于管理布尔值状态，还可以用于管理任何类型的状态的真假值
- [`useCountDown`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-count-down/useCountDown.md) &mdash; useCountDown 可用于实现倒计时
- [`useRafCountDown`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-raf-count-down/useRafCountDown.md) &mdash; useRafCountDown 可用于实现倒计时，基于 requestAnimationFrame 实现
- [`useLatest`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-latest/useLatest.md) &mdash; 获取一个值的最新引用
- [`useStableState`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-stable-state/useStableState.md) &mdash; useStableState 与 useState 类似，在 state 是最新值并且 setState 和最新值相等时会阻止 setState
- [`useMap`](https://github.com/laterly/hooks-react-using/blob/master/docs/state/use-map/useMap.md) &mdash; useMap 管理 new Map() 创建的映射对象的状态
  <br/>

#### `Effect`

- [`useWatchEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-watch-effect/useWatchEffect.md) &mdash; useWatchEffect 与 useEffect 类似，可以观察哪个依赖变化触发了 useEffect 的执行，观察依赖变更的新值和旧值，并且可以取消观察。
- [`useWatchLayoutEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-watch-layout-effect/useWatchLayoutEffect.md) &mdash; useWatchLayoutEffect 与 useLayoutEffect 类似，可以观察哪个依赖变化触发了 useEffect 的执行，观察依赖变更的新值和旧值，并且可以取消观察。
- [`useDeepWatchEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-deep-watch-effect/useDeepWatchEffect.md) &mdash; useDeepWatchEffect 与 useEffect 类似，可以深度观察哪个依赖变化触发了 useEffect 的执行，观察依赖变更的新值和旧值，并且可以取消观察。
- [`useDeepWatchLayoutEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-deep-watch-layout-effect/useDeepWatchLayoutEffect.md) &mdash; useDeepWatchLayoutEffect 与 useLayoutEffect 类似，可以深度观察哪个依赖变化触发了 useEffect 的执行，观察依赖变更的新值和旧值，并且可以取消观察。
- [`useUpdateEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-update-effect/useUpdateEffect.md) &mdash; useUpdateEffect 与 useEffect 类似，但只在依赖项更新时运行，不包括初次渲染
- [`useUpdateLayoutEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-update-layout-effect/useUpdateLayoutEffect.md) &mdash; useUpdateLayoutEffect 与 useLayoutEffect 类似，但只在依赖项更新时运行，不包括初次渲染
- [`useAsyncEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-async-effect/useAsyncEffect.md) &mdash; useAsyncEffect 与 useEffect 类似，可以使用异步函数
- [`useDeepCompareEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-deep-compare-effect/useDeepCompareEffect.md) &mdash; useDeepCompareEffect 与 useEffect 类似，用于在函数组件中实现具有深比较
- [`useDeepCompareLayoutEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-deep-compare-layout-effect/useDeepCompareLayoutEffect.md) &mdash; useDeepCompareLayoutEffect 与 useLayoutEffect 类似，用于在函数组件中实现具有深比较
- [`useOnceEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-once-effect/useOnceEffect.md) &mdash; useOnceEffect 与 useEffect 类似，但只在依赖项更新时执行一次，后续依赖变更不再执行
- [`useOnceUpdateEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-once-update-effect/useOnceUpdateEffect.md) &mdash; useOnceUpdateEffect 与 useEffect 类似，但是不包括初次渲染，并且只在依赖项更新时执行一次，后续依赖变更不再执行
- [`useOnceLayoutEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-once-layout-effect/useOnceLayoutEffect.md) &mdash; useOnceLayoutEffect 与 useLayoutEffect 类似，但只在依赖项更新时执行一次，后续依赖变更不再执行
- [`useOnceUpdateLayoutEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-once-update-layout-effect/useOnceUpdateLayoutEffect.md) &mdash; useOnceUpdateLayoutEffect 与 useLayoutEffect 类似，但是不包括初次渲染，并且只在依赖项更新时执行一次，后续依赖变更不再执行
- [`useDebounceFn`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-debounce-fn/useDebounceFn.md) &mdash; useDebounceFn 控制函数在多次触发的防抖。
- [`useDebounceEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-debounce-effect/useDebounceEffect.md) &mdash; useDebounceEffect 可以有效地控制 useEffect 防抖。
- [`useThrottleFn`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-throttle-fn/useThrottleFn.md) &mdash; useThrottleFn 限制函数的执行频率，节流。
- [`useThrottleEffect`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-throttle-effect/useThrottleEffect.md) &mdash; useThrottleEffect 可以有效地控制 useEffect 节流。
- [`useTimeoutFn`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-timeout-fn/useTimeoutFn.md) &mdash; useTimeoutFn 在指定的时间后执行一个函数
- [`useRafTimeoutFn`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-raf-timeout-fn/useRafTimeoutFn.md) &mdash; useRafTimeoutFn 在指定的时间后执行一个函数，基于 requestAnimationFrame 实现
- [`useIntervalFn`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-interval-fn/useIntervalFn.md) &mdash; useIntervalFn 定时器执行一个函数
- [`useRafIntervalFn`](https://github.com/laterly/hooks-react-using/blob/master/docs/effect/use-raf-interval-fn/useRafIntervalFn.md) &mdash; useRafIntervalFn 定时器执行一个函数，基于 requestAnimationFrame 实现
  <br/>

#### `Elements`

- [`useClickOutside`](https://github.com/laterly/hooks-react-using/blob/master/docs/elements/use-click-outside/useClickOutside.md) &mdash; useClickOutside 监听点击目标元素外部时执行某个回调函数，点击事件也可以自定义，可以是其它的鼠标事件
- [`useElementSize`](https://github.com/laterly/hooks-react-using/blob/master/docs/elements/use-element-size/useElementSize.md) &mdash; useElementSize 可以用于获取DOM元素的尺寸信息
- [`useScroll`](https://github.com/laterly/hooks-react-using/blob/master/docs/elements/use-scroll/useScroll.md) &mdash; useScroll 用于获取页面滚动位置的信息
- [`useHover`](https://github.com/laterly/hooks-react-using/blob/master/docs/elements/use-hover/useHover.md) &mdash; useHover 鼠标是否正在悬停目标元素上
- [`useTitle`](https://github.com/laterly/hooks-react-using/blob/master/docs/elements/use-title/useTitle.md) &mdash; useTitle 用来动态修改网页的标题
- [`useDocumentVisibility`](https://github.com/laterly/hooks-react-using/blob/master/docs/elements/use-document-visibility/useDocumentVisibility.md) &mdash; useDocumentVisibility 检测当前页面是否处于活动状态（即当前窗口的可见性）
- [`useEventListener`](https://github.com/laterly/hooks-react-using/blob/master/docs/elements/use-event-listener/useEventListener.md) &mdash; useEventListener 用于封装原生的 addEventListener 方法，使得在函数式组件中添加事件监听器更加方便
- [`useLongPress`](https://github.com/laterly/hooks-react-using/blob/master/docs/elements/use-long-press/useLongPress.md) &mdash; useLongPress 用于在长按某个元素时触发回调函数
- [`useFocusWithin`](https://github.com/laterly/hooks-react-using/blob/master/docs/elements/use-focus-within/useFocusWithin.md) &mdash; useFocusWithin 监听元素的焦点变化
- [`useScrollLock`](https://github.com/laterly/hooks-react-using/blob/master/docs/elements/use-scroll-lock/useScrollLock.md) &mdash; useScrollLock 可以用来禁止页面滚动
