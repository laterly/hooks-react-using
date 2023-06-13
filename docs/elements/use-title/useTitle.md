# useTitle

useTitle 用来动态修改网页的标题

### 基础用法

```tsx
import { useTitle } from "hooks-react-using";

function Example() {
  // 使用默认标题模板，直接将 "React App" 设置为页面标题
  const title = useTitle("React App");

  // 使用自定义标题模板，将 "Page Title" 添加到页面标题中
  useTitle("Page Title", { template: "My Site | %s", isPrevOnUnmount: true });

  return <div>Hello World! {title}</div>;
}

export default Example;


```

## API

```typescript
export type UseTitleOptions = {
  template?: string | ((title: string) => string); //将默认的标题模板 %s 应用于指定的标题字符串
  isPrevOnUnmount?: boolean; //是否在组件卸载时候重置为上一个的标题
};
useTitle(title: string, options?: UseTitleOptions);

```
