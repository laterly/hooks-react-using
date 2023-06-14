# useDocumentVisibility

useDocumentVisibility 检测当前页面是否处于活动状态（即当前窗口的可见性）

### 基础用法

```tsx
import { useDocumentVisibility } from "hooks-react-using";
function MyComponent() {
  const visibility = useDocumentVisibility();

  // 根据可见性状态执行不同的操作
  if (visibility === 'hidden') {
    // 页面不可见
    console.log('页面不可见');
  } else {
    // 页面可见
    console.log('页面可见');
  }

  return (
    <div>
      {/* 组件内容 */}
    </div>
  );
}
export default MyComponent;
```

## API

```typescript
type VisibilityState = 'visible' | 'hidden' | 'prerender' | undefined;

const visibilityState = useDocumentVisibility():VisibilityState;

```
