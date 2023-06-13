import { useTitle } from "../../../../packages/hooks-react-using/src";

function Example() {
  // 使用默认标题模板，直接将 "React App" 设置为页面标题
  const title = useTitle("React App");

  // 使用自定义标题模板，将 "Page Title" 添加到页面标题中
  useTitle("Page Title", { template: "My Site | %s", isPrevOnUnmount: true });

  return <div>Hello World! {title}</div>;
}

export default Example;
