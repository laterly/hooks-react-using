# useForceUpdate

useForceUpdate 它可以强制更新组件。在某些情况下，例如需要手动改变 React 组件的内部状态值并且不会触发 render 的情况下，可以使用 useForceUpdate 来强制触发重新渲染。

### 基础用法

```tsx
function MyComponent() {
  const forceUpdate = useForceUpdate();

  function handleClick() {
    // 在这里修改了组件的状态，但是没有触发 render
    // ...
    forceUpdate();
  }

  return (
    <div>
      <button onClick={handleClick}>强制更新</button>
      {/* ... */}
    </div>
  );
}

export default MyComponent;


```

## API

```typescript
 const forceUpdate = useForceUpdate();
```
